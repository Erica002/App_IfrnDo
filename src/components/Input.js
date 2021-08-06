import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export function Input({placeholder, onChangeText, onPress}){ 
    return(
            <View style={styles.viewInput}>
                <TextInput placeholderTextColor="#b2b2b2" style={styles.input}  placeholder={placeholder} onChangeText={onChangeText} />
                <TouchableOpacity style={styles.botaoTarefa} onPress={onPress} >
                    <AntDesign name="right" size={20} color="gray"/>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    viewInput:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: -55,
        borderColor:'#FFFFFF',
    },
    input: {
        height: '100%',
        width: '100%',
        fontSize: 17, 
        paddingLeft: 18,
        backgroundColor: '#FFFFFF',    
    },
    botaoTarefa: {
        padding: 17,
        borderLeftWidth:1,
        backgroundColor: '#FFFFFF',
    }

});