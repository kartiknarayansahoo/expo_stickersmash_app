import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

const PlaceHolderImage = require("@/assets/images/background-image.png")

export default function Index() {
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: "images",
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
      setShowButtons(true);
      console.log(result);
    }
    else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowButtons(false);
    setSelectedImg(undefined);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = () => {

  }

  const onCloseModal = () => {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer sourceImage={PlaceHolderImage} selectedImage={selectedImg}></ImageViewer>
      </View>
      {showButtons ?
        (<View style={[styles.footerContainer, { flexDirection: 'row', alignItems: "flex-start" }]}>
          <IconButton iconName={"refresh"} label="Reset" onPress={onReset}></IconButton>
          <CircleButton onPress={onAddSticker}></CircleButton>
          <IconButton iconName={"save-alt"} label="Save" onPress={() => alert("pressed button")}></IconButton>
        </View>) :
        (<View style={styles.footerContainer}>
          <Button label="Choose a photo" buttonTheme="primary" onPress={pickImageAsync}></Button>
          <Button label="Use this photo" onPress={() => setShowButtons(true)}></Button>
        </View>
        )
      }
      <EmojiPicker isVisible={isModalVisible} onClose={onCloseModal}>
        <EmojiList onSelect={setSelectedEmoji} onCloseModal={onCloseModal}></EmojiList>
      </EmojiPicker>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  },
  button: {
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "dotted"
  },
  imageContainer: {
    flex: 3 / 4,
    justifyContent: "center"
  },
  footerContainer: {
    flex: 1 / 4,
    alignItems: "center",
  }
})
