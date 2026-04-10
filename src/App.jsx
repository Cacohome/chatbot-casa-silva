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
      text: "Olá! Seja bem-vindo à Casa Silva.",
    },
    {
      role: "bot",
      text: "Sou seu assistente virtual e posso agilizar seu atendimento com orçamento, materiais e entrega.",
    },
    {
      role: "bot",
      text: "Para começar, me diga o que você precisa. Exemplo: fios, chuveiro, cimento, tintas ou ferragens.",
    },
  ]);

  function addMessage(role, text) {
    setMessages((prev) => [...prev, { role, text }]);
  }

  function tratarNecessidade(texto) {
    const text = texto.toLowerCase();

    if (text.includes("cimento")) return "Perfeito. Já identifiquei interesse em cimento.";
    if (text.includes("tijolo")) return "Ótimo. Já identifiquei interesse em tijolos.";
    if (text.includes("fio") || text.includes("cabo")) return "Perfeito. Já identifiquei interesse em fios e cabos.";
    if (text.includes("chuveiro")) return "Ótimo. Já identifiquei interesse em chuveiros.";
    if (text.includes("tinta") || text.includes("lixa")) return "Perfeito. Já identifiquei interesse em tintas e acabamento.";
    if (text.includes("cano") || text.includes("hidrául")) return "Ótimo. Já identifiquei interesse em materiais hidráulicos.";
    if (text.includes("ferragem") || text.includes("ferramenta")) return "Perfeito. Já identifiquei interesse em ferragens e ferramentas.";

    return "Perfeito. Já registrei sua necessidade.";
  }

  function enviarMensagem(textoManual) {
    const texto = (textoManual ?? input).trim();
    if (!texto) return;

    addMessage("user", texto);

    if (step === "inicio") {
      setLead((prev) => ({ ...prev, necessidade: texto }));
      addMessage("bot", tratarNecessidade(texto));
      addMessage("bot", "Agora me informe seu nome para eu registrar seu pré-atendimento.");
      setStep("nome");
    } else if (step === "nome") {
      setLead((prev) => ({ ...prev, nome: texto }));
      addMessage(
        "bot",
        `Perfeito, ${texto}. Agora informe seu WhatsApp com DDD para que nossa equipe comercial finalize seu atendimento e envie o orçamento.`
      );
      setStep("telefone");
    } else if (step === "telefone") {
      setLead((prev) => ({ ...prev, telefone: texto }));
      addMessage("bot", "Perfeito. Seu atendimento foi registrado com sucesso.");
      addMessage("bot", "Nossa equipe comercial pode continuar seu atendimento e preparar seu orçamento completo.");
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

  function preencherRapido(texto) {
    enviarMensagem(texto);
  }

  const whatsappLink = `https://wa.me/5512981113281?text=${encodeURIComponent(
    `Olá, sou ${lead.nome || "cliente"}.\nTenho interesse em: ${lead.necessidade || "orçamento"}.\nMeu telefone é: ${lead.telefone || ""}`
  )}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 16,
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #38bdf8 100%)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: 20,
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.97)",
            borderRadius: 22,
            padding: 20,
            boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1d4ed8, #38bdf8)",
              borderRadius: 18,
              padding: 18,
              color: "#fff",
              marginBottom: 18,
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>Casa Silva</div>
            <div style={{ marginTop: 8, lineHeight: 1.5 }}>
              Assistente virtual para atendimento comercial, pré-orçamento e encaminhamento ao vendedor.
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
              O que esta demonstração faz
            </div>
            <div style={{ color: "#334155", lineHeight: 1.7 }}>
              Atende automaticamente, entende a necessidade do cliente, coleta nome e WhatsApp e direciona o lead pronto para o setor comercial.
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
              Categorias atendidas
            </div>
            <div style={{ color: "#334155", lineHeight: 1.8 }}>
              Elétrica, hidráulica, ferragens, ferramentas, tintas, lixas, canos, chuveiros, fios, lâmpadas e materiais em geral.
            </div>
          </div>

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              borderRadius: 16,
              padding: 16,
              color: "#1e3a8a",
              lineHeight: 1.6,
            }}
          >
            <strong>Endereço:</strong>
            <br />
            Av. Andrômeda, 2965
            <br />
            Bosque dos Eucaliptos
            <br />
            São José dos Campos - SP
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            borderRadius: 22,
            boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: 720,
          }}
        >
          <div
            style={{
              padding: 20,
              background: "linear-gradient(90deg, #1d4ed8, #0ea5e9)",
              color: "#fff",
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 800 }}>
              Chatbot Comercial Premium
            </div>
            <div style={{ marginTop: 6 }}>
              Demonstração profissional de atendimento automatizado
            </div>
          </div>

          <div
            style={{
              padding: 14,
              borderBottom: "1px solid #e5e7eb",
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <button onClick={() => preencherRapido("Quero fazer um orçamento")} style={quickBtn}>
              Orçamento
            </button>
            <button onClick={() => preencherRapido("Preciso de fios e lâmpadas")} style={quickBtn}>
              Elétrica
            </button>
            <button onClick={() => preencherRapido("Preciso de canos e chuveiro")} style={quickBtn}>
              Hidráulica
            </button>
            <button onClick={() => preencherRapido("Quero tintas e lixas")} style={quickBtn}>
              Tintas
            </button>
          </div>

          <div
            style={{
              flex: 1,
              minHeight: 320,
              maxHeight: 420,
              overflowY: "auto",
              padding: 18,
              background: "#f8fafc",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.role === "user" ? "right" : "left",
                  margin: "10px 0",
                }}
              >
                <span
                  style={{
                    maxWidth: "80%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                    padding: "14px 16px",
                    borderRadius: 18,
                    lineHeight: 1.5,
                    fontSize: 17,
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #2563eb, #0ea5e9)"
                        : "#e5e7eb",
                    color: msg.role === "user" ? "#fff" : "#111827",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: 16,
              borderTop: "1px solid #e5e7eb",
              background: "#fff",
            }}
          >
            {step !== "final" ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 140px",
                  gap: 12,
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder={
                    step === "inicio"
                      ? "Descreva o que você precisa..."
                      : step === "nome"
                      ? "Digite seu nome..."
                      : "Digite seu WhatsApp com DDD..."
                  }
                  style={{
                    width: "100%",
                    padding: 16,
                    fontSize: 17,
                    borderRadius: 14,
                    border: "2px solid #dbeafe",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  onClick={() => enviarMensagem()}
                  style={{
                    padding: "16px 20px",
                    borderRadius: 14,
                    border: "none",
                    background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16,
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
                  padding: 18,
                  borderRadius: 14,
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                Falar com vendedor no WhatsApp
              </a>
            )}

            <div
              style={{
                marginTop: 10,
                fontSize: 13,
                color: "#64748b",
              }}
            >
              O cliente pode enviar clicando em Enviar ou apertando Enter.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const quickBtn = {
  padding: "10px 14px",
  borderRadius: 999,
  border: "1px solid #bfdbfe",
  background: "#eff6ff",
  color: "#1d4ed8",
  fontWeight: 700,
  cursor: "pointer",
};
