import { login } from "@/Types/type";

export async function loginuser(data: login) {
  const res = await fetch(
    "https://platform.phonico.com/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const da = await res.json();
  console.log("yeh sab sey pehle ka ", da);
  if (da.status == true) {
    console.log("agar error nhin hai tou", res);
    return da;
  }
  if (da.status == false) {
    console.log("agar error hai tou", res);

    return { error: "Invalid credentials" };
  }
}
