import { Button, GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";

export default function StyledButton ({ 
    title, 
    onPress, 
    large
}: { 
    title: string, 
    onPress: (event: GestureResponderEvent) => void,
    large?: boolean
}) {
    return (
        <Pressable 
            onPress={onPress}
            style={[
                styles.button, 
                large ? 
                    styles.largeButton 
                    : styles.regularButton
                ]}
        >
            <Text style={[styles.buttonText, large ? 
                    styles.largeButtonText 
                    : styles.regularButtonText]}>
                {title.toUpperCase()}
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightgreen",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontWeight: 'bold'
    },
    regularButton: {
        width: 100,
        borderRadius: 20,
        margin: 10,
        padding: 10,
    },
    regularButtonText: {
        fontSize: 16,
    },
    largeButton: {
        width: 300,
        height: 200,
        borderRadius: 90,
    },
    largeButtonText: {
        fontSize: 40
    }
})
