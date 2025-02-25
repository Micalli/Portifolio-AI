import { httpClient } from '../httpClient';

export async function sendMessage (message: string) {
    const { data } = await httpClient.post("/chat", {
      message,
    });
    return data
}