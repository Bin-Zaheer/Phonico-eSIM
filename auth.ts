import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { registeruser } from "./services/register.service";
import { nextregister } from "./Types/type";
import { loginuser } from "./services/login.service";

export const { auth, handlers, signIn, signOut } =
  NextAuth({
    trustHost: true,
    secret: process.env.AUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          email: { type: "email" },
          password: { type: "password" },
          name: { type: "text" },
          otp: { type: "text" },
          action: { type: "text" },
        },
        async authorize(credentials) {
          const {
            email,
            password,
            name,
            otp,
            action,
          } = <nextregister>credentials;
          if (action === "register") {
            const user = {
              email,
              password,
              name,
              otp,
            };
            const data = await registeruser(user);
            console.log(
              "hello mien auth sey hoon",
              data,
              data.status,
            );

            if (
              !data ||
              !data.ok ||
              data.status == 500
            ) {
              return {
                email,
                name,
                otp,
              };
            }
            // return data
          }
          if (action === "login" || !action) {
            const data = await loginuser({
              email,
              password,
            });
            console.log(
              "heloo mien auth ka data hoon",
              data,
            );
            if (
              data &&
              !data.error &&
              data.status === true
            ) {
              return data;
            }
            return null;
          }
        },
      }),
    ],
    pages: {
      signIn: "/login",
      error: "/login",
    },
  });
