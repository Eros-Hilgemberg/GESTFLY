import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentType, setType] = useState(type);

  switch (type) {
    default:
      return (
        <input
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          {...props}
        />
      );
    case "password":
      function handleInput(visible: boolean) {
        setVisible(!visible);
        if (!visible) {
          setType("text");
        } else {
          setType("password");
        }
      }
      return (
        <>
          <input
            type={currentType}
            data-slot="input"
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              className
            )}
            {...props}
          />
          <button
            onClick={() => handleInput(visible)}
            type="button"
            className="absolute text-input right-3 cursor-pointer bottom-1.5"
          >
            {!visible ? <Eye size={20} /> : <EyeSlash size={20} />}
          </button>
        </>
      );
  }
}

export { Input };
