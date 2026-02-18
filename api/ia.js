export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { texto } = req.body;
  if (!texto) {
    return res.status(400).json({ error: "Texto não fornecido" });
  }

  const t = texto.toLowerCase();

  let indicadores = {
    urgencia: 0,
    financeiro: 0,
    pressao: 0,
    emocional: 0,
    identidade: 0
  };

  // Detecção narrativa contextual
  if (/agora|urgente|imediato|hoje|rápido/.test(t)) indicadores.urgencia += 20;
  if (/pix|transferência|pagamento|dinheiro|taxa/.test(t)) indicadores.financeiro += 30;
  if (/bloqueado|cancelado|última chance|problema sério/.test(t)) indicadores.pressao += 25;
  if (/socorro|me ajuda|desesperado|grave/.test(t)) indicadores.emocional += 15;
  if (/mãe|pai|filho|troquei de número|chip novo|whatsapp novo/.test(t)) indicadores.identidade += 25;

  // Bônus por combinação estratégica
  if (indicadores.identidade && indicadores.financeiro) {
    indicadores.financeiro += 15;
    indicadores.identidade += 10;
  }

  if (indicadores.urgencia && indicadores.financeiro) {
    indicadores.urgencia += 10;
  }

  let riscoTotal =
    indicadores.urgencia +
    indicadores.financeiro +
    indicadores.pressao +
    indicadores.emocional +
    indicadores.identidade;

  if (riscoTotal > 100) riscoTotal = 100;

  let tecnica = "Indefinida";
  let tipo = "Não identificado";

  if (indicadores.identidade && indicadores.financeiro) {
    tecnica = "Engenharia Social Narrativa";
    tipo = "Golpe do WhatsApp / PIX";
  } else if (indicadores.pressao && indicadores.financeiro) {
    tecnica = "Coerção Financeira";
    tipo = "Fraude de Bloqueio / Multa";
  } else if (indicadores.emocional) {
    tecnica = "Manipulação Emocional";
    tipo = "Pedido Sensível Fraudulento";
  }

  res.status(200).json({
    risco: riscoTotal,
    indicadores,
    tecnica,
    tipo
  });
}
