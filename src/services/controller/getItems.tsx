import { httpClient } from "../auth/httpClient";

export default class Controller {
  static async getItems(url: string) {
    const { data } = await httpClient.get(url);
    return data;
  }
}
