import { Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import StyledButton from "../components/StyledButton";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen () {
    const navigation = useNavigation();

    return (
        <MainLayout>
            <Text>About Screen</Text>

            <StyledButton 
                title="play"
                onPress={()=>navigation.navigate("Home")}
                 />
        </MainLayout>
    )
}