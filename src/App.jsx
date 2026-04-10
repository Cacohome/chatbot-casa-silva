import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Olá! Sou o assistente virtual da Casa Silva. Posso te ajudar com orçamento, produtos, entrega ou falar com vendedor.",
    },
  ]);

  const [input, setInput] = useState("");

  function getBotReply(msg) {
    const text = msg.toLowerCase();

    if (text.includes("orçamento") || text.includes("preço")) {
      return "Perfeito! Me diga os produtos e quantidades que você precisa que eu monto um orçamento.";
    }

    if (text.includes("fio") || text.includes("lâmpada")) {
      return "Temos fios, cabos, lâmpadas e materiais elétricos em geral. Quer que eu monte um orçamento?";
    }

    if (text.includes("cano") || text.includes("chuveiro")) {
      return "Temos canos, conexões, chuveiros e materiais hidráulicos. Me diga o que precisa.";
    }

    if (text.includes("tinta") || text.includes("lixa")) {
      return "Trabalhamos com tintas, lixas e materiais de acabamento. Posso te indicar opções.";
    }

    if (text.includes("entrega")) {
      return "Fazemos entrega em São José dos Campos. Me diga o bairro para verificar.";
    }

    if (text.includes("endereço")) {
      return "Estamos na Av. Andrômeda, 2965 - Bosque dos Eucaliptos.";
    }

    if (text.includes("vendedor")) {
      return "Posso te encaminhar para um vendedor agora mesmo.";
    }

    return "Posso te ajudar com orçamento, produtos ou entrega. O que você precisa?";
  }

  function sendMessage() {
    if (!input) return;

    const newMessages = [
      ...messages,
      { role: "user", text: input },
      { role: "bot", text: getBotReply(input) },
    ];

    setMessages(newMessages);
    setInput("");
  }

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h2>Casa Silva - Chatbot</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          height: 400,
          overflowY: "auto",
          marginBottom: 10,
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <span
              style={{
                background: msg.role === "user" ? "#007bff" : "#eee",
                color: msg.role === "user" ? "#fff" : "#000",
                padding: "8px 12px",
                borderRadius: 10,
                display: "inline-block",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem..."
        style={{ width: "80%", padding: 10 }}
      />

      <button onClick={sendMessage} style={{ padding: 10 }}>
        Enviar
      </button>
    </div>
  );
}
