import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface CardBodyProps {
  content: string;
}

export default function CardBody({ content }: CardBodyProps) {
  return (
    <View>
      <Text style={styles.body}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    fontWeight: "400",
  },
});
