import { forwardRef } from "react";

interface MessageProps {
  text: string;
  sender: string;
}
export const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ text, sender }, ) => {
  const isUser = sender === "user";
  return (
    <>
      <div className={`flex  ${isUser ? "justify-end" : "justify-start"} my-1`}>
        <div
          className={`px-4 py-2 max-w-[650px] ${
            isUser ? "rounded-bl-xl rounded-t-xl" : "rounded-br-xl rounded-t-xl"
          } ${isUser ? "bg-accent text-background" : "bg-card text-primary"}`}
        >
          {text}
        </div>
      </div>
      <div
        className={`flex  ${
          isUser ? "justify-end" : "justify-start"
        }  text-secondary text-xs`}
      >
        {isUser ? "Você" : "Assistencia IA"}
      </div>
    </>
  );
}
)