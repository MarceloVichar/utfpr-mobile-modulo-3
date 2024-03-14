import {View, StyleSheet} from "react-native";
import React, {ReactNode} from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

interface CardProps {
    children: ReactNode;
}

export default function Card({children}: CardProps) {
    return <View style={styles.cardProps}>{children}</View>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

const styles = StyleSheet.create({
    cardProps: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
});