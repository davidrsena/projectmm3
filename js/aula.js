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

//Variaveis mário
    //mario
    var mario = document.getElementById("mario")
    //contador para imagenn
    var conta=1
    //Variavel para o set interval do boneco
    var timer

    //Ler posição top dos checkpoints do mario
    var altura_checkpoint1
    var altura_checkpoint2
    var altura_checkpoint3
    var altura_checkpoint4

    //Variavel para atribuir leitura da posição Y da página
    var altura_pagina

    //Variaveis correspondentes aos checkpoints do aside
    var checkpoint1 = document.getElementById("checkpoint1")
    var checkpoint2 = document.getElementById("checkpoint2")
    var checkpoint3 = document.getElementById("checkpoint3")
    var checkpoint4 = document.getElementById("checkpoint4")


//Variaveis para Quizz
    //variavel que lê o estado que no caso de não ter clicado em nenhuma opção do quiz não deixa seguir na pagina
    var opcao_estado = false
    //Variavel para ver se já foi selecionada alguma opção, não deixando que selecione mais do que uma opção por questao do quiz
    var estado_selecao = false

    //Variavel com o texto inicial do boneco pós realizar quiz
    var txtRoupaY = document.getElementById("txtRoupa")


//Variaveis para contadores de respotas certas e erradas no header

    // caixa de contador de certas
    var certas = document.getElementById("certas")
    // contador de respostas certas
    var contador_certas = 0
    //Caixa de contador de erradas
    var erradas = document.getElementById("erradas")
    //Contador de respostas erradas
    var contador_erradas = 0

//Variaveis para videos
    //video inicial após abrir página
    var video1 = document.getElementById("video1")
    // variavel de estado para saber se o video esta a dar
    var estado_video1
    //Var icone som do video
    var video1_mute = document.getElementById("videoMute")
    // icone aumentar som
    var video1_som_mais = document.getElementById("videoSomMais")
    //icone baixar som
    var video1_som_menos = document.getElementById("videoSomMenos")
    //icone pause/play
    var video1_play = document.getElementById("videoPlay")
    //volume do video
    var video_som = new Array(2)
    //estado do som do video
    var estado_som = true


//Variaveis para jogo
    //Variaveis para os objetos  para colocar no lixo
    var banana = document.getElementById("banana")
    var bottle = document.getElementById("bottle")
    var lata = document.getElementById("lata")
    var bag = document.getElementById("bag")

    var ecoazul = document.getElementById("ecoAzul")
    var ecoamarelo = document.getElementById("ecoAmarelo")
    var ecoverde = document.getElementById("ecoVerde")
    var ecoorganico = document.getElementById("ecoOrganico")

    var lixo

    var conta_lixo = 0

    var timer_ecoponto

    var resposta = document.getElementById("resposta")

    var maisinfo = document.getElementById("maisinfo")

    var caixaResposta = document.getElementById("caixaResposta")

    var time_out_caixaResposta

    var audioResposta = new Audio

    var resultado = document.getElementById("resultado")

    var mensagemResultado = document.getElementById("mensagemResultado")

    var comecarJogo = document.getElementById("botaoComecar")

    var btnComecar = document.getElementById("btnComecar")

    var audio_fim = new Audio()


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
            //Volume das respostas/opções do jogo atribuido de acordo com o valor do slider
            audioResposta.volume = "0." + slider_som[1]
            //Volume das final do jogo atribuido de acordo com o valor do slider
            audio_fim.volume = "0." + slider_som[1]

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
                audioResposta.volume = "0." + slider_som[0]
                //Dá valor ao slider para 0
                audio_fim.volume = "0." + slider_som[0]
                //Dá valor ao slider para 0
                som.value = slider_som[0]
                //Altera o estado do som para falso
                mute = false
            }
            else if (mute == false) {
                som.value = slider_som[1]
                audio.volume = "0." +  slider_som[1]
                audioResposta.volume = "0." +  slider_som[1]
                audio_fim.volume = "0." +  slider_som[1]
                if (audio.volume > 0 && audio.volume < 0.6 ) {
                    img_som.src = "imagens/icons/volume_down.png"
                } else if (audio.volume >= 0.6){
                    img_som.src = "imagens/icons/volume_up.png"
                }
                mute = true
            }
    }
}

//função para video 1
    video_som[1]=9
function meteVideo1 (valor) {
    video_som[0] = 0.0
    switch (valor){
        //iniciar automatico
        case 1:
            video1.src = "videos/v_aula_1.mp4";
            video1.play ();
            video1.volume = "0." + video_som[1]
            estado_video1 = true;
            if (estado_video1 == true){
                console.log(estado_video1)
                audio.pause();
            }
            break;

        //video mute
        case 2:
            if (estado_som == true) {
                video1.volume = video_som[0]
                video1_mute.src = "imagens/icons/volume_off.png"
                estado_som = false

            } else  if (estado_som == false) {
                video1.volume = "0." + video_som[1]
                if (video1.volume > 0 && video1.volume < 0.6 ) {
                    video1_mute.src = "imagens/icons/volume_down.png"
                } else if (audio.volume >= 0.6){
                    video1_mute.src = "imagens/icons/volume_up.png"
                }
                estado_som = true
            }
            break;

        //aumentar som
        case 3:
            if (parseInt(video_som[1])<9){
                video_som[1]++
                video1.volume = "0." + video_som[1]
                if (video1.volume > 0 && video1.volume < 0.6 ) {
                    video1_mute.src = "imagens/icons/volume_down.png"
                } else if (audio.volume >= 0.6) {
                    video1_mute.src = "imagens/icons/volume_up.png"
                }
            }
            break;

        //diminuir som
        case 4:
            if (parseInt(video_som[1])>0){
                video_som[1]--
                video1.volume = "0." + video_som[1]
                if (video1.volume > 0 && video1.volume < 0.6 ) {
                    video1_mute.src = "imagens/icons/volume_down.png"
                } else if (video1.volume >= 0.6){
                    video1_mute.src = "imagens/icons/volume_up.png"
                } else if (video1.volume == 0){
                    video1_mute.src = "imagens/icons/volume_off.png"
                }
            }
            break;

        //video play/pause
        case 5:
            if (estado_video1 == true) {
                video1.pause();
                video1_play.src = "imagens/icons/play_arrow.png"
                estado_video1 = false
            } else if (estado_video1 == false) {
                video1.play();
                video1_play.src = "imagens/icons/pause.png"
                estado_video1 = true
        }
    }

}

//Função para o mário se mover
function marioScroll (valor) {

    switch (valor) {
        case 1:
            timer = setInterval( function (){
                if (conta <= 4 ) {
                    mario.src = "imagens/mario/mario_frente_" + conta + ".png"
                    conta++
                    if (conta == 5) {
                        conta = 1
                    }
                }
            },200 )
            break;

        case 2:
            altura_pagina = window.scrollY
            if (altura_pagina >= altura_checkpoint1) {
                checkpoint1.style.display = "none"
                mario.style.width = 6 + "vh"
            } else {
                mario.style.width = 5 + "vh"
                checkpoint1.style.display = "block"
            }

            if (altura_pagina >= altura_checkpoint2) {
                checkpoint2.style.display = "none"
                mario.style.width = 7 + "vh"
            } else if (altura_pagina >= altura_checkpoint1 && altura_pagina <= altura_checkpoint2) {
                mario.style.width = 6 + "vh"
                checkpoint2.style.display = "block"
            }

            if (altura_pagina >= altura_checkpoint3) {
                checkpoint3.style.display = "none"
                mario.style.width = 8 + "vh"
            } else if (altura_pagina >= altura_checkpoint2 && altura_pagina <= altura_checkpoint3) {
                mario.style.width = 7 + "vh"
                checkpoint3.style.display = "block"
            }

            if (altura_pagina >= altura_checkpoint4) {
                mario.style.width = 9 + "vh"
            }

    }

}

//Funções do quiz para seguinte e voltar
function quizz (valor) {
    switch (valor){
        case 1:
            document.getElementById("q2Pergunta").style.display = "none"
            document.getElementById("q3Pergunta").style.display = "none"
            document.getElementById("q2Imagem").style.display = "none"
            document.getElementById("q3Imagem").style.display = "none"
            document.getElementById("opcao4").style.display = "none"
            document.getElementById("opcao5").style.display = "none"
            document.getElementById("opcao6").style.display = "none"
            document.getElementById("opcao7").style.display = "none"
            document.getElementById("opcao8").style.display = "none"
            document.getElementById("opcao9").style.display = "none"
            document.getElementById("btnQ2").style.display = "none"
            document.getElementById("btnContinuar").style.display = "none"
            document.getElementById("contaPerguntas").innerHTML = "1 / 3"

            document.getElementById("selecionarOpcao").style.display = "none"
            document.getElementById("jaSelecionaste").style.display = "none"

            break;

        case 2:

            if (opcao_estado == true) {
                document.getElementById("q1Pergunta").style.display = "none"
                document.getElementById("q1Imagem").style.display = "none"
                document.getElementById("opcao1").style.display = "none"
                document.getElementById("opcao2").style.display = "none"
                document.getElementById("opcao3").style.display = "none"
                document.getElementById("btnQ1").style.display = "none"

                document.getElementById("q2Pergunta").style.display = "block"
                document.getElementById("q2Imagem").style.display = "block"
                document.getElementById("opcao4").style.display = "block"
                document.getElementById("opcao5").style.display = "block"
                document.getElementById("opcao6").style.display = "block"
                document.getElementById("btnQ2").style.display = "block"

                document.getElementById("q3Pergunta").style.display = "none"
                document.getElementById("q3Imagem").style.display = "none"
                document.getElementById("opcao7").style.display = "none"
                document.getElementById("opcao8").style.display = "none"
                document.getElementById("opcao9").style.display = "none"

                document.getElementById("informação").innerHTML = ""
                document.getElementById("certo/errado").innerHTML = ""
                document.getElementById("opcao4").style.backgroundColor = ""
                document.getElementById("opcao5").style.backgroundColor = ""
                document.getElementById("opcao6").style.backgroundColor = ""
                document.getElementById("contaPerguntas").innerHTML = "2 / 3"
                document.getElementById("btnContinuar").style.display = "none"

                document.getElementById("selecionarOpcao").style.display = "none"
                document.getElementById("jaSelecionaste").style.display = "none"

                opcao_estado = false
                estado_selecao = false

            } else {
                document.getElementById("selecionarOpcao").style.display = "block"
            }

            break;

        case 3:

        if (opcao_estado == true) {
            document.getElementById("q1Pergunta").style.display = "none"
            document.getElementById("q1Imagem").style.display = "none"
            document.getElementById("opcao1").style.display = "none"
            document.getElementById("opcao2").style.display = "none"
            document.getElementById("opcao3").style.display = "none"
            document.getElementById("btnQ1").style.display = "none"

            document.getElementById("q2Pergunta").style.display = "none"
            document.getElementById("q2Imagem").style.display = "none"
            document.getElementById("opcao4").style.display = "none"
            document.getElementById("opcao5").style.display = "none"
            document.getElementById("opcao6").style.display = "none"
            document.getElementById("btnQ2").style.display = "none"

            document.getElementById("q3Pergunta").style.display = "block"
            document.getElementById("q3Imagem").style.display = "block"
            document.getElementById("opcao7").style.display = "block"
            document.getElementById("opcao8").style.display = "block"
            document.getElementById("opcao9").style.display = "block"

            document.getElementById("informação").innerHTML = ""
            document.getElementById("certo/errado").innerHTML = ""
            document.getElementById("opcao7").style.backgroundColor = ""
            document.getElementById("opcao8").style.backgroundColor = ""
            document.getElementById("opcao9").style.backgroundColor = ""
            document.getElementById("contaPerguntas").innerHTML = "3 / 3"

            document.getElementById("selecionarOpcao").style.display = "none"

            document.getElementById("btnContinuar").style.display = "block"
            document.getElementById("jaSelecionaste").style.display = "none"

            opcao_estado = false
            estado_selecao = false

        } else {
            document.getElementById("selecionarOpcao").style.display = "block"
        }
        break;

        case 4:
            if (opcao_estado == true) {
                window.scrollTo({
                    top: txtRoupaY.offsetTop - 250
                })
                document.getElementById("boneco").style.display = "block"
                document.getElementById("txtRoupa").style.opacity = 1
                document.getElementById("informação").innerHTML = ""
                document.getElementById("certo/errado").innerHTML = ""
                document.getElementById("Jogar").style.display = "block"

                document.getElementById("jaSelecionaste").style.display = "none"

                estado_selecao = false

            } else {
                document.getElementById("selecionarOpcao").style.display = "block"
            }
            break;

    }

}

// Função para as opções do quiz
function opcaoQuiz (valor) {

    switch (valor) {
        //Selecionar opçao 1
        case 1:
            opcao_estado = true

            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_erradas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-danger> Errado!!</div>"
                document.getElementById("opcao1").style.backgroundColor = "#FFC3C3"
                document.getElementById("erradas").innerHTML = contador_erradas
                document.getElementById("informação").innerHTML = "A reciclagem pode até ser o mais falado dos R’s, mas não é o mais importante.\n" +
                    "Antes vêm passos fundamentais para gerir o desperdicio como refletir, reduzir, reutilizar e reparar. Só depois de esgotadas estas opções é que se deve recorrer à separação do lixo para encaminhar para a reciclagem - já com mais espaço no ecoponto."
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;

        //Selecionar opção 2
        case 2:
            opcao_estado = true

            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_certas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-success> Certo!!</div>"
                document.getElementById("opcao2").style.backgroundColor = "#C2FFC8"
                document.getElementById("certas").innerHTML = contador_certas
                document.getElementById("informação").innerHTML = "A reciclagem pode até ser o mais falado dos R’s, mas não é o mais importante.\n" +
                    "Antes vêm passos fundamentais para gerir o desperdicio como refletir, reduzir, reutilizar e reparar. Só depois de esgotadas estas opções é que se deve recorrer à separação do lixo para encaminhar para a reciclagem - já com mais espaço no ecoponto."
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;

        //Selecionar opçao 3
        case 3:
            opcao_estado = true

            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_erradas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-danger> Errado!!</div>"
                document.getElementById("opcao3").style.backgroundColor = "#FFC3C3"
                document.getElementById("erradas").innerHTML = contador_erradas
                document.getElementById("informação").innerHTML = "A reciclagem pode até ser o mais falado dos R’s, mas não é o mais importante.\n" +
                    "Antes vêm passos fundamentais para gerir o desperdicio como refletir, reduzir, reutilizar e reparar. Só depois de esgotadas estas opções é que se deve recorrer à separação do lixo para encaminhar para a reciclagem - já com mais espaço no ecoponto."
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;

        //selecionar opçao 4
        case 4:
            opcao_estado = true

            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_certas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-success> Certo!!</div>"
                document.getElementById("opcao4").style.backgroundColor = "#C2FFC8"
                document.getElementById("certas").innerHTML = contador_certas
                document.getElementById("informação").innerHTML = "É no ecoponto azul que, de facto,\n" +
                    "deve colocar o papel e o cartão. Este lixo é depois encaminhado para reciclagem."
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;

        //selecionar opção 5
        case 5:
            opcao_estado = true

            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_erradas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-danger> Errado!!</div>"
                document.getElementById("opcao5").style.backgroundColor = "#FFC3C3"
                document.getElementById("erradas").innerHTML = contador_erradas
                document.getElementById("informação").innerHTML = "É no ecoponto azul que, de facto,\n" +
                    "deve colocar o papel e o cartão. Este lixo é depois encaminhado para reciclagem."
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;

        //selecionar opcao 6
        case 6:
            opcao_estado = true
            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_erradas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-danger> Errado!!</div>"
                document.getElementById("opcao6").style.backgroundColor = "#FFC3C3"
                document.getElementById("erradas").innerHTML = contador_erradas
                document.getElementById("informação").innerHTML = "É no ecoponto azul que, de facto,\n" +
                    "deve colocar o papel e o cartão. Este lixo é depois encaminhado para reciclagem."
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;

        //Selecionar opcao7
        case 7:
            opcao_estado = true

            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_certas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-success> Certo!!</div>"
                document.getElementById("opcao7").style.backgroundColor = "#C2FFC8"
                document.getElementById("certas").innerHTML = contador_certas
                document.getElementById("informação").innerHTML = "Devemos respeitar o planeta, dado que se o fizéssemos viveríamos num mundo melhor e num futuro melhor. "
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;

        //selecionar opção 8
        case 8:
            opcao_estado = true

            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_erradas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-danger> Errado!!</div>"
                document.getElementById("opcao8").style.backgroundColor = "#FFC3C3"
                document.getElementById("erradas").innerHTML = contador_erradas
                document.getElementById("informação").innerHTML = "Devemos respeitar o planeta, dado que se o fizéssemos viveríamos num mundo melhor e num futuro melhor. "
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;

        //selecionar opcao 9
        case 9:
            opcao_estado = true

            if (estado_selecao == true) {
                document.getElementById("jaSelecionaste").style.display = "block"
            } else if (estado_selecao == false) {
                estado_selecao = true
                contador_erradas++
                document.getElementById("certo/errado").innerHTML = "<div class= text-danger> Errado!!</div>"
                document.getElementById("opcao9").style.backgroundColor = "#FFC3C3"
                document.getElementById("erradas").innerHTML = contador_erradas
                document.getElementById("informação").innerHTML = "Devemos respeitar o planeta, dado que se o fizéssemos viveríamos num mundo melhor e num futuro melhor. "
                document.getElementById("selecionarOpcao").style.display = "none"
            }
            break;
    }
}

// Função para colocar objetos nos ecopontos
function ecopontos (valor) {



    switch (valor) {

        //Ecoponto azul + saco
        case 1:
            if (lixo == "bag") {
                //atribuir posição ao saco de acordo com o onclick no ecoponto
                bag.style.top = ecoazul.offsetTop + 380 + "px"
                bag.style.left = ecoazul.offsetLeft + 650 + "px"
                //diminuir a escala do saco ao posicionala no ecoponto
                bag.style.scale = 0.8
                //somar no contador geral do header
                contador_certas++
                certas.innerHTML = contador_certas
                //div com comentario acertado do objeto no respetivo ecoponto
                caixaResposta.style.display = "block"
                resposta.innerHTML = "Acertaste!!!"
                resposta.style.color = "#5cb85c"
                maisinfo.innerHTML = "Isso mesmo. No ecoponto azul colocas todas as embalagens de cartão e papel."
                caixaResposta.style.backgroundColor = "#C2FFC8"

                audioResposta.src = "audios/correto.mp3"
                audioResposta.play()
                audioResposta.loop = false

                time_out_caixaResposta = setTimeout( function() {
                    caixaResposta.style.display = "none"
                    timer_ecoponto = setInterval(function() {
                        bag.style.opacity =  bag.style.opacity - 0.01
                        if (bag.style.opacity <= 0) {
                            clearInterval(timer_ecoponto)
                        }
                    }, 10)
                },3000)

                conta_lixo++
                if ( conta_lixo == 4) {
                    ecopontos(5)
                }

            }  else if (lixo == "bottle" || lixo == "banana" || lixo == "lata"){
                audioResposta.src = "audios/errado.mp3"
                audioResposta.play()
                audioResposta.loop = false

                contador_erradas++
                erradas.innerHTML = contador_erradas

                caixaResposta.style.display = "block"
                resposta.innerHTML = "Erraste!!!"
                resposta.style.color = "#d9534f"
                maisinfo.innerHTML = "Não desistas. Tenta novamente!!!"
                caixaResposta.style.backgroundColor = "#FFC3C3"
                time_out_caixaResposta = setTimeout( function() {
                    caixaResposta.style.display = "none"
                },3000)

            }
            break;

        //Ecoponto Amarel a
        case 2:
            if (lixo == "lata") {
                lata.style.top = ecoamarelo.offsetTop + 400 + "px"
                lata.style.left = ecoamarelo.offsetLeft + 670 + "px"
                lata.style.scale = 0.8
                contador_certas++
                certas.innerHTML = contador_certas

                caixaResposta.style.display = "block"
                resposta.innerHTML = "Acertaste!!!"
                resposta.style.color = "#5cb85c"
                maisinfo.innerHTML = "Isso mesmo. No ecoponto amarelo colocas todas as embalagens de plástico e metal."
                caixaResposta.style.backgroundColor = "#C2FFC8"

                audioResposta.src = "audios/correto.mp3"
                audioResposta.play()
                audioResposta.loop = false

                time_out_caixaResposta = setTimeout( function() {
                    caixaResposta.style.display = "none"
                    timer_ecoponto = setInterval(function() {
                        lata.style.opacity =  lata.style.opacity - 0.01
                        if (lata.style.opacity <= 0) {
                            clearInterval(timer_ecoponto)
                        }
                    }, 10)
                },3000)

                conta_lixo++
                if ( conta_lixo == 4) {
                    ecopontos(5)
                }

            }  else if (lixo == "bottle" || lixo == "banana" || lixo == "bag"){
                audioResposta.src = "audios/errado.mp3"
                audioResposta.play()
                audioResposta.loop = false

                contador_erradas++
                erradas.innerHTML = contador_erradas

                caixaResposta.style.display = "block"
                resposta.innerHTML = "Erraste!!!"
                resposta.style.color = "#d9534f"
                maisinfo.innerHTML = "Não desistas. Tenta novamente!!!"
                caixaResposta.style.backgroundColor = "#FFC3C3"
                time_out_caixaResposta = setTimeout( function() {
                    caixaResposta.style.display = "none"
                },3000)

            }
            break;

        //Ecoponto verde + garrafa
        case 3:
            if (lixo == "bottle") {
                bottle.style.top = ecoverde.offsetTop + 400 + "px"
                bottle.style.left = ecoverde.offsetLeft + 670 + "px"
                bottle.style.scale = 0.8
                contador_certas++
                certas.innerHTML = contador_certas

                caixaResposta.style.display = "block"
                resposta.innerHTML = "Acertaste!!!"
                resposta.style.color = "#5cb85c"
                maisinfo.innerHTML = "Isso mesmo. No ecoponto verde colocas todas as embalagens de vidro."
                caixaResposta.style.backgroundColor = "#C2FFC8"

                audioResposta.src = "audios/correto.mp3"
                audioResposta.play()
                audioResposta.loop = false

                time_out_caixaResposta = setTimeout( function() {
                    caixaResposta.style.display = "none"
                    timer_ecoponto = setInterval(function() {
                        bottle.style.opacity =  bottle.style.opacity - 0.01
                        if (bottle.style.opacity <= 0) {
                            clearInterval(timer_ecoponto)
                        }
                    }, 10)
                },3000)

                conta_lixo++
                if ( conta_lixo == 4) {
                    ecopontos(5)
                }

            }  else if (lixo == "lata" || lixo == "banana" || lixo == "bag"){
                audioResposta.src = "audios/errado.mp3"
                audioResposta.play()
                audioResposta.loop = false

                contador_erradas++
                erradas.innerHTML = contador_erradas

                caixaResposta.style.display = "block"
                resposta.innerHTML = "Erraste!!!"
                resposta.style.color = "#d9534f"
                maisinfo.innerHTML = "Não desistas. Tenta novamente!!!"
                caixaResposta.style.backgroundColor = "#FFC3C3"
                time_out_caixaResposta = setTimeout( function() {
                    caixaResposta.style.display = "none"
                },3000)

            }
            break;

        //Ecoponto organico + banana
        case 4:
            if (lixo == "banana") {
                banana.style.top = ecoorganico.offsetTop + 420 + "px"
                banana.style.left = ecoorganico.offsetLeft + 640 + "px"
                banana.style.scale = 0.8
                contador_certas++
                certas.innerHTML = contador_certas

                caixaResposta.style.display = "block"
                resposta.innerHTML = "Acertaste!!!"
                resposta.style.color = "#5cb85c"
                maisinfo.innerHTML = "Isso mesmo. No ecoponto orgânico colocas restos de comida, papel de cozinha sujo, restos de poda e não te esqueças de utilizar sacos recicláveis"
                caixaResposta.style.backgroundColor = "#C2FFC8"

                audioResposta.src = "audios/correto.mp3"
                audioResposta.play()
                audioResposta.loop = false

                time_out_caixaResposta = setTimeout( function() {
                    caixaResposta.style.display = "none"
                    timer_ecoponto = setInterval(function() {
                        banana.style.opacity =  banana.style.opacity - 0.01
                        if (banana.style.opacity <= 0) {
                            clearInterval(timer_ecoponto)
                        }
                    }, 10)
                },5000)

                conta_lixo++
                if ( conta_lixo == 4) {
                    ecopontos(5)
                }

            }  else if (lixo == "lata" || lixo == "bottle" || lixo == "bag"){
                audioResposta.src = "audios/errado.mp3"
                audioResposta.play()
                audioResposta.loop = false

                contador_erradas++
                erradas.innerHTML = contador_erradas

                caixaResposta.style.display = "block"
                resposta.innerHTML = "Erraste!!!"
                resposta.style.color = "#d9534f"
                maisinfo.innerHTML = "Não desistas. Tenta novamente!!!"
                caixaResposta.style.backgroundColor = "#FFC3C3"
                time_out_caixaResposta = setTimeout( function() {
                    caixaResposta.style.display = "none"
                },3000)

            }
            break;


        //Apos acertear todos os lixos no ecoponto
        case 5:

            time_out_caixaResposta = setTimeout( function() {
                document.getElementById("articleJogo").style.backgroundImage = "url('imagens/kitchen1.png')"
                document.getElementById("ecopontos").style.opacity = "0.5"
                document.getElementById("btnFimJogo").style.display = "block"
            }, 5000)
    }
}

// Funlção pós arrumar todos os objetos do jpgp
function jogo (valor) {
x
    switch (valor){
        case 1:
            document.getElementById("articleJogo").style.backgroundImage = "url('imagens/kitchen1.png')"
            document.getElementById("ecopontos").style.opacity = "0.5"
            btnComecar.style.display = "block"
            caixaResposta.style.display = "none"
            bag.style.display = "none"
            bottle.style.display = "none"
            lata.style.display = "none"
            banana.style.display = "none"
            document.getElementById("regras").innerHTML = "<p class='fs-4'>Primeiro clica no objeto/lixo depois clica no ecoponto correspondente...</p>"
            break;

        case 2:
            document.getElementById("articleJogo").style.backgroundImage = "url('imagens/kitchen.png')"
            document.getElementById("regras").style.display = "none"
            document.getElementById("ecopontos").style.opacity = "1"
            comecarJogo.style.display = "none"
            btnComecar.style.display = "none"
            caixaResposta.style.display = "none"
            bag.style.display = "block"
            bottle.style.display = "block"
            lata.style.display = "block"
            banana.style.display = "block"
            break;

        case 3:
            document.getElementById("pontuacao").style.display = "block"
            if ( contador_certas > contador_erradas) {
                resultado.innerHTML = "Parabéns!!!"
                resultado.style.color = "#5cb85c"
                mensagemResultado.innerHTML = "Estás apto para ajudar a salvar o planeta."
                document.getElementById("fimPagina").style.backgroundColor = "#C2FFC8"
                audio.pause()
                audio_fim.src = "audios/win.mp3"
                audio_fim.play()
                audio_fim.loop = false
            } else if ( contador_certas < contador_erradas) {
                resultado.innerHTML = "Que pena 😥"
                resultado.style.color = "#d9534f"
                mensagemResultado.innerHTML = "Não desmoralizes. Tenta novamente!!!"
                document.getElementById("fimPagina").style.backgroundColor = "#FFC3C3"
                audio.pause()
                audio_fim.src = "audios/perdeu.mp3"
                audio_fim.play()
                audio_fim.volume = 2
                audio_fim.loop = false
            } else if (contador_certas == contador_erradas ) {
                resultado.innerHTML = "Não está mal 🤔"
                resultado.style.color = "#5cb85c"
                mensagemResultado.innerHTML = "Mas também não está bem, tens de te aplicar mais neste tema."
                document.getElementById("fimPagina").style.backgroundColor = "#FFE671"
            }
            break;
    }
}

//função para cliques no boneco
function boneco (valor) {

    switch (valor) {

        //Valor para Roupa
        case 1:
            document.getElementById("textoRoupa").style.display = "block";
            document.getElementById("textoRoupa").innerHTML = "<b> Não deites fora as tuas roupas</b> "
            document.getElementById("textoRoupa").innerHTML += "<p>  Dá-lhes uma nova função modificando-as ou oferecendo-as a uma instituição de caridade. As que estiverem muito usadas podem ser cortadas e utilizadas como panos de limpeza.</p> "
            document.getElementById("textoOculos").style.display = "none";
            document.getElementById("textoSapatilhas").style.display = "none";
            timer = setTimeout(function () {
                document.getElementById("textoRoupa").style.display = "none";
            }, 15000)
            break;

        //Valor para Oculos
        case 2:
            document.getElementById("textoOculos").style.display = "block";
            document.getElementById("textoOculos").innerHTML = "<b>  Doa os teus óculos velhos a uma istituição de caridade.</b> "
            document.getElementById("textoOculos").innerHTML += "<p>  Algumas destas instituições recolhem óculos e separam-nos para serem reutilizados por pessoas de países em desenvolvimento.</p> "
            document.getElementById("textoRoupa").style.display = "none";
            document.getElementById("textoSapatilhas").style.display = "none";
            timer = setTimeout(function () {
                document.getElementById("textoOculos").style.display = "none";
            }, 15000)
            break;

        // Valor para Sapatilhas
        case 3:
            document.getElementById("textoSapatilhas").style.display = "block";
            document.getElementById("textoSapatilhas").innerHTML = " <b> As tuas sapatilhas também podem ser reutilizadas</b> "
            document.getElementById("textoSapatilhas").innerHTML += "<p>Algumas empresas trituram sapatilhas velhas e reciclam-nas transformando-as em pisos de parques infantis por exemplo. </p>"
            document.getElementById("textoOculos").style.display = "none";
            document.getElementById("textoRoupa").style.display = "none";
            timer = setTimeout(function () {
                document.getElementById("textoSapatilhas").style.display = "none";
            }, 15000)
            break;
    }

}


//codigo
window.onload = function () {

//Contadores no header
    //Valor inicial de respostas certas
    certas.innerHTML = contador_certas
    //valor inicial de respostas erradas
    erradas.innerHTML = contador_erradas



//Video 1 inicia após abrir página

    meteVideo1(1)

    video1_mute.onclick = function () {
        meteVideo1(2)
    }

    video1_som_mais.onclick = function () {
        meteVideo1(3)
    }

    video1_som_menos.onclick = function () {
        meteVideo1(4)
    }

    video1_play.onclick = function () {
        meteVideo1(5)
    }



//Quizz
    document.getElementById("selecionarOpcao").style.display = "none"

// Opções do Quizz
    document.getElementById("opcao1").onclick = function () {
        opcaoQuiz(1)
       }

    document.getElementById("opcao2").onclick = function () {
        opcaoQuiz(2)
         }

    document.getElementById("opcao3").onclick = function () {
        opcaoQuiz(3)
    }

    document.getElementById("opcao4").onclick = function () {
        opcaoQuiz(4)
    }

    document.getElementById("opcao5").onclick = function () {
       opcaoQuiz(5)
    }

    document.getElementById("opcao6").onclick = function () {
        opcaoQuiz(6)
    }

    document.getElementById("opcao7").onclick = function () {
        opcaoQuiz(7)
    }

    document.getElementById("opcao8").onclick = function () {
        opcaoQuiz(8)
    }

    document.getElementById("opcao9").onclick = function () {
       opcaoQuiz(9)
    }


    quizz(1)

    document.getElementById("sequinte1").onclick = function () {
        quizz(2)
    }


    document.getElementById("sequinte2").onclick = function () {
        quizz(3)
    }




//Scroll do mario
    marioScroll(1)
    //Atribuir altura aos checkpoints dos asides de acordo com a altura das sections respetivas
    checkpoint1.style.top = document.getElementById("quiz1").offsetTop + 100 + "px"
    checkpoint2.style.top = document.getElementById("txtRoupa").offsetTop + 200 + "px"
    checkpoint3.style.top = document.getElementById("Jogar").offsetTop + 50 + "px"
    checkpoint4.style.top = document.getElementById("fim").offsetTop - 650 + "px"
    //alterar tamanho da meta/Checkpoint4 e atribuir margem
    checkpoint4.style.scale = 1.5
    checkpoint4.style.right = 45 + "px"

    //tirar posições de um elemento
    altura_checkpoint1 = checkpoint1.offsetTop - 200
    altura_checkpoint2 = checkpoint2.offsetTop - 200
    altura_checkpoint3 = checkpoint3.offsetTop - 200
    altura_checkpoint4 = checkpoint4.offsetTop - 200


    window.onscroll = function () {
        marioScroll(2)
    }



// Boneco
    document.getElementById("boneco").style.display = "none"
    document.getElementById("txtRoupa").style.opacity = 0

    document.getElementById("btnContinuar").onclick = function () {
        quizz(4)

    }

//Oncliks boneco

    document.getElementById("textoOculos").style.display = "none";
    document.getElementById("textoRoupa").style.display = "none";
    document.getElementById("textoSapatilhas").style.display = "none";

    document.getElementById("roupa").onclick = function () {
        boneco(1)
    }

    document.getElementById("oculos").onclick = function () {
        boneco(2)
    }

    document.getElementById("sapatilhas").onclick = function () {
        boneco(3)
    }

// Jogo
    document.getElementById("Jogar").style.display = "none"
    document.getElementById("articleJogo").style.display = "none"

    document.getElementById("Jogar").onclick = function () {

        window.scrollTo({
            top: document.getElementById("Jogar").offsetTop - 150
        })

        document.getElementById("articleJogo").style.display = "block"
        // Colocar audio no som de fundo da pag. ao clicar no jogo
        audio.src = "audios/musica_fundo.mp3"
        audio.play()

        //Detetar/alterar volume no valor do slider do header
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

        //Certificar que o video está parado para jogar, ajudando na não sobreposição de audios
        video1.pause()
        //Trocar icone de play/pause no video para pause
        video1_play.src = "imagens/icons/play_arrow.png"
        //Altertar o estado do video de forma a que este fice false para se voltar a clicar no play/pause, comece a dar
        estado_video1 = false

        jogo(1)
    }

    comecarJogo.onclick = function () {
        jogo(2)
    }


    document.getElementById("btnFimJogo").style.display = "none"
    bag.style.opacity = 1
    bottle.style.opacity = 1
    lata.style.opacity = 1
    banana.style.opacity = 1

    banana.onclick= function () {
        banana.style.scale = 1.4
        lixo = "banana"
    }

    bottle.onclick= function () {
        bottle.style.scale = 1.4
        lixo = "bottle"
    }

    bag.onclick= function () {
        bag.style.scale = 1.4
        lixo = "bag"
    }

    lata.onclick= function () {
        lata.style.scale = 1.4
        lixo = "lata"
    }

    ecoazul.onclick = function ( ) {
        ecopontos(1)
    }

    ecoamarelo.onclick = function () {
        ecopontos(2)
    }

    ecoverde.onclick = function () {
        ecopontos(3)
    }

    ecoorganico.onclick = function () {
        ecopontos(4)
    }


    document.getElementById("botaoFim").onclick = function () {
        window.scrollTo({
            top: document.getElementById("fim").offsetTop - 150
        })
        document.getElementById("verPontos").style.display = "block"
        document.getElementById("articleFinal").style.display = "block"
    }


//Fim da pagina
    document.getElementById("articleFinal").style.display = "none"
    document.getElementById("verPontos").style.display = "none"
    document.getElementById("pontuacao").style.display = "none"

    document.getElementById("verPontos").onclick = function () {
        jogo(3)
    }


}
