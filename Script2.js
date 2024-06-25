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

                    sim: ["Maltês", "Um gato"],

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

                                    não: "Giboia"

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

                        pergunta: "Infecta humanos?",

                        sim: "Lombriga",

                        não: "Planária"

                    }

                }

            }

        },

        não: {

            pergunta: "É extinto?",

            sim: {

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

            },

            não: "animal não vivo"

        }

    },

    não: "animal não vivo"

};

 
function jogar(estado, contexto = []) {

    if (Array.isArray(estado)) {

        console.log("Os animais são: " + estado.join(", "));

        return;

    }
 
    if (typeof estado === "string") {

        console.log("O animal é: " + estado);

        return;

    }

    let resposta = prompt(estado.pergunta + " (sim/não) \n\nContexto: " + contexto.join(" > "));

    if (resposta.toLowerCase() === "sim") {

        jogar(estado.sim, [...contexto, "Sim"]);

    } else if (resposta.toLowerCase() === "não") {

        jogar(estado.não, [...contexto, "Não"]);

    } else {

        console.log("Resposta inválida. Tente novamente.");

        jogar(estado, contexto);

    }

}
 
// Iniciar o jogo

jogar(arvore);

 