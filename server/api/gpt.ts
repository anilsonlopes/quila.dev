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
  const query: { tema: string } = getQuery(event);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content:
          "Quando o usuário solicitar um novo desafio, elabore um objeto JSON com uma pergunta, apenas 3 alternativas de resposta sem prefixo. O tema será especificado na solicitação. Inclua no JSON a resposta correta usando o index da alternativa e o tema solicitado.",
      },
      {
        role: "user",
        content: `Novo desafio no tema: ${query.tema}`,
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
