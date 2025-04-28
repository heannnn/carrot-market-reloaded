"use server";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import { z } from "zod";

// custom validation function
const checkUsername = (username: string) => !username.includes("potato");
const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be string",
        required_error: "Where is my username",
      })
      .toLowerCase()
      .trim()
      .transform((username) => `🔥${username}🔥`)
      .refine(checkUsername, "custom error"),

    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(10),
  })
  // form 전체에 대한 에러 {formErrors:[~~]} -> 에러의 책임 path 지정
  .refine(checkPasswords, {
    message: "Both passwords should be the same",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  // parse는 유효성 검사가 실패하면 throw error -> try ~ catch 사용
  // safeParse는 유효성 검사가 실패한다고해서 에러 throw하지 않음
  const result = formSchema.safeParse(data);
  if (!result.success) {
    // result.error를 리턴하면 큰 object가 리턴되지만
    // result.error.flatten()을 리턴하면 error가 굉장히 보기 편해짐
    return result.error.flatten();
  }

  // 데이터 검증을 위해 if~~ 하고싶지 않다.
}
