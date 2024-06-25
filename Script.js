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

let Estado = ["Está vivo?", vivos, extintos];
let vivos = ["É pluricelular?", Pluricelulares, Unicelulares];
let Pluricelulares = ["É vertebrado?", vertebrado, invertebrados];
let vertebrado = ["É um mamífero?", mamiferos],
                 ["É um peixe?", peixes],
                 ["É um reptil"]


let Unicelulares = {bactérias, protozoários};
let invertebrados = {mar, naoDoMar};
let vertebrados = {mamiferos, peixes, repteis, aves};

let mamiferos = ["É doméstico?", MamDomestico, MamNaoDomestico]; 
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
            Estão vivos:
                Pluricelular:
                    Vertebrados:
                        mamíferos: 
                            é doméstico:
                                Maltês, Um gato
                            não é doméstico:
                                é aquático:
                                    é grande:
                                        Baleia
                                    não é grande
                                        Lontra
                                voa:
                                    Morcego
                                terrestre:
                                    Faz toicinho: 
                                        vaca
                                    Não faz toicinho
                                        porco
                        peixes:
                            oceano profundo:
                                gera luz:
                                    peixe-lanterna
                                não gera luz:
                                    peixe-bolha
                            não oceano profundo:
                                doméstico: 
                                    sociável: 
                                        peixinho dourado
                                    não sociável:
                                        peixe beta
                                não doméstico:
                                    água doce:
                                        piranha
                                    água salgada:
                                        tubarão 
                        répteis:
                            tem casco:
                                Nada:
                                    tartaruga
                                Não nada:
                                    jabuti
                                Não tem casco:
                                    tem patas:
                                        pequeno:
                                            calango
                                        grande:
                                            iguana
                                    Não tem patas:
                                        tem veneno:
                                            víbora
                                        Não tem veneno
                                            giboia
                        aves: 
                            voa:
                                é da cidade:
                                    pombo
                                não é da cidade
                                    harpia
                            não voa:
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