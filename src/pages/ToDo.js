import React, { useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Alert, Keyboard} from 'react-native';
import {Input} from '../components/Input';
import {Tarefas} from '../components/Tarefas';
import {AsyncStorage} from 'react-native';

export function ToDo(){
    const keyAsyncStorage = "@toDo:tarefas";
    const [user,setUser] = useState('');
    const [tarefas,setTarefas] = useState([]);

    async function handleSaveTarefas() {
        const data ={
            id: String (new Date().getTime()),
            task: user
        }

        const vetData = [...tarefas, data ]; 

        try{
             await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( vetData ) );
        }catch(error){
            Alert.alert("Erro ao gravar a tarefa!");
        } 

        Keyboard.dismiss();
        setUser("");
        loadData();
    }

    async function handleDeleteTask( id ) {
        const newData = tarefas.filter( item => item.id != id );
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( newData ));
        setTarefas(newData); 
    }

    async function loadData(){
        try{
            const retorno = await AsyncStorage.getItem(  keyAsyncStorage  );   
            const teste = JSON.parse( retorno )
            console.log( teste );
            setTarefas( teste || [] );
        
        }catch(error){
            Alert.alert("Erro na leitura das tarefas!");
        }
    }

    useEffect( ()=>{
        loadData();   
    } , []);

    return(
        <View style={styles.container}>
            <View style={ styles.cabeçalho}>
                <Text style={styles.fonteCabeçalho}>
                    IFRN.DO
                    <Text style={styles.contador}>                            Você tem <Text style={styles.destaqueFonte}>{tarefas.length} tarefas
                    </Text>
                    </Text>
                </Text>
            </View>
            
            <View style={styles.containerTarefa}>
                <Input placeholder="Adicione uma tarefa" value={user} onChangeText={setUser} onPress={handleSaveTarefas} />      
            </View>
                <FlatList  data={tarefas}  
                    keyExtractor={item => item.id} 
                    renderItem={ ({item}) =>  (
                        <Tarefas tarefa={ item.task } deletar = {() => handleDeleteTask(item.id) }/>
                    ) }
                /> 
            </View>     
    );
}

const styles = StyleSheet.create({
    cabeçalho:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 185,
        width: '100%',
        marginTop: -45,
        paddingLeft: 18,
        backgroundColor: '#2e8b57',
    },
    fonteCabeçalho:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#EBEBEB',
    },
    contador: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    destaqueFonte: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    containerTarefa:{
        alignItems: 'center',
        justifyContent: 'center',
        width: "75%",
        marginTop: 28,
        
    },
});