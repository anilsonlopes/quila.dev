import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type QuestionResponse = {
  tema: string;
  pergunta: string;
  alternativas: string[];
  resposta_correta: number;
};

export default defineEventHandler(async (event) => {
  const query: { tema: string; nivel: string } = getQuery(event);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "Você é Board, um jogo de tabuleiro com desafios.",
      },
      {
        role: "system",
        content:
          "Você receberá um tema e um nível de dificuldade de 1 à 3. Então você fornecerá um JSON no seguinte formato: { tema: string, pergunta: string, alternativas: string[], resposta_correta: number }",
      },
      {
        role: "system",
        content:
          "Não utilizar prefixo nas alternativas. A resposta correta deve corresponder ao index da alternativa correta.",
      },
      {
        role: "user",
        content: `Novo desafio no tema: ${query.tema} e nível de dificuldade: ${query.nivel}}`,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.choices[0].message.content as unknown as QuestionResponse;
});
