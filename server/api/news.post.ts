import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();

const supabaseUrl = "https://uurntmthouqbqtwlyyyl.supabase.co";
const supabase = createClient(supabaseUrl, config.supabaseKey);

const createLead = async (email: string) => {
  const { error } = await supabase
    .from("quila-news")
    .insert([{ email: email }]);

  if (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Foi mal, na minha máquina funcionou, tenta de novo?",
    });
  }

  return { message: "Email cadastrado com sucesso" };
};

const checkLeadExists = async (email: string) => {
  const { data } = await supabase
    .from("quila-news")
    .select("*")
    .eq("email", email);

  if (data?.length === 0) {
    return true;
  }

  return false;
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email: string = body.email;

  const noHasLead = await checkLeadExists(email);

  if (noHasLead) {
    return createLead(email);
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: "Email já cadastrado",
    });
  }
});
