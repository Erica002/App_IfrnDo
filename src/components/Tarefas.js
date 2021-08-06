import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/EvilIcons';


export function Tarefas (props){
    
    const [agree, setAgree] = useState(false);
    
    return(
        <View style={styles.containerTarefas}>
            <View style = {styles.containerTarefas}>
            <CheckBox boxType="square" value={agree} onChange={() => setAgree(!agree)}/>
                <Text style={styles.fonte}>{props.tarefa}</Text>
                <View style={styles.separador}></View>  
            <TouchableOpacity onPress={props.deletar}>
                <Icon name = "trash" size = {25} color = "gray" />           
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerTarefas:{
        marginTop:20,
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor:'#EBEBEB',
    },

    fonte:{
        fontSize: 18,
    }

})