import { storageKeys } from "@/utils/storageKeys";
import { jwtDecode } from "jwt-decode";
import { createContext, useCallback, useLayoutEffect, useState } from "react";
import { AuthService } from "./authService";
import { httpClient } from "./httpClient";

interface IAuthContextValue {
  signedIn: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  signedUserId: string;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(() => {
    return !!localStorage.getItem(storageKeys.accessToken);
  });
  const [signedUserId, setSignedUserId] = useState<string>("");

  useLayoutEffect(() => {
    const interceptorId = httpClient.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem(storageKeys.accessToken);

      if (accessToken) {
        config.headers.set("Authorization", `Bearer ${accessToken}`);
        const decoded = jwtDecode<{ sub: string }>(accessToken);
        setSignedUserId(decoded.sub!);
      }

      return config;
    });

    return () => {
      httpClient.interceptors.request.eject(interceptorId);
    };
  }, []);

  useLayoutEffect(() => {
    const interceptorId = httpClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem(storageKeys.refreshToken);

        if (originalRequest.url === "/refresh-token") {
          setSignedIn(false);
          localStorage.clear();
          return Promise.reject(error);
        }

        if (error.response?.status !== 401 || !refreshToken) {
          return Promise.reject(error);
        }

        const { accessToken, refreshToken: newRefreshToken } =
          await AuthService.refreshToken(refreshToken);

        localStorage.setItem(storageKeys.accessToken, accessToken);
        localStorage.setItem(storageKeys.refreshToken, newRefreshToken);

        return httpClient(originalRequest);
      }
    );

    return () => {
      httpClient.interceptors.response.eject(interceptorId);
    };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { accessToken, refreshToken } = await AuthService.signIn({
      email,
      password,
    });
    const decoded = jwtDecode<{ sub: string }>(accessToken);
    setSignedUserId(decoded.sub);
    localStorage.setItem(storageKeys.accessToken, accessToken);
    localStorage.setItem(storageKeys.refreshToken, refreshToken);
    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.clear();
    setSignedIn(false);
  }, []);

  const value: IAuthContextValue = {
    signedIn,
    signIn,
    signOut,
    signedUserId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
