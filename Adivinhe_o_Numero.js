
let chancesTotais = 3
alert("BEM VINDO AO JOGO DE ADIVINHAR NUMEROS!")

while (true){

    let iniciarJogo = prompt("Deseja iniciar o Jogo da Adivinhação? 1 - SIM | 2 - NÃO")

    if (iniciarJogo == 1){

        let numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        let escolherNumero = prompt("Digite um Numero de 1 até 10! ");
        
        if (chancesTotais == 1){
            alert("Desculpa, acabaram suas chances.")
            break;
        }

        if (escolherNumero <= 10 && chancesTotais >= 1){
            if (escolherNumero == numeroAleatorio){

                alert(`Parabens! o numero ${escolherNumero} é o mesmo escolhido pelo bot!`)
                break;

            }

        } else if (escolherNumero > 10 ){
                
            alert("o numero precisa ser menor que 10!")
            continue;

        }
        if (escolherNumero <= 10 && chancesTotais >= 1){

            if (numeroAleatorio != escolherNumero){
                chancesTotais -= 1;
                alert(`Ops! Parece que o numero não é o mesmo do BOT, você tem mais ${chancesTotais}`)
                continue;
            }

        }
    
    }
    if (iniciarJogo == 2){
        alert("Obrigado por jogar comigo! Até a proxima.")
        break;
        
    } else {
        alert("Por favor, digite uma opção EXISTENTE")
        continue;
    }
}
