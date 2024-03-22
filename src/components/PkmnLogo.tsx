import { Image, StyleSheet } from "react-native"

export default function PkmnLogo ({
    large
}: {large?: boolean }) {
    return <Image
                source={require('../../assets/pkmn-logo.png')}
                style={[styles.logo, large ? styles.largeSize : styles.regularSize]}
                />
}

const styles = StyleSheet.create({
    logo: {
        margin: 5
    },
    regularSize: {
        width: 200,
        height: 75
    },
    largeSize: {
        width: 300,
        height: 105,
        margin: 5
    }
})

                