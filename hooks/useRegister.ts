import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { router } from "expo-router";

import { RegisterPayload } from "@/types/auth/RegisterPayload";

const registerValidationSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(6),
  repeat_password: z.string().min(6),
});

export default function useRegister() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegisterPayload>({
    mode: "onTouched",
    resolver: zodResolver(registerValidationSchema),
  });

  const formValues = watch();

  const onRegister = async (registerPayload: RegisterPayload) => {
    console.log("register payload: ", registerPayload);
    router.push("/");
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors, formValues]);

  return {
    control,
    handleSubmit,
    onRegister,
  };
}
