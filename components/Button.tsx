import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
    label: string
    buttonTheme?: "primary"
    onPress?: () => void
}

const Button = ({ label, buttonTheme, onPress }: Props) => {
    if (buttonTheme === "primary") {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
                <Pressable style={[styles.button, { backgroundColor: "#fff" }]} onPress={onPress}>
                    <Ionicons name="image-outline" size={24} color="#25292e" />
                    <Text style={[styles.buttonLabel, { color: "#25292e", marginLeft: 5 }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }


    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        alignContent: "center",
        justifyContent: "center",
        width: 320,
        height: 80,
        marginHorizontal: 20,
        padding: 3,
        // backgroundColor: "#fff",
        // borderColor: "#0c7d7bff",
        // borderWidth: 2
    },
    button: {
        height: "100%",
        width: "100%",
        // backgroundColor: "#7c3f3fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        flexDirection: "row"
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16
    }
})