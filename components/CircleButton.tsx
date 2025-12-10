import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
    onPress: () => void;
}

const CircleButton = ({ onPress }: Props) => {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable onPress={onPress} style={styles.circleButton}>
                <FontAwesome6 name="add" size={35} color="#000000ff" />
            </Pressable>
        </View>
    )
}

export default CircleButton

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderRadius: 100
    },
    circleButtonContainer: {
        marginHorizontal: 60,
        borderColor: "#ffd33d",
        borderWidth: 4,
        borderRadius: 100,
        padding: 2
    }
})