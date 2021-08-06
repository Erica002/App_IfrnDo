import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export function InputLogin (props){ 
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.label} onChangeText={props.onChangeText} secureTextEntry={props.password}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 65,
        width: 275,
        borderRadius: 10,
        flexDirection:'row',
        backgroundColor: 'white',
        position: 'relative',
    },
    
    input:{
        flex:1,
        color: '#B2B2B2',
        fontSize: 18,
        paddingLeft: 20,
        height:'100%',
        backgroundColor: 'white',
        borderRadius: 10,
    }
  });