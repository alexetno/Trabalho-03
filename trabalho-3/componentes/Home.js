import React, {useState, useContext}  from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {ProdutoContext} from './EnviarProduto';


export default function Home() {


  const {listaProdutos} = useContext(ProdutoContext);

  const navigation = useNavigation();

  function novoProduto(){
    navigation.navigate('Formulario')
  }

  
 

  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.itemLista}
        data={listaProdutos}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => alert('Produto ' + '\n\nCodigo: ' + item.codigo + '\n' + 'Descriçao: ' + item.descricao + '\n' + 'Preço: R$ ' + item.preco + '\n' + 'Quantidade: ' + item.quantidade)}>
            <Text > {item.codigo + ' - ' +  item.descricao  +' - ' + ' R$ ' + item.preco + ' - ' + item.quantidade}</Text>
          </TouchableOpacity>
        )}  />

        <TouchableOpacity style={styles.botao} onPress={novoProduto}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }, 
  itemLista: {
    marginTop: 15,
  },
  item:{
    marginBottom: 5,
    fontSize: 20,
    color: 'SLightGrey',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  botao: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position:'absolute',
    bottom: 20,
    right: 5,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'green',
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
    lineHeight: 70
  }
});