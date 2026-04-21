import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState("inicio");
  const [input, setInput] = useState("");

  const [lead, setLead] = useState({
    necessidade: "",
    nome: "",
    telefone: "",
  });

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Olá! 👋 Seja bem-vindo à ARTES E FERRADURAS.",
    },
    {
      role: "bot",
      text: "Trabalhamos com peças artesanais e personalizadas. Me diga o que você procura.",
    },
  ]);

  function addMessage(role, text, delay = 0) {
    setTimeout(() => {
      setMessages((prev) => [...prev, { role, text }]);
    }, delay);
  }

  function isSaudacao(text) {
    const t = text.toLowerCase();
    return (
      t.includes("bom dia") ||
      t.includes("boa tarde") ||
      t.includes("boa noite") ||
      t === "oi" ||
      t === "olá" ||
      t === "ola"
    );
  }

  function enviarMensagem(textoManual) {
    const texto = (textoManual ?? input).trim();
    if (!texto) return;

    setMessages((prev) => [...prev, { role: "user", text: texto }]);

    // 🔹 ETAPA 1 - IDENTIFICAR PRODUTO
    if (step === "inicio") {
      if (isSaudacao(texto)) {
        addMessage(
          "bot",
          "Olá! 😊 Me diga qual produto você tem interesse.",
          500
        );
        setInput("");
        return;
      }

      // salva produto correto
      setLead((prev) => ({ ...prev, necessidade: texto }));

      addMessage(
        "bot",
        `Perfeito! Já entendi que você procura: "${texto}".`,
        600
      );

      addMessage(
        "bot",
        "Agora me diga seu nome para continuar o atendimento.",
        1400
      );

      setStep("nome");
    }

    // 🔹 ETAPA 2 - NOME
    else if (step === "nome") {
      setLead((prev) => ({ ...prev, nome: texto }));

      addMessage(
        "bot",
        `Prazer, ${texto}! Agora me informe seu WhatsApp com DDD.`,
        700
      );

      setStep("telefone");
    }

    // 🔹 ETAPA 3 - TELEFONE
    else if (step === "telefone") {
      setLead((prev) => ({ ...prev, telefone: texto }));

      addMessage(
        "bot",
        "Perfeito! Já registrei suas informações.",
        600
      );

      addMessage(
        "bot",
        "Agora você pode continuar direto com um vendedor pelo WhatsApp 👇",
        1400
      );

      setStep("final");
    }

    setInput("");
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      enviarMensagem();
    }
  }

  // 🔥 MENSAGEM WHATSAPP PROFISSIONAL
  const mensagemWhatsapp = `Olá! Tenho interesse em um produto da Artes & Ferraduras.

Produto: ${lead.necessidade || "Não informado"}

Pode me informar valor, prazo de produção e entrega?`;

  const whatsappLink = `https://wa.me/5512981113281?text=${encodeURIComponent(
    mensagemWhatsapp
  )}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          background: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: 20,
            background: "linear-gradient(90deg,#111827,#374151)",
            color: "#fff",
          }}
        >
          <strong>ARTES E FERRADURAS</strong>
          <div style={{ fontSize: 14 }}>
            Atendimento automatizado
          </div>
        </div>

        {/* CHAT */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 15,
            background: "#f9fafb",
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                textAlign: msg.role === "user" ? "right" : "left",
                margin: "8px 0",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  borderRadius: 15,
                  maxWidth: "80%",
                  background:
                    msg.role === "user" ? "#2563eb" : "#e5e7eb",
                  color: msg.role === "user" ? "#fff" : "#000",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* INPUT / FINAL */}
        <div style={{ padding: 15, borderTop: "1px solid #ddd" }}>
          {step !== "final" ? (
            <div style={{ display: "flex", gap: 10 }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Digite aqui..."
                style={{
                  flex: 1,
                  padding: 12,
                  borderRadius: 10,
                  border: "1px solid #ccc",
                }}
              />

              <button
                onClick={() => enviarMensagem()}
                style={{
                  padding: "12px 20px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                Enviar
              </button>
            </div>
          ) : (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: "#25D366",
                color: "#fff",
                padding: 14,
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Falar no WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
