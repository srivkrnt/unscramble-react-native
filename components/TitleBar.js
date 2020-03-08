import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const TitleBar = () => {
    return(
        <View>
            <Text style = {styles.titleBatText}> UN - SCRAMBLE </Text>
            <View style = {styles.lineStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titleBatText : {
        fontSize: 24,
        alignSelf: "center",
        margin: '5%'
    },
    lineStyle:{
        borderWidth: 1.5,
        borderColor:'black',
        margin:5,
   }
})

export default TitleBar;