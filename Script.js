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
    /*Está vivo hoje? --> É imaginário? --> pluricelular? --> vertebrado ou invertebrado --> mamiferos, peixes, répteis, aves --> nada, voa, anda --> perguntas específicas
                                                        --> protozoário, amoeba --> perguntas específicas
            

            Estão vivos:
                Pluricelular:
                    Vertebrados:
                        mamíferos:
                            é doméstico:
                                Maltês, Um gato
                            não é doméstico:
                                é aquático:
                                    Baleia, Lontra
                                voa:
                                    Morcego
                                terrestre:
                                    vaca, porco
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
                            calango, iguana
                            víbora, giboia
                            jabuti, tartaruga
                        aves:
                            pombo, harpia
                            galinha, avestruz

                    Invertebrados:
                            Lombriga, planária
                            Polvo, Estrela-do-mar
                            Água-viva, Ouriço-do-mar
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