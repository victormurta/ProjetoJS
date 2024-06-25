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
                                peixe-lanterna, peixe-bolha
                            não oceano profundo:
                                doméstico:
                                    beta, peixinho dourado
                                não doméstico:
                                    água doce:
                                        piranha
                                    água salgada:
                                        tubarão 
                        répteis:
                            tem casco:
                                tartaruga, jabuti
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
                                    Ouriço-do-mar,
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