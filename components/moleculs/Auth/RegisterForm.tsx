import { View } from "react-native";
import { Controller } from "react-hook-form";

import { useRegister } from "@/hooks";
import { commonStyles } from "@/constants/Styles";
import { BaseButton, BaseInput, StyledText } from "@/components/atom";

export default function RegisterForm() {
  const { control, onRegister, handleSubmit } = useRegister();

  return (
    <View style={commonStyles.form}>
      <View style={commonStyles.formField}>
        <Controller
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <BaseInput
                hasError={!!error?.message}
                onChange={onChange}
                value={value}
                placeholder={"Email"}
              />

              {error?.message && (
                <StyledText style={commonStyles.formError}>
                  {error.message}
                </StyledText>
              )}
            </>
          )}
          name={"email"}
        />
      </View>

      <View style={commonStyles.formField}>
        <Controller
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <BaseInput
                hasError={!!error?.message}
                onChange={onChange}
                value={value}
                placeholder={"Name"}
              />

              {error?.message && (
                <StyledText style={commonStyles.formError}>
                  {error.message}
                </StyledText>
              )}
            </>
          )}
          name={"name"}
        />
      </View>

      <View style={commonStyles.formField}>
        <Controller
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <BaseInput
                hasError={!!error?.message}
                onChange={onChange}
                value={value}
                placeholder={"Password"}
              />

              {error?.message && (
                <StyledText style={commonStyles.formError}>
                  {error.message}
                </StyledText>
              )}
            </>
          )}
          name={"password"}
        />
      </View>

      <View style={commonStyles.formField}>
        <Controller
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <BaseInput
                hasError={!!error?.message}
                onChange={onChange}
                value={value}
                placeholder={"Re-Password"}
              />

              {error?.message && (
                <StyledText style={commonStyles.formError}>
                  {error.message}
                </StyledText>
              )}
            </>
          )}
          name={"repeat_password"}
        />
      </View>

      <View style={commonStyles.formActions}>
        <BaseButton
          styleLabel={commonStyles.formButton}
          onPress={handleSubmit(onRegister)}
          label={"Sign Up"}
        />
      </View>
    </View>
  );
}
