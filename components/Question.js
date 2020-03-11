import React from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'

const Question = () => {

    const getCurrentQuestion = () => {
        let result = useSelector(state => state);
        if(result.scrambler.length != 0){
        return result.scrambler.split_scrambled_word;
        }
        else{
            return [];
        }
    }

    return(
        <ScrollView  horizontal={true} style = {styles.questionContainer}>
            {
                getCurrentQuestion().map((letter) => {
                return(
                    <View style={styles.box}>
                        <Text style={styles.letter}> { letter } </Text>
                    </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    letter : {
        fontSize:25,
    },
    box : {
        borderWidth: 2,
        borderColor:'#F48023',
        margin:2,
        height:40,
    },
    questionContainer : {
        alignSelf : "center",
        marginBottom : 50,
        marginTop : 20
    }
})
export default Question;