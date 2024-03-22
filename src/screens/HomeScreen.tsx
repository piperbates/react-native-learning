import { Image, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import StyledButton from "../components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import PkmnLogo from "../components/PkmnLogo";

export default function HomeScreen () {
    const navigation = useNavigation();

    return (
        <MainLayout>
            <PkmnLogo large />
            <Text style={{marginBottom: 50, fontSize: 30, textAlign: 'center'}}>Can you name all 151 Pokemon?</Text>
            <StyledButton 
                large
                title="play"
                onPress={() => navigation.navigate("Game")}
                 />
        </MainLayout>
    )
}
