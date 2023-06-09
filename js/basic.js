console.log('Olá, JavaScript!')

var userName = 'Samuel Leite'

document.getElementById('user-name').innerHTML = userName

// Variaveis //

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)




// Operadores matemáticos //

// var n1 = 5
// var n2 = 5.8

// console.log(typeof n1)
// console.log(typeof n2)

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

// var total = n1 + n2
// console.log(total)




// Operadores comparação //

// var v1 = 5
// var v2 = 5

// var resultado = v1 != v2
// console.log(resultado)

// == para igual ao valor
// === para igual ao valor e tipagem
// != diferente de igual ao valor
// !== para igual ao valor e tipagem




// Funções //

// function soma(n1, n2){
//     console.log(n1 + n2)
// }

// soma(5, 5)

// function boasVindas(nome){
//     alert(nome + ', Seja bem-vindo(a)')
// }

// boasVindas('Samuel')

// function soma(n1, n2) {
//     return n1 + n2
// }

// var resultado = soma(5, 55)
// console.log(resultado)




// Controle de fluxos //

// Sendo um cliente correntista do banco 
// Posso sacar dinheiro em caixa eletronico
// Para comprar em local que não aceita cartão

// var saldo = 1000

// function saque(valor) {

//     if (valor > saldo) {
//         console.log('Valor superior ao saldo da conta')
//     } else if (valor > 700) {
//         console.log('Valor do saque é superior ao limite permitido por operação')
//     } else {
//         saldo = saldo - valor
//     }
// }

// saque(701)
// console.log(saldo)

// Cenário 1: saque com sucesso
// Dado que o saldo da conta é de 1.000 reais
// Quando eu realizo saque de 500 reais
// Então o valor deve ser deduzido do saldo

// Cenário 2: Saque superior ao saldo da conta
// Dado que o saldo da conta é de 1.000 reais
// Quando eu realizo saque de 1.001 reais
// Então não deve deduzir o saldo
// E deve apresentar mensagem que o valor não é permitido

// Cenário 3: Saque com valor máximo
// Dado que o saldo da conta é de 1.000 reais
// E o valor máximo da operação é de 700 reais
// Quando eu realizo saque de 701 reais
// Então não deve deduzir o saldo
// E deve apresentar mensagem que o valor é superior ao permitido




// Arrays //

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
// console.log(gaveteiro[3])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3pO') // adiciona personagem ao array por ultimo na lista
// personagens.push('R2D2')

// personagens.pop() // remove o ultimo personagem do array

// // remover personagem de acordo com a necessidade
// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })

// // trazer apenas um personagem no console
// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)




// Controles de repetição (loop) //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// Listar todos os personagens no console
// personagens.forEach(function(p){
//     console.log(p)
// })

// Traz a posição do personagem (indice) com nome do personagens
// for(var i in personagens){
//     console.log(personagens[i])
// }

// for(var i = 0; i <= 10; i++){
//     console.log(i)
//     // código vai ser executado até a condição falsa
// }




// Objetos //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function(){
//         console.log(`A idade do ${this.nome} é ${this.idade}.`) // opção contrario a concatenação
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()




// Constantes //

// var = valor pode sofrer mudanças
// const = valor é imutável/não pode mudar

// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)