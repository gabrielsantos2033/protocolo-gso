export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({ error: "Texto não fornecido" });
  }

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: texto,
          parameters: {
            candidate_labels: [
              "golpe financeiro",
              "fraude familiar",
              "engenharia social",
              "pedido urgente suspeito",
              "mensagem legítima"
            ],
          },
        }),
      }
    );

    const data = await response.json();

    if (!data.scores) {
      return res.status(500).json({ error: "Erro na IA", raw: data });
    }

    const resultados = data.labels.map((label, index) => ({
      label,
      score: Math.round(data.scores[index] * 100),
    }));

    const risco = Math.max(...resultados.map((r) => r.score));

    return res.status(200).json({
      risco,
      resultados,
    });

  } catch (error) {
    return res.status(500).json({
      error: "Falha interna",
      details: error.message,
    });
  }
}
