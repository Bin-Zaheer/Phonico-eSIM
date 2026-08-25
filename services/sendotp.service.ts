import { OTP } from "@/Types/type";

export async function sndotp(data: OTP) {
  console.log(data);

  const res = await fetch(
    "https://platform.phonico.com/api/send-otp",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email }),
    },
  );
  const da = await res.json();
  return da;
  //   console.log(da);
}
