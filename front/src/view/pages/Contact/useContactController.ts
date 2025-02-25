import { useState } from "react";

export function useContactController() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleChangeName(value: string) {
    setName(value);
  }
  function handleChangeEmail(value: string) {
    setEmail(value);
  }
  function handleChangeMessage(value: string) {
    setMessage(value);
  }
  return {
    handleChangeName,
    handleChangeEmail,
    handleChangeMessage,
    email,
    message,
    name,
  };
}
