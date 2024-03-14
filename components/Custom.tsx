import React from "react";
import {View, Text, Button} from "react-native";

interface CustomProps {
    content: string;
    onPress: () => void;
}

export default function Custom({content, onPress}: CustomProps) {
    return (
        <View>
            <Text>{content}</Text>
            <Button title="Press me" onPress={onPress}/>
        </View>
    );
}