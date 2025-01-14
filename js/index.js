//variaveis

//Variaveis de Som
    //Variavel de som de fundo
    var audio = new Audio
    //Variavel volume do som de acordo com a leitura do slider
    var som =  document.getElementById("som")
    //Slider do som com array para o mute e unmute
    var slider_som = new Array(2)
    //Variavel de estado do icon de som
    var mute = true
    //Variavel do icone do som (altifalante)
    var img_som = document.getElementById("mute")
    //Timer para som a sair da pagina
    var timer_som

    
//Variaveis para aviao
    //timer do aviao a andar
    var timer_aviao
    //Id da div do aviao
    var aviao = document.getElementById("aviao")

//Variavei para background
    var fundo = document.getElementById("fundo")
    //timer para movimentar img de fundo no eixo X
    var timer_fundoX
    //timer para movimentar a img do fundo no eixo Y
    var timer_fundoY
    //timer para reduzir opacidade do fundo com a saida do aviao
    var timer_fundoOpacity


//funções

//Função para o audio de fundo da pag
function meteSom (valor) {
    //Array para audio 0 e valor do slider 0
    slider_som[0] = 0.0
    switch (valor) {
        //Caso seja alterado o slider referente ao volume no header
        case 1:
            //Array com o valor atribuido pelo valor do slider
            slider_som[1] =  som.value
            //Volume atribuido de acordo com o valor do slider
            audio.volume = "0." + slider_som[1]

            //Mudar icon de acordo com o volume do fundo
            if (audio.volume == 0) {
                img_som.src = "imagens/icons/volume_off.png"
            } else if (audio.volume > 0 && audio.volume < 0.6 ) {
                img_som.src = "imagens/icons/volume_down.png"
            } else if (audio.volume >= 0.6){
                img_som.src = "imagens/icons/volume_up.png"
            }
            break;

        //Caso se clique no altifalante do audio para dar mute
        case 2:
            //Se está com som...
            if (mute == true) {
                //altera icone para mute
                img_som.src = "imagens/icons/volume_off.png"
                //Atribui o volume 0
                audio.volume = "0." + slider_som[0]
                //Dá valor ao slider para 0
                som.value = slider_som[0]
                //Altera o estado do som para falso
                mute = false
            }
            else if (mute == false) {
                som.value = slider_som[1]
                audio.volume = "0." +  slider_som[1]
                if (audio.volume > 0 && audio.volume < 0.6 ) {
                    img_som.src = "imagens/icons/volume_down.png"
                } else if (audio.volume >= 0.6){
                    img_som.src = "imagens/icons/volume_up.png"
                }
                mute = true
            }
    }
}

function aviaoAndar (valor) {
    switch (valor) {
        //apos abir a pagina, o aviao começla a andar
        case 1:
            aviao.style.left = -500 + "px"
            timer_aviao = setInterval(function () {
                aviao.style.left = parseInt(aviao.style.left) + 2 + "px"
                if (parseInt(aviao.style.left) >= 650) {
                    clearInterval(timer_aviao)
                }
            }, 10)
            break;

        //se o aviao estiver parado no centro da pagina, apos clicar no mesmo, começa a andar e avança para a pagina de aula
        case 2:
            if (parseInt(aviao.style.left) == 650) {
                timer_aviao = setInterval(function () {

                    aviao.style.left = parseInt(aviao.style.left) + 4 + "px"

                    timer_som = setInterval(function () {
                        audio.volume = audio.volume - 0.01

                        if ( audio.volume <= 0.1) {
                            clearInterval(timer_som)
                            audio.pause()
                            audio.volume = 1
                        }

                    }, 1000)


                    timer_fundoOpacity = setInterval(function () {

                        fundo.style.opacity = fundo.style.opacity - 0.01

                            setTimeout(function() {
                                clearInterval(timer_fundoOpacity)
                                fundo.style.opacity = 1
                            },2000)

                    }, 1000)


                    if (parseInt(aviao.style.left) >= 2000) {
                        clearInterval(timer_aviao)
                        aviao.style.left = 650 + "px"
                        window.open("aula.html")
                    }

                }, 5)
            }
            break;
    }
}

function fundoAndar (valor) {

    switch (valor) {
        case 1:
            timer_fundoX = setInterval( function () {
                fundo.style.backgroundPositionX = parseInt(fundo.style.backgroundPositionX) + 1 + "px"

                if (parseInt(fundo.style.backgroundPositionX) >= 10) {
                    clearInterval(timer_fundoX)
                    fundoAndar(2)
                }
            },150)
            break;

        case 2:
            timer_fundoX = setInterval( function () {
                fundo.style.backgroundPositionX = parseInt(fundo.style.backgroundPositionX) - 1 + "px"
                if (parseInt(fundo.style.backgroundPositionX) <= -10) {
                    clearInterval(timer_fundoX)
                    fundoAndar(1)
                }
            },150)
            break;

        case 3:
            timer_fundoY = setInterval( function () {
                fundo.style.backgroundPositionY = parseInt(fundo.style.backgroundPositionY) + 1 + "px"
                if (parseInt(fundo.style.backgroundPositionY) >= 5) {
                    clearInterval(timer_fundoY)
                    fundoAndar(4)
                }
            },200)
            break;

        case 4:
            timer_fundoY = setInterval( function () {
                fundo.style.backgroundPositionY = parseInt(fundo.style.backgroundPositionY) - 1 + "px"
                if (parseInt(fundo.style.backgroundPositionY) <= -5) {
                    clearInterval(timer_fundoY)
                    fundoAndar(3)
                }
            },200)
            break;
    }
}


//codigo
window.onload = function () {




// Mexer no som de fundo da pag.
    audio.src = "audios/musica_fundo.mp3"
    audio.play()
    //Detetar altera~óes no valor do slider do header
    som.onchange = function () {
        //Ler valor o slider
        som.value
        //Chamar a função que altera os parametros do som
        meteSom(1)
    }

    //Fazer mute ao carregar no altifalante
    img_som.onclick = function () {
        //chamar função para fazer mute e trocar icone
       meteSom(2)
    }

//Aviao no fundo
    //Chamar função que faz o aviao andar
    aviaoAndar(1)
    //Ao clicar no avião, após parado, este avança a maior velocidade e muda a pagina
    aviao.onclick = function (){
        //Chamar a função
        aviaoAndar(2)
    }

    fundo.style.backgroundPositionX = 0 + "px"
    fundo.style.backgroundPositionY = 0 + "px"
    fundo.style.opacity = 1

    fundoAndar(1)
    fundoAndar(3)


}