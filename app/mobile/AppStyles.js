import { StyleSheet } from "react-native";

export const colors = {
  textBase: "rgb(29, 29, 31)",
  textClear: "rgb(173, 173, 179)",
  textClearer: "rgb(223, 224, 237)",
  backgroundBase: "rgb(247, 247, 248)",
  borderClear: "rgb(240, 240, 245)"
};

export const sizes = {
  sm: 5,
  base: 10,
  lg: 15,
  xl: 20,

  // Radius
  borderRadius: 4,

  // Text
  textBase: 16,
  h1: 23,
  h2: 16,
  h3: 12
};

export const shadows = {
  light: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 5
  }
};

export default StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundBase: {
    backgroundColor: colors.backgroundBase
  },
  inputWhite: {
    backgroundColor: "white",
    borderColor: colors.borderClear,
    borderRadius: sizes.borderRadius,
    borderWidth: 1,
    paddingTop: 3,
    paddingBottom: 3,
    marginLeft: -10,
    marginRight: -10,
    ...shadows.light
  },
  textTitle: {
    color: colors.textBase,
    fontSize: sizes.h1
  }
});
