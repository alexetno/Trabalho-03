import React, {useState, useEffect, useContext} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {ProdutoContext} from './EnviarProduto';


export default function Form() {
  

  const [codigoProduto, setCodigoProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  
  const navigation = useNavigation();
  
const {enviarProduto} = useContext(ProdutoContext);

useEffect(() => {
    
  }, [])

   const addProduto = () => {
   
     if(codigoProduto == '' || descricaoProduto == '' || precoProduto == '' || quantidadeProduto == ''){

   return;

   }

   enviarProduto(codigoProduto, descricaoProduto, precoProduto, quantidadeProduto)
    

   limparInputs();
 
   navigation.navigate('Home'); 
}  

function limparInputs(){
  setCodigoProduto('');
   setDescricaoProduto('');
   setPrecoProduto('');
  setQuantidadeProduto('');
  }
 

  return (
    <View style={styles.container}>
      <View>
        <TextInput 
          style={styles.input}
          placeholder='Código' 
          value={codigoProduto}
          keyboardType='numeric'
          onChangeText={(valor) => setCodigoProduto(valor)}/>

        <TextInput 
          style={styles.input}
          placeholder='Descrição' 
          value={descricaoProduto}
          onChangeText={(valor) => setDescricaoProduto(valor)}/>
        
        <TextInput 
          style={styles.input}
          placeholder='Preço' 
          value={precoProduto}
          keyboardType='numeric'
          onChangeText={(valor) => setPrecoProduto(valor)}/>

        <TextInput 
          style={styles.input}
          placeholder='Quantidade' 
          value={quantidadeProduto}
          keyboardType='numeric'
          onChangeText={(valor) => setQuantidadeProduto(valor)}/>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao} onPress={addProduto}>ADICIONAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 20,
  },
  input:{
    textAlign: 'center',
    //color: 'red',
    borderWidth: 2,
    marginBottom: 3,
    fontSize: 20
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 20
  },
  textoBotao: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  }
});