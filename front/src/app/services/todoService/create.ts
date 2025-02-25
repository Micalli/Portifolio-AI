import { httpClient } from "../httpClient";

export interface createTaskParams {
  description: string;
  priority: "HIGH" | "MEDIUM" | "LOW" | null;
}

export async function create(params :createTaskParams) {
  const { data } = await httpClient.post("/todo", params);
  return data;
}
