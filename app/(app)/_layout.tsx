import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  if (true) {
    return <Redirect href={"/login"} />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          presentation: "modal",
        }}
      />

      <Stack.Screen
        name="register"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
