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
      text: "Olá! Seja bem-vindo à ARTES E FERRADURAS.",
    },
    {
      role: "bot",
      text: "Sou seu assistente virtual e posso agilizar seu atendimento com peças artesanais, itens decorativos e produtos personalizados.",
    },
    {
      role: "bot",
      text: "Para começar, me diga o que você procura. Exemplo: tacho, porta alianças, cabide, porta vinhos, lustre ou peça personalizada.",
    },
  ]);

  function addMessage(role, text, delay = 0) {
    setTimeout(() => {
      setMessages((prev) => [...prev, { role, text }]);
    }, delay);
  }

  function tratarNecessidade(texto) {
    const text = texto.toLowerCase().trim();

    if (
      text.includes("bom dia") ||
      text.includes("boa tarde") ||
      text.includes("boa noite") ||
      text === "oi" ||
      text === "olá" ||
      text === "ola"
    ) {
      return "Olá! 👋 Seja muito bem-vindo à ARTES E FERRADURAS.\nComo posso te ajudar hoje?";
    }

    if (text.includes("coador de café") || text.includes("coador")) {
      return "Perfeito! Já identifiquei interesse em coador de café.";
    }

    if (text.includes("guardanapo")) {
      return "Ótimo! Já identifiquei interesse em guardanapo ou suporte relacionado.";
    }

    if (text.includes("porta louças") || text.includes("porta louca") || text.includes("porta loucas")) {
      return "Perfeito! Já identifiquei interesse em porta louças.";
    }

    if (text.includes("papel toalha") || text.includes("suporte para papel toalha")) {
      return "Ótimo! Já identifiquei interesse em suporte para papel toalha.";
    }

    if (
      text.includes("tábua") ||
      text.includes("tabua") ||
      text.includes("tábuas de corte") ||
      text.includes("tabuas de corte")
    ) {
      return "Perfeito! Já identifiquei interesse em tábuas de corte luxo.";
    }

    if (text.includes("tacho")) {
      return "Perfeito! Trabalhamos com tachos artesanais personalizados. Se quiser, posso registrar o tamanho desejado, como 65, 70, 75 ou 85 de diâmetro.";
    }

    if (text.includes("fogareiro") || text.includes("tripé") || text.includes("tripe")) {
      return "Ótimo! Já identifiquei interesse em tripé fogareiro flex para álcool ou gás.";
    }

    if (text.includes("marcador de truco")) {
      return "Perfeito! Já identifiquei interesse em marcador de truco.";
    }

    if (text.includes("porta alianças") || text.includes("porta aliancas")) {
      return "Ótimo! Temos modelos exclusivos de porta alianças. Você quer algo mais rústico ou personalizado?";
    }

    if (text.includes("casco porta aliança") || text.includes("casco porta alianca")) {
      return "Perfeito! Já identifiquei interesse em casco porta aliança.";
    }

    if (text.includes("quadro para marcar casamento") || text.includes("quadro casamento")) {
      return "Ótimo! Já identifiquei interesse em quadro para marcar casamento.";
    }

    if (text.includes("suporte para mini arranjos") || text.includes("mini arranjos")) {
      return "Perfeito! Já identifiquei interesse em suporte para mini arranjos.";
    }

    if (text.includes("moldura") || text.includes("molduras para espelhos") || text.includes("espelho")) {
      return "Ótimo! Já identifiquei interesse em molduras para espelhos.";
    }

    if (text.includes("sino decorativo") || text.includes("sino")) {
      return "Perfeito! Já identifiquei interesse em sino decorativo.";
    }

    if (text.includes("placa personalizada") || text.includes("placas personalizadas") || text.includes("baia")) {
      return "Ótimo! Já identifiquei interesse em placas personalizadas para baias de cavalo.";
    }

    if (text.includes("placas de homenagem") || text.includes("placa de homenagem")) {
      return "Perfeito! Já identifiquei interesse em placas de homenagem.";
    }

    if (text.includes("porta retrato")) {
      return "Ótimo! Já identifiquei interesse em porta retrato.";
    }

    if (text.includes("cabeça de cavalo") || text.includes("cabeca de cavalo")) {
      return "Perfeito! Já identifiquei interesse em cabeça de cavalo decorativa.";
    }

    if (text.includes("porta alianças porta cavalos") || text.includes("porta aliancas porta cavalos")) {
      return "Ótimo! Já identifiquei interesse em porta alianças estilo porta cavalos.";
    }

    if (text.includes("porta chaves") || text.includes("porta-chave")) {
      return "Perfeito! Já identifiquei interesse em porta chaves personalizado ou temático.";
    }

    if (text.includes("cabide violão") || text.includes("cabide viola") || text.includes("cabide violao")) {
      return "Ótimo! Já identifiquei interesse em cabide personalizado para violão ou viola.";
    }

    if (text.includes("cabides multiusos") || text.includes("cabides e prateleiras") || text.includes("cabide")) {
      return "Perfeito! Temos diversos cabides, suportes e prateleiras personalizadas. Qual estilo você procura?";
    }

    if (text.includes("laços") || text.includes("lacos")) {
      return "Ótimo! Já identifiquei interesse em cabide para laços.";
    }

    if (text.includes("espingarda")) {
      return "Perfeito! Já identifiquei interesse em suporte para espingarda.";
    }

    if (text.includes("berrante")) {
      return "Ótimo! Já identifiquei interesse em suporte para berrante.";
    }

    if (text.includes("chapéu") || text.includes("chapeu")) {
      return "Perfeito! Já identifiquei interesse em cabide para chapéus.";
    }

    if (text.includes("porta botas") || text.includes("bota")) {
      return "Ótimo! Já identifiquei interesse em porta botas.";
    }

    if (text.includes("organizador") || text.includes("decorador")) {
      return "Perfeito! Já identifiquei interesse em organizador e decorador.";
    }

    if (text.includes("prateleira") || text.includes("estante")) {
      return "Ótimo! Já identifiquei interesse em estantes e prateleiras.";
    }

    if (text.includes("abajur")) {
      return "Perfeito! Já identifiquei interesse em mini abajur luxo.";
    }

    if (text.includes("lustre")) {
      return "Ótimo! Temos lustres artesanais e também fazemos modelos personalizados.";
    }

    if (text.includes("puxador colonial") || text.includes("puxador")) {
      return "Perfeito! Já identifiquei interesse em puxador colonial.";
    }

    if (text.includes("trinco") || text.includes("ferrolho")) {
      return "Ótimo! Já identifiquei interesse em trinco ou ferrolho.";
    }

    if (
      text.includes("números forjados") ||
      text.includes("numeros forjados") ||
      text.includes("número forjado") ||
      text.includes("numero forjado")
    ) {
      return "Perfeito! Já identifiquei interesse em números forjados personalizados para residência.";
    }

    if (text.includes("banheiro") || text.includes("acessorios para banheiros")) {
      return "Ótimo! Já identifiquei interesse em acessórios para banheiro.";
    }

    if (text.includes("porta toalha") || text.includes("toalhas") || text.includes("toalha de rosto")) {
      return "Perfeito! Já identifiquei interesse em porta toalhas ou apoio para toalha de rosto.";
    }

    if (text.includes("papel higiênico") || text.includes("papel higienico")) {
      return "Ótimo! Já identifiquei interesse em porta papel higiênico.";
    }

    if (
      text.includes("vinho") ||
      text.includes("vinhos") ||
      text.includes("taças") ||
      text.includes("tacas") ||
      text.includes("adega")
    ) {
      return "Perfeito! Trabalhamos com apoio para vinhos, porta vinhos, porta taças e adegas de parede.";
    }

    if (text.includes("abridor de garrafas") || text.includes("abridor")) {
      return "Ótimo! Já identifiquei interesse em abridor de garrafas.";
    }

    if (text.includes("saca rolhas") || text.includes("saca-rolhas")) {
      return "Perfeito! Já identifiquei interesse em saca-rolhas personalizado ou de luxo.";
    }

    if (text.includes("chaveiro abridor") || text.includes("chaveiros abridor")) {
      return "Ótimo! Já identifiquei interesse em chaveiro abridor.";
    }

    return "Perfeito! Já registrei seu interesse em uma peça da ARTES E FERRADURAS. Agora me diga mais detalhes do item que você procura.";
  }

  function enviarMensagem(textoManual) {
    const texto = (textoManual ?? input).trim();
    if (!texto) return;

    setMessages((prev) => [...prev, { role: "user", text: texto }]);

    if (step === "inicio") {
      setLead((prev) => ({ ...prev, necessidade: texto }));

      addMessage("bot", tratarNecessidade(texto), 700);
      addMessage(
        "bot",
        "Agora me informe seu nome para eu registrar seu atendimento.",
        1500
      );

      setStep("nome");
    } else if (step === "nome") {
      setLead((prev) => ({ ...prev, nome: texto }));

      addMessage(
        "bot",
        `Prazer, ${texto}! Agora me informe seu WhatsApp com DDD para nossa equipe continuar seu atendimento.`,
        900
      );

      setStep("telefone");
    } else if (step === "telefone") {
      setLead((prev) => ({ ...prev, telefone: texto }));

      addMessage("bot", "Perfeito. Seu atendimento foi registrado com sucesso.", 700);
      addMessage(
        "bot",
        "Agora você pode continuar diretamente com nossa equipe pelo WhatsApp.",
        1500
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

  function preencherRapido(texto) {
    enviarMensagem(texto);
  }

  const whatsappLink = `https://wa.me/5512992278837?text=${encodeURIComponent(
    `Olá, sou ${lead.nome || "cliente"}.
Tenho interesse em: ${lead.necessidade || "produto personalizado"}.
Meu telefone é: ${lead.telefone || ""}`
  )}`;

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 900 : false;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 16,
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #1f2937 0%, #111827 45%, #374151 100%)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "320px 1fr",
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
              background: "linear-gradient(135deg, #111827, #6b7280)",
              borderRadius: 18,
              padding: 18,
              color: "#fff",
              marginBottom: 18,
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>ARTES E FERRADURAS</div>
            <div style={{ marginTop: 8, lineHeight: 1.5 }}>
              Assistente virtual para atendimento, peças artesanais, decoração e itens personalizados.
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
              O que esta demonstração faz
            </div>
            <div style={{ color: "#334155", lineHeight: 1.7 }}>
              Atende automaticamente, identifica o produto de interesse, coleta nome e WhatsApp e direciona o cliente para continuar o atendimento.
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
              Principais linhas
            </div>
            <div style={{ color: "#334155", lineHeight: 1.8 }}>
              Tachos artesanais, porta alianças, cabides, itens para banheiro, porta vinhos, suportes, lustres, molduras, placas personalizadas e decoração temática.
            </div>
          </div>

          <div
            style={{
              background: "#f3f4f6",
              border: "1px solid #d1d5db",
              borderRadius: 16,
              padding: 16,
              color: "#111827",
              lineHeight: 1.6,
            }}
          >
            <strong>Dica de uso:</strong>
            <br />
            O cliente pode digitar o item desejado ou usar os botões rápidos para iniciar o atendimento.
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
              background: "linear-gradient(90deg, #111827, #4b5563)",
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
            <button onClick={() => preencherRapido("Quero um tacho personalizado")} style={quickBtn}>
              Tachos
            </button>
            <button onClick={() => preencherRapido("Quero porta alianças")} style={quickBtn}>
              Porta Alianças
            </button>
            <button onClick={() => preencherRapido("Quero cabides e suportes")} style={quickBtn}>
              Cabides
            </button>
            <button onClick={() => preencherRapido("Quero porta vinhos e adegas")} style={quickBtn}>
              Porta Vinhos
            </button>
          </div>

          <div
            style={{
              flex: 1,
              minHeight: 320,
              maxHeight: 420,
              overflowY: "auto",
              padding: 18,
              background: "#f9fafb",
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
                        ? "linear-gradient(135deg, #1f2937, #4b5563)"
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
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 140px",
                  gap: 12,
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder={
                    step === "inicio"
                      ? "Descreva o produto que você procura..."
                      : step === "nome"
                      ? "Digite seu nome..."
                      : "Digite seu WhatsApp com DDD..."
                  }
                  style={{
                    width: "100%",
                    padding: 16,
                    fontSize: 17,
                    borderRadius: 14,
                    border: "2px solid #d1d5db",
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
                    background: "linear-gradient(135deg, #111827, #4b5563)",
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
                Falar no WhatsApp
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
  border: "1px solid #d1d5db",
  background: "#f3f4f6",
  color: "#111827",
  fontWeight: 700,
  cursor: "pointer",
};
