import {
  View,

} from "react-native";
import InfoProfile from "../componentes/InfoProfile";
import eu from "../assets/eu.jpg"

export default function Profile() {
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
