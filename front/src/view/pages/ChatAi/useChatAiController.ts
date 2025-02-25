import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { chatAiService } from "../../../app/services/chatAiService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { localStorageKeys } from "../../../app/config/localStorageKeys";

const schema = z.object({
  message: z
    .string()
    .nonempty("Mensagem é obrigatória")
    .max(100, "Máximo de 100 caracteres"),
});
type FormData = z.infer<typeof schema>;

export function useChatAiController() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const {
    handleSubmit: hookFormSubmit,
    register,
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (message: string) => chatAiService.sendMessage(message),
  });

  useEffect(() => {
    const savedMessages = JSON.parse(
      localStorage.getItem(localStorageKeys.messages) ?? "[]"
    );
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (savedMessages.length > 0) {
      setMessages(savedMessages); 
    }
  }, []);

  useEffect(() => {
    JSON.parse(localStorage.getItem(localStorageKeys.messages) ?? "[]");
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (messages.length > 0) {
      localStorage.setItem(localStorageKeys.messages, JSON.stringify(messages));
    }
  }, [messages]);

  const handleSubmit = hookFormSubmit(async ({ message }) => {
    try {
      setMessages((prevState) => [
        ...prevState,
        { text: message, sender: "user" },
      ]);
      const response = await mutateAsync(message);

      setMessages((prevState) => [
        ...prevState,
        { text: response, sender: "bot" },
      ]);

      reset();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)
      toast.error("Erro ao enviar mensagem!");
    }
  });

  function handleClearMessages() {
    setMessages([]);
    localStorage.removeItem(localStorageKeys.messages);
  }

  return {
    handleSubmit,
    register,
    isPending,
    messages,
    messagesEndRef,
    handleClearMessages,
  };
}
