import { register } from "@/Types/type";

export async function registeruser(
  data: register,
) {
  console.log("hello im server data", data);

  const res = await fetch(
    "https://platform.phonico.com/api/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const da = await res.json();
  console.log(da);
  return res;
}
