import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const FloatingActionButton = ({ children, backgroundColor, size, ...rest }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor },
        { width: size, height: size, borderRadius: size / 2 },
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 100,
    right: 20,
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
