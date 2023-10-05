import { useState } from "react";
import "../style/AppFormButton.css";

export default function AppFormButton() {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    console.log(message);
  };
  return (
    <div className="AppFormButton">
      <input
        className="AppFormButton__input"
        type="text"
        placeholder="Сообщение"
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
      />
      <input
        className="AppFormButton__button"
        type="button"
        value="Отправить"
        onClick={() => sendMessage()}
      />
    </div>
  );
}
