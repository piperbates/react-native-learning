import { StyleSheet, Text, View } from "react-native";

export default function MainLayout ( { children }: {children: React.ReactNode} ) {
    return (
        <View style={styles.container}>
            {children}
            <Text style={styles.footer}>
                Created by Piper Bates
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    footer: {
        marginTop: 40,
        fontSize: 10
    }
})