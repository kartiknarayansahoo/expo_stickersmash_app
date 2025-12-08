import { Image } from 'expo-image'
import React from 'react'
import { ImageSourcePropType, StyleSheet } from 'react-native'

type propType = {
    sourceImage: ImageSourcePropType
    selectedImage?: string
}

const ImageViewer = ({ sourceImage, selectedImage }: propType) => {
    const imgSourceFinal = selectedImage ? { uri: selectedImage } : sourceImage;

    return (
        <Image source={imgSourceFinal} style={styles.image}></Image>
    )
}

export default ImageViewer;

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})