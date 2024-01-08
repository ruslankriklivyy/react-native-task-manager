import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginPayload } from "@/types/auth/LoginPayload";
import { useEffect } from "react";
import { router } from "expo-router";

const loginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function useLogin() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<LoginPayload>({
    mode: "onTouched",
    resolver: zodResolver(loginValidationSchema),
  });

  const formValues = watch();

  const onLogin = async (loginPayload: LoginPayload) => {
    console.log("login payload: ", loginPayload);
    router.push("/");
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors, formValues]);

  return {
    control,
    handleSubmit,
    onLogin,
  };
}
