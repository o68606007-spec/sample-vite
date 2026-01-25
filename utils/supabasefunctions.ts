import { supabase } from "./supabase";

export const getAllTodos = async () => {
  const { data, error } = await supabase.from("study-record").select("*");
  if (error) {
    console.error("データ取得エラー:", error.message);
    return [];
  }
  return data;
};
