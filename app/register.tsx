import { View } from "react-native";

import { StyledText } from "@/components/atom";
import { AuthSocialButton, RegisterForm } from "@/components/moleculs";
import BaseLink from "@/components/atom/BaseLink";
import { commonStyles } from "@/constants/Styles";

export default function Register() {
  return (
    <View style={commonStyles.authBox}>
      <View style={commonStyles.authHead}>
        <StyledText style={commonStyles.authTitle}>Sign Up</StyledText>

        <StyledText style={commonStyles.authDescription}>
          Let's create you an account
        </StyledText>
      </View>

      <AuthSocialButton />

      <View style={commonStyles.orTextBox}>
        <StyledText style={commonStyles.orText}>OR</StyledText>
      </View>

      <RegisterForm />

      <View style={commonStyles.authBottom}>
        <StyledText>Already have an account?</StyledText>

        <BaseLink label={"Sign In"} link={"/login"} />
      </View>
    </View>
  );
}
