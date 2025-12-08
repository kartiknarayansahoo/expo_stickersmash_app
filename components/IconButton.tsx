import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
    iconName: keyof typeof MaterialIcons.glyphMap
    label: string,
    onPress: () => void;
}

const IconButton = ({ iconName, label, onPress }: Props) => {
    return (
        <Pressable style={styles.iconButtonContainer} onPress={onPress}>
            <MaterialIcons name={iconName} size={35} color="#7a7a7aff" />
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    text: {
        color: "#7a7a7aff",
        fontWeight: "500",
        fontSize: 14
    },
    iconButtonContainer: {
        alignItems: "center",
        marginTop: 14
    }
})