import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceHolderImage = require("@/assets/images/background-image.png")

export default function Index() {
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
  const [showButtons, setShowButtons] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: "images",
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
      console.log(result);
    }
    else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer sourceImage={PlaceHolderImage} selectedImage={selectedImg}></ImageViewer>
      </View>
      {showButtons ?
        (<View style={[styles.footerContainer, { flexDirection: 'row', alignItems: "flex-start" }]}>
          <IconButton iconName={"refresh"} label="Reset" onPress={() => alert("pressed button")}></IconButton>
          <CircleButton onPress={() => alert("pressed button")}></CircleButton>
          <IconButton iconName={"save-alt"} label="Save" onPress={() => alert("pressed button")}></IconButton>
        </View>) :
        (<View style={styles.footerContainer}>
          <Button label="Choose a photo" buttonTheme="primary" onPress={pickImageAsync}></Button>
          <Button label="Use this photo" onPress={() => setShowButtons(true)}></Button>
        </View>
        )
      }
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
