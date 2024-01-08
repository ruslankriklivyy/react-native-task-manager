import { View } from "react-native";

import { StyledText } from "@/components/atom";
import { LoginForm, AuthSocialButton } from "@/components/moleculs";
import BaseLink from "@/components/atom/BaseLink";
import { commonStyles } from "@/constants/Styles";

export default function Login() {
  return (
    <View style={commonStyles.authBox}>
      <View style={commonStyles.authHead}>
        <StyledText style={commonStyles.authTitle}>Sign In</StyledText>

        <StyledText style={commonStyles.authDescription}>
          Let's go in
        </StyledText>
      </View>

      <AuthSocialButton />

      <View style={commonStyles.orTextBox}>
        <StyledText style={commonStyles.orText}>OR</StyledText>
      </View>

      <LoginForm />

      <View style={commonStyles.authBottom}>
        <StyledText>Don't have an account?</StyledText>

        <BaseLink label={"Sign In"} link={"/register"} />
      </View>
    </View>
  );
}
