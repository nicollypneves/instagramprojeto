import { StyleSheet,ScrollView,TouchableOpacity,Image } from "react-native";
import Fake1 from "../../assets/imagem.jpg";
import Story from "../Story";

export default function Stories() {
    return (
        <ScrollView
            contentContainerStyle={{
                gap: 8,
                height: 100,
            }}
            horizontal
            style={{ flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
        >
            <Story image={Fake1}/>
            <Story image={Fake1}/>
            <Story image={Fake1}/>
            <Story image={Fake1}/>
            <Story image={Fake1}/>
            <Story image={Fake1}/>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        height: 100,
    },
   

}
);


