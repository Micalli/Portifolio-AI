import { httpClient } from "../httpClient";

export interface updateTaskParams {
  description: string;
  id?: string
}

export async function update({id, description} :updateTaskParams) {
  const { data } = await httpClient.put(`/todo/${id}`, {description});
  return data;
}
