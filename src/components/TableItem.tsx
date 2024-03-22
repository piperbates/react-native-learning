import { StyleSheet, Text, View } from "react-native";
import { pkmnType } from "../utils/types";

export default function TableItem ({pkmn, answered}: {pkmn: pkmnType, answered?: boolean}) {
    return (
        <View style={styles.item}>
            <Text>{pkmn.dex}. </Text>
            <Text>{answered ? pkmn.name: ""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 5,
    }
})
