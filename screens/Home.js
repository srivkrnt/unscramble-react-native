import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, ScrollView, Button, Alert, ImageBackground, Keyboard, KeyboardAvoidingView} from 'react-native'
import {getQuestionFromApi} from '../Utils'
import TitleBar from '../components/TitleBar'
import { useDispatch } from 'react-redux'
import Question from '../components/Question'
import store from '../Store'

const Home = () => {

    const [answerText, setAnswerText] = useState('');
    const [scramblerLength, setScramblerLength] = useState(0)

    const dispatch = useDispatch()

    changeAnswerText = (value) => {
        setAnswerText(() => value)        
    }

    const updateScramblerLength = (value) => {
        setScramblerLength(() => value)
    }

    const endGame = () => {
        updateScramblerLength(0);
    }

    handleButtonPress = () => {
        updateScramblerLength(scramblerLength + 1);
        let currentQuestion = store.getState().scrambler;
        if(currentQuestion.length != 0){
            let actualWord = currentQuestion.actual_word.replace(/\s+/g,'');
            if(answerText.toLowerCase() == actualWord){
                dispatch(getQuestionFromApi())
                setAnswerText('')
            }

            else{
                if(answerText != ''){
                    Alert.alert(
                        'Wrong',
                        'Incorrect !! Unscramble Again',
                        [
                          {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {
                            cancelable: false
                        },
                    );
                }
                
            }
        }

        else {
            dispatch(getQuestionFromApi())
        }
    }

    if(scramblerLength == 0){
        return(
            <React.Fragment>
                <View>
                    <TitleBar/>
                    <ImageBackground source={{uri : "https://lh3.googleusercontent.com/GrStlGYLfoz_3t7U-JcVIuteifHTVCyMPROmTpKrU-IHPWjwJX-4aQThI6CiRz3iw8Vi"}} style={styles.titleBarImage}>
                    </ImageBackground>
                </View>
                <Button title="PLAY" style = {styles.playButton} onPress={handleButtonPress} />
            </React.Fragment>
        )
    }


    return (
        <View style={styles.container}>
            <TitleBar/>
            <Question/>
            <View style = {styles.textBox}>
                <TextInput placeholder='Answer' style={{padding:20}} onChangeText={changeAnswerText} value={answerText} />
            </View>
            <Button title="SUBMIT" onPress={handleButtonPress} />
            <View>
                <Button color="#D9195F" title = "END GAME" onPress={endGame}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    textBox : {
        backgroundColor : '#e4e4e4',
        borderRadius: 5,
        marginBottom : 20
    },
    titleBarImage : {
        width : '100%',
        height : '80%',
        alignSelf : 'center'
    }
})
export default Home;