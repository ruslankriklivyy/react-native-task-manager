import { StyleSheet, View } from "react-native";

import { BaseButton } from "@/components/atom";
import GoogleSvg from "@/assets/images/google.svg";

export default function AuthSocialButton() {
  return (
    <View style={authSocialButtonStyles.authSocialButtonBox}>
      <BaseButton
        onPress={() => null}
        label={"Sign In with Google"}
        prevElement={<GoogleSvg width={25} height={25} />}
      />
    </View>
  );
}

const authSocialButtonStyles = StyleSheet.create({
  authSocialButtonBox: {},
});
