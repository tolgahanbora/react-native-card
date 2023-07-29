import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

function Card(props) {
    return (
        <View style={style.cardContainer}>
            <View style={style.container}>
                <Text style={style.textHead}>{props.name}</Text>
                <Text style={style.textBody}>{props.text}</Text>
            </View>
            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card


const style = StyleSheet.create({
    cardContainer: {
        flexDirection: "column",
        backgroundColor: "#C0C0C0",
        margin: 15,
        marginBottom: 0,
        borderRadius: 7,
        width: "60%",
        borderColor: "gray",
        alignItems: "stretch", // İç içe geçmiş view'ların genişlemesini sağlar
   
    },
    container: {
        padding: 5

    },

    textHead: {
        margin: 10,
        marginBottom: 3,
        fontSize: 15,
        fontWeight: "bold",
   
    },

    textBody: {

        margin: 10
    },

    button: {

        padding: 5,
        backgroundColor: "#00C2FF",
        borderWidth: 1,
        borderColor: "white",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },

    textButton: {
        fontWeight: "bold",
        color: "white",
        textAlign: "center"

    }
})