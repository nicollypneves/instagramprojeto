import {
  View,

} from "react-native";
import Header from "./src/componentes/Header";
import Stories from "./src/componentes/Stories";
import InfoProfile from "./src/componentes/InfoProfile";
import eu from "./src/assets/eu.jpg"

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
     <InfoProfile
     image={eu}
     publi={35}
     followers={991}
     following={280}
     description="love"
     />

    </View >
  );
}
