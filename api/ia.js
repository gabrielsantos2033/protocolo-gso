export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({ error: "Texto não fornecido" });
  }

  const t = texto.toLowerCase();

  let score = 0;

  // Indicadores combinados
  if (t.includes("pix") || t.includes("transferência")) score += 25;
  if (t.includes("urgente") || t.includes("agora")) score += 20;
  if (t.includes("número novo") || t.includes("troquei de chip")) score += 25;
  if (t.includes("amanhã eu devolvo")) score += 20;
  if (t.includes("me ajuda") && t.includes("pagar")) score += 20;

  // Contexto narrativo
  if (t.includes("mãe") || t.includes("pai")) score += 10;

  if (score > 100) score = 100;

  let classificacao;
  if (score >= 70) classificacao = "ALTO RISCO";
  else if (score >= 40) classificacao = "MÉDIO RISCO";
  else classificacao = "BAIXO RISCO";

  res.status(200).json({
    risco: score,
    classificacao
  });
}
