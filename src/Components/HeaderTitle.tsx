import { Image, Text, View } from "react-native";

const HeaderTitle = ({ children }: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ fontSize: 36, color: "#00ff00" }}>{children}</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
    </View>
  );
};

export default HeaderTitle;
