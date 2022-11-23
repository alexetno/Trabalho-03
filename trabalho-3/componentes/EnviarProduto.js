import React, {useState, createContext} from 'react';

export const ProdutoContext = createContext({});

export default function EnviarProduto({children}){
  

const lista = [
 {codigo: '1000', descricao: 'Procesador Ryzen 7', preco: '2.349,99', quantidade: '200'},
 {codigo: '1001', descricao: 'Memória DDR4 16GB', preco: '300,00', quantidade: '500'},
 {codigo: '1002', descricao: 'Monitor 29 4K', preco: '2.499,99', quantidade: '100'},
 {codigo: '1003', descricao: 'Notebook Gamer', preco: '9.000,00', quantidade: '50'},
 {codigo: '1004', descricao: 'RTX 3070', preco: '899,99', quantidade: '150'},
];


 

    function enviarProduto(codigoProduto, descricaoProduto, precoProduto, quantidadeProduto){
      lista.push({codigo:codigoProduto, descricao:descricaoProduto, preco:precoProduto, quantidade: quantidadeProduto})   
    }
  
   return(
    <ProdutoContext.Provider value= {{listaProdutos: lista, enviarProduto}} >
      {children}
    </ProdutoContext.Provider>
  )
}