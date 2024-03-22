import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import StyledButton from "../components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { pokemonList } from "../utils/pkmn-list";
import { useState } from "react";
import TableItem from "../components/TableItem";
import { pkmnType } from "../utils/types";
import PkmnLogo from "../components/PkmnLogo";

export default function GameScreen () {

    const [userInput, setUserInput] = useState("");
    const [gameOngoing, setGameOngoing] = useState(false);
    const [pkmnGuessed, setPkmnGuessed] = useState<pkmnType[] | []>([]);
    const navigation = useNavigation();


    const endGame = () => {
        // thanos continues to say hi
        setGameOngoing(false);
        setUserInput("")
    }
    const resetGame = () => {
        setPkmnGuessed([]);
        endGame();
    }

    const addPkmn = (pkmn: pkmnType) => {
        if(pkmnGuessed.length === 0){
            setPkmnGuessed([...pkmnGuessed, pkmn])
        }
    }

    return (
        <MainLayout>
            <PkmnLogo />
            <View style={styles.gameOptionsBox}>
                <StyledButton title="Reset" onPress={()=>resetGame()} />
                <StyledButton title="Give up" onPress={()=>endGame()} />
            </View>

            <TextInput placeholder="Type a Pokemon name" autoFocus value={userInput} onChangeText={(text) =>setUserInput(text)} style={styles.input}/>
        
            <ScrollView style={styles.list}>
                {
                    pokemonList.map((pkmn, i)=>{
                    return (<TableItem pkmn={pkmn} key={i} />)
                    })
                }
            </ScrollView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    gameOptionsBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        borderColor: '#363636',
        borderWidth: 1,
        width: 200,
        padding: 10,
        backgroundColor: '#c7edff',
    },
    list: {
        width: 300
    }
})