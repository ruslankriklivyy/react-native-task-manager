import { StyleSheet } from "react-native";
import { FONTS } from "@/constants/Fonts";

export const DEFAULT_PADDING = 20;

export const commonStyles = StyleSheet.create({
  wrapper: {
    margin: 20,
  },
  form: {
    width: "100%",
  },
  formField: {
    width: "100%",
    marginBottom: 10,
  },
  formError: {
    color: "red",
    fontSize: 16,
  },
  formActions: {
    marginTop: 15,
  },
  formButton: {
    fontSize: 18,
  },

  authBox: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDE0F5",
    height: "100%",
    padding: DEFAULT_PADDING,
  },
  authHead: {
    marginTop: 20,
    marginBottom: 30,
  },
  authTitle: {
    fontFamily: FONTS.RubikSemiBold,
    fontWeight: "600",
    fontSize: 34,
    textAlign: "center",
  },
  authDescription: {
    textAlign: "center",
  },
  orTextBox: {
    marginVertical: 30,
  },
  orText: {
    fontFamily: FONTS.RubikMedium,
    fontWeight: "500",
    opacity: 0.5,
  },
  authBottom: {
    position: "absolute",
    bottom: 20,
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
