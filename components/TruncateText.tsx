import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";

const truncate = (source, size) => {
  return {
    data: source.length > size ? source.slice(0, size - 1) : source,
    isTruncated: source.length > size,
  };
};

const TruncateText = ({ text, onThreeDotsPressed, size = 56,  ...rest }) => {
  const [hasToTruncate, setHasToTruncate] = useState(true);

  const { data: truncatedText, isTruncated: isTextTruncated } = truncate(
    text,
    size
  );

  return (
    <Text {...rest}>
      {hasToTruncate ? truncatedText : text}{" "}
      <Text
        style={{ fontWeight: "bold" }}
        onPress={() => onThreeDotsPressed(hasToTruncate, setHasToTruncate)}
      >
        {hasToTruncate && isTextTruncated ? "…" : ""}
      </Text>
    </Text>
  );
};

export default TruncateText;

