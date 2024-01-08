import { LoginPayload } from "@/types/auth/LoginPayload";

export interface RegisterPayload extends LoginPayload {
  name: string;
  repeat_password;
}
