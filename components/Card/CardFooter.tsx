import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface CardFooterProps {
  author: string;
}

export default function CardFooter({ author }: CardFooterProps) {
  return (
    <View>
      <Text style={styles.footer}>{author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 12,
    fontWeight: "400",
  },
});
