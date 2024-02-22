import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from"./src/componentes/Header";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header/>
      <ScrollView
        contentContainerStyle={{
          gap: 8,
          height: 100,
        }}
        horizontal
        style={{ flexDirection: "row" }}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://i.pinimg.com/550x/98/43/1a/98431a96f44d5e42094cab4db691901a.jpg",
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
