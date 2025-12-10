import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>

const EmojiPicker = ({ isVisible, onClose, children }: Props) => {
    return (
        <View>
            <Modal animationType='slide' visible={isVisible} backdropColor={"#d81d1dff"} transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.subModalContainer}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Choose a sticker</Text>
                            <Pressable onPress={onClose}>
                                <Ionicons name="close" size={24} color="#fff" />
                            </Pressable>
                        </View>
                        <View style={styles.emojiContainer}>
                            {children}
                        </View>
                    </View>
                    <Pressable onPress={onClose} style={styles.invisiblePressable}>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}

export default EmojiPicker

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignContent: "flex-end",
        flexDirection: "column-reverse"
    },
    subModalContainer: {
        height: "30%",
        backgroundColor: '#484848ff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // backgroundColor: '#fa7f7fff',
    },
    invisiblePressable: {
        height: "100%",
    },
    header: {
        backgroundColor: '#3c3c3cff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    emojiContainer: {
        // backgroundColor: '#ff8181ff',
        height: "100%"
    },
    headerText: {
        color: "#fff"
    }
})