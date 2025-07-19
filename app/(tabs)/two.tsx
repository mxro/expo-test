import { StyleSheet } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import { Text, View } from "@/components/Themed";
import { CameraView } from "expo-camera";

export default function TabTwoScreen() {
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      {isFocused && <CameraView style={styles.camera} facing={"front"} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
});
