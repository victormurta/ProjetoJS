let final;
let caminho;

let arvore = {
    pergunta: "Está vivo?",
    sim: {
        pergunta: "É pluricelular?",
        sim: {
            pergunta: "É vertebrado?",
            sim: {
                pergunta: "É um mamífero?",
                sim: {
                    pergunta: "É doméstico?",
                    sim: {
                        pergunta: "Pula alto?",
                        sim: "Um gato",
                        não: "Maltês"
                    },
                    não: {
                        pergunta: "É aquático?",
                        sim: {
                            pergunta: "É grande?",
                            sim: "Baleia",
                            não: "Lontra"
                        },
                        não: {
                            pergunta: "Voa?",
                            sim: "Morcego",
                            não: {
                                pergunta: "Faz toicinho?",
                                sim: "Porco",
                                não: "Vaca"
                            }
                        }
                    }
                },
                não: {
                    pergunta: "É um peixe?",
                    sim: {
                        pergunta: "Vive em oceano profundo?",
                        sim: {
                            pergunta: "Gera luz?",
                            sim: "Peixe-lanterna",
                            não: "Peixe-bolha"
                        },
                        não: {
                            pergunta: "É doméstico?",
                            sim: {
                                pergunta: "É sociável?",
                                sim: "Peixinho dourado",
                                não: "Peixe beta"
                            },
                            não: {
                                pergunta: "Vive em água doce?",
                                sim: "Piranha",
                                não: "Tubarão"
                            }
                        }
                    },
                    não: {
                        pergunta: "É um réptil?",
                        sim: {
                            pergunta: "Tem casco?",
                            sim: {
                                pergunta: "Nada?",
                                sim: "Tartaruga",
                                não: "Jabuti"
                            },
                            não: {
                                pergunta: "Tem patas?",
                                sim: {
                                    pergunta: "É pequeno?",
                                    sim: "Calango",
                                    não: "Iguana"
                                },
                                não: {
                                    pergunta: "Tem veneno?",
                                    sim: "Víbora",
                                    não: "Jiboia"
                                }
                            }
                        },
                        não: {
                            pergunta: "É uma ave?",
                            sim: {
                                pergunta: "Voa?",
                                sim: {
                                    pergunta: "É da cidade?",
                                    sim: "Pombo",
                                    não: "Harpia"
                                },
                                não: {
                                    pergunta: "É grande?",
                                    sim: "Avestruz",
                                    não: "Galinha"
                                }
                            }
                        }
                    }
                }
            },
            não: {
                pergunta: "É invertebrado?",
                sim: {
                    pergunta: "É do mar?",
                    sim: {
                        pergunta: "Tem toxina?",
                        sim: {
                            pergunta: "Se move?",
                            sim: "Água-viva",
                            não: "Ouriço-do-mar"
                        },
                        não: {
                            pergunta: "Tem tinta?",
                            sim: "Polvo",
                            não: "Estrela-do-mar"
                        }
                    },
                    não: {
                        pergunta: "É achatado?",
                        sim: "Planária",
                        não: "Lombriga"
                    }
                }
            }
        }, não: {
            pergunta:"Possui membrana nuclear?",
            sim: "Protozoário",
            não: "Bactéria"
        }
    },
    não: {
        pergunta: "É um pássaro?",
        sim: {
            pergunta: "É um dinossauro?",
            sim: "Pterodáctilo",
            não: "Dodo"
        },
        não: {
            pergunta: "É herbívoro?",
            sim: "Unicórnio-da-Sibéria",
            não: "Tigre-dente-de-sabre"
        }
    }
};

function GerarImagem(estado){
    let path;
    path = `{estado}.js`;
    return path;
}
 
function jogar(estado, contexto = []) {

    const perguntaDiv = document.getElementById("pergunta");
    const simButton = document.getElementById("sim");
    const naoButton = document.getElementById("nao");

    if (Array.isArray(estado)) {
        console.log("Os animais são: " + estado.join(", "));
        return;
    }
 
    if (typeof estado === "string") {
        localStorage.setItem('animal', estado);
        window.location.href = 'obicho.html';
        document.getElementById('nome').innerHTML = "O animal é: " + estado;
        return estado;
    }

    perguntaDiv.innerHTML = estado.pergunta;

    simButton.onclick = () => jogar(estado.sim, [...contexto, "Sim"]);
    naoButton.onclick = () => jogar(estado.não, [...contexto, "Não"]);
}
 
// Iniciar o jogo

final = jogar(arvore);
//window.location.href = 'obicho.html';
//caminho = GerarImagem(final);


documento.getElementById('Imagem').innerHTML = '{caminho}.jpg'
 