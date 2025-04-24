"use server";

// /login/page.tsx는 client component이므로 handleForm을 login/page.tsx에 정의할 수 없다.
export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(formData.get("email"), formData.get("password"));
  console.log("logged in!@");
  return {
    errors: ["wrong password", "password too short"],
  };
}
