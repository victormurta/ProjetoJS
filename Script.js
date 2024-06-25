function processInput() {
    const input = document.getElementById('userInput').value;
    const outputText = document.getElementById('outputText');
    const genericOutput = document.getElementById('genericOutput');

    if (input) {
        outputText.textContent = `Você digitou: ${input}`;
        genericOutput.textContent = `Dados processados: ${input}`;
    } else {
        outputText.textContent = 'Por favor, insira um valor.';
        genericOutput.textContent = 'Nenhum dado para mostrar.';
    }
}

let Estado2 = ["Está vivo?", vivos, extintos];
let vivos2 = ["É pluricelular?", Pluricelulares2, Unicelulares];
let Pluricelulares2 = ["É vertebrado?", vertebrado2, invertebrado2];
let vertebrado2 = ["É mamifero?", mamifero];
                  ["É um peixe?", peixes];
                  ["É um réptil?", reptil];
                  ["É uma ave?", aves];
let Estado = {vivos, extintos};
let vivos = {Pluricelular, Unicelulares};
let Pluricelular = {vertebrados, invertebrados};
let Unicelulares = {bactérias, protozoários};
let invertebrados = {mar, naoDoMar};
let vertebrados = {mamiferos, peixes, repteis, aves};

let mamiferos = {MamDomestico, MamNaoDomestico}; 
let MamNaoDomestico = {aquatico, voa, terrestre};
let terrestre = {faztoicinho, naoFazToicinho}; let faztoicinho = ["porco"]; let voa = ["morcego"];
let aquatico = {grande, pequeno}; let grande = ["baleia"]; let pequeno = ["lontra"];
let naoFazToicinho = ["vaca"];
let MamDomestico = {pulaAlto, naoPulaAlto}; let pulaAlto = ["gato"]; let naoPulaAlto = ["cachorro"];

let peixes = {profundo, naoProfundo};
let profundo = {temLuz, NaoTemLuz}; let temLuz = ["peixe-lanterna"]; let NaoTemLuz = ["peixe-bolha"];
let naoProfundo = {PeixeDomestico, PeixeNaoDomestico};
let PeixeDomestico = {amigavel, solitario}; let amigavel = ["peixe-dourado"]; let solitario = ["solitario"];
let PeixeNaoDomestico = {aguaDoce, aguaSalgada}; let aguaDoce = ["piranha"]; let aguaSalgada = ["tubarão"];

let repteis = {temCasco, naoTemCasco};
let temCasco = {nada, NaoNada}; let nada = ["tartaruga"]; let NaoNada = ["Jabuti"];
let naoTemCasco = {temPatas, NaoTemPatas};
let temPatas = {RepPequeno, RepGrande}; let RepPequeno = ["calango"]; let RepGrande = ["Iguana"];
let NaoTemPatas = {venenoso, NaoVenenoso}; let venenoso = ["víbora"]; let NaoVenenoso = ["giboia"];

let aves = {AveVoa, AveNaoVoa};
let AveVoa = {cidade, NaoCidade}; let cidade = ["pombo"]; let NaoCidade = ["harpia"];
let AveNaoVoa = {AvePequena, AveGrande}; let AvePequena = ["galinha"]; let AveGrande = ["avestruz"];

let mar = {toxico, NaoToxico};
let toxico = {SeMove, NaoSeMove}; let SeMove = ["Água-viva"]; let NaoSeMove = ["Ouriço-do-mar"];
let NaoToxico = {tinta, SemTinta};  let tinta = ["Polvo"]; let SemTinta = ["Estrela-do-Mar"];

let naoDoMar = {InfectaHumanos, NãoInfectaHumanos};






function adivinhaAnimal(){
    /*
            Estão vivos: DONE
                Pluricelular: DONE
                    Vertebrados: DONE
                        mamíferos: DONE
                            é doméstico: DONE
                                Maltês, Um gato
                            não é doméstico: DONE
                                é aquático:
                                    é grande: DONE
                                        Baleia
                                    não é grande DONE
                                        Lontra
                                voa: DONE
                                    Morcego
                                terrestre: DONE
                                    Faz toicinho: DONE
                                        vaca
                                    Não faz toicinho DONE
                                        porco
                        peixes: DONE
                            oceano profundo: DONE
                                peixe-lanterna, peixe-bolha
                            não oceano profundo: DONE
                                doméstico: DONE
                                    beta, peixinho dourado
                                não doméstico: DONE
                                    água doce:
                                        piranha
                                    água salgada:
                                        tubarão 
                        répteis: DONE
                            tem casco: DONE
                                tartaruga, jabuti
                                    Nada: DONE
                                        tartaruga
                                    Não nada: DONE
                                        jabuti
                                Não tem casco: DONE
                                    tem patas: DONE
                                        pequeno:
                                            calango
                                        grande:
                                            iguana
                                    Não tem patas: DONE
                                        tem veneno:
                                            víbora
                                        Não tem veneno
                                            giboia
                        aves: DONE
                            voa: DONE
                                é da cidade:
                                    pombo
                                não é da cidade
                                    harpia
                            não voa: DONE
                                pequeno:
                                    galinha
                                grande: 
                                    avestruz
                    Invertebrados:
                        é do mar:
                            tem toxina:
                                se move:
                                    Água-viva
                                não se move:
                                    Ouriço-do-mar
                            Não tem toxina:
                                tem tinta:
                                    Polvo
                                Não tem tinta:
                                    Estrela-do-mar
                        não é do mar:
                            infecta humanos:
                                Lombriga
                            não infecta humanos:
                                planária
                Unicelulares:
                    Bactérias
                    Protozoários
            Estão extintos:
                É um pássaro:
                    É um dinossauro:
                        Pterodáctil
                    Não é um dinossauro:
                        Dodo
                Não é um pássaro:
                    É herbívoro:
                        Unicório-da-Sibéria
                    Não é herbívoro:
                        Tigre-dente-de-sabre
            */

}