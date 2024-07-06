function ex01() {
    alert("Este programa soma dois números!")
  const n1 = Number(prompt("Digite o primeiro número"));
  const n2 = Number(prompt("Digite o primeiro número"));

  alert(n1 + n2);
}

function ex02() {
  const num = Number(prompt(
      "Verificador de sinal!"+
      "\nEste programa verifica se o número é positivo, negativo ou zero."+
      "\n\nDigite um número"
    ));

  if (num > 0) alert("O número é positivo!");
  else if (num == 0) alert("O número é 0!");
  else if (num < 0) alert("O número é negativo!");
  else alert("Entrada inválida!");
}

function ex03() {
    alert("Este programa conta quantas vezes uma letra específica aparece em uma frase!")

    const frase = prompt("Digite a frase da busca desejada")
    const letra = prompt("Digite a letra que deseja procurar").charAt(0)
    const posicoes = []
    
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == letra)
            posicoes.push(i+1)
    }

    alert(`A letra aparece ${posicoes.length} vezes na frase, especificamente nestas posições: ${posicoes}`)
}

function ex04() {
    alert("Este programa calcula a média de três notas!")
    const n1 = Number(prompt("Digite a PRIMEIRA nota (número)"))
    const n2 = Number(prompt("Digite a SEGUNDA nota (número)"))
    const n3 = Number(prompt("Digite a TERCEIRA nota (número)"))

    alert("A média das notas é: "+ (n1+n2+n3)/3)
}

function ex05() {
    alert("Este programa gera um número aleatório dentro de um intervalo específico!")

    const min = Number(prompt("Digite o menor valor possível"))
    const max = Number(prompt("Digite o maior valor possível"))

    if (max-min < 0) alert("Não existe nenhum número possível dentro desse intervalo!")
    else alert("O número aleatório gerado é: "+ Math.random()*(max-min)+min)
}

function ex06() {
    const input = prompt("Este programa calcula a soma de todos os números inteiros desejados!\n\nDigite todos os números INTEIROS desejados, separados por ESPAÇO")

    const nums = input.split(' ').map((numString) => Number(numString))

    alert("A soma dos números é: "+ nums.reduce((num, soma) => num+soma))
}

function ex07() {
    const frase = prompt("Este programa conta o número de palavras únicas em uma frase, desconsiderando repetições!\n\nDigite a frase")

    const palavras = frase.split(' ')

    const palavrasSemRepeticao = []
    palavras.forEach(palavra => {
        if (!palavrasSemRepeticao.includes(palavra)) palavrasSemRepeticao.push(palavra)
    });

    alert(`A frase possui ${palavrasSemRepeticao.length} palavras únicas!\n\n${palavrasSemRepeticao}`)
}

function ex08() {
    alert("Este programa cria uma nova despesa!")

    class Despesa {
        descricao
        valor
        data

        constructor(valor, descricao, data) {
            this.valor = valor
            this.descricao = descricao
            this.data = data
        }
    }

    alert("A sua despesa é:\n\n"+
        JSON.stringify(
            new Despesa(prompt("Qual o valor?"), 
            prompt("Qual a descrição?"), 
            prompt("Qual a data da despesa?"))
        ))
}

function ex09() {
    alert("Este programa é o Cálculo de IMC! (Índice de Massa Corporal)")

    class Pessoa {
        nome
        peso
        altura

        constructor(nome, peso, altura) {
            this.nome = nome
            this.peso = Number(String(peso).replace(',', '.'))
            this.altura = Number(String(altura).replace(',', '.'))
        }

        imc() {
            return this.peso/this.altura**2
        }
    }

    const pessoa = new Pessoa(
        prompt("Digite seu nome"),
        prompt("Digite seu peso (kg) (número)"),
        prompt("Digite sua altura (metros) (número)")
    )

    alert(`O IMC de ${pessoa.nome} é: ${pessoa.imc()}`)
}
