const config = require("./conf.json");
const discordjs = require("discord.js");
const bot = new discordjs.Client();
bot.login(config.token);
const axios = require('axios');
const words = require('./words.json');

bot.on("ready", () => {
    console.log("Ligo");
    bot.user.setPresence({
        game: {
            name: 'doidera',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});
bot.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (msg.author.id !== bot.user.id && msg.content.startsWith(config.prefix)) {
        switch (command) {
            case 'doidera':
                msg.channel.send("doidera " + args.join(' ')).then(function (msg) {
                    msg.react("👍");
                }).catch(function () {});
                break;
            case 'doideira':
                msg.channel.send("doideira " + args.join(' ')).then(function (msg) {
                    msg.react("👍");
                }).catch(function () {});
                break;
                case 'lilraff':
                msg.channel.send("<:raffamoreira:487179437662797824>")
                break
            case 'speedtest':
                if (msg.author.id !== '473527953511153684') {
                    msg.channel.send("tomar no cu so o biscoito executa isos");
                } else {
                    msg.channel.send("```Efetuando speedtest - Vultr 1GB```");
                    axios.get('https://b1scoito-is-my-nig.ga/projects/speedtest.php').then(response => {
                        msg.channel.send("```" + response.data + "```")
                    })
                }
                break;
            case 'ping':
                msg.channel.send("```Efetuando ping - Vultr 1GB```");
                axios.get('https://b1scoito-is-my-nig.ga/projects/ping.php?ip=' + args[0]).then(response => {
                    msg.channel.send("```" + response.data + "```")
                })
                break;
            case 'data':
                msg.channel.send(Date());
                break;
            case 'pingapi':
                msg.channel.send("Efetuando ping em 3 HOPS... (Client to DiscordAPI)")
                for (var i = 1; i < 4; i++) {
                    (function (i) {
                        setTimeout(function () {
                            msg.channel.send(i + ": " + Math.round(bot.ping) + "ms");
                        }, 2000 * i);
                    })(i);
                };
                break;
            case 'face':
                axios.get('https://api.mojang.com/users/profiles/minecraft/' + args[0]).then(response => {
                        msg.channel.send({
                            file: "https://crafatar.com/avatars/" + response.data.id + ".png"
                        });
                    })
                    .catch(error => {
                        msg.reply('Algum erro aconteceu, contacte <@151797204737064970>, para mais informacoes.');
                        console.log(error);
                    });
                break;
            case 'skin':
                axios.get('https://api.mojang.com/users/profiles/minecraft/' + args[0]).then(response => {
                        msg.channel.send({
                            file: "https://crafatar.com/renders/body/" + response.data.id + "?overlay=true.png"
                        });
                    })
                    .catch(error => {
                        msg.reply('Algum erro aconteceu, contacte <@151797204737064970>, para mais informacoes.');
                        console.log(error);
                    });
                break;
            case 'pi':
                msg.channel.send(Math.PI);
                break;
            case 'chutar':
                var cu = ['sim', 'nao', 'seila'];
                var asd = Math.floor(Math.random() * cu.length);
                msg.channel.send("Pergunta: " + args.join(' ') + "? " + cu[asd]);
                break;
            case 'raiz':
                msg.channel.send(Math.sqrt(args[0]));
                break;
            case 'euler':
                msg.channel.send(Math.E);
                break;
            case 'floodar':
                if (msg.author.id === "473527953511153684") {
                    var text = "";
                    var i = 0;
                    if (args[1] < 20) {
                        while (i < args[1]) {
                            text += "\n" + i;
                            i++;
                            var str = args.slice(0, -1);
                            msg.channel.send(str.join(' '));
                        }
                    } else {
                        msg.channel.send("muito alto issae diminui ai");
                    }
                } else if (msg.author.id === "482992566531391491") {
                    var text = "";
                    var i = 0;
                    if (args[1] < 20) {
                        while (i < args[1]) {
                            text += "\n" + i;
                            i++;
                            var str = args.slice(0, -1);
                            msg.channel.send(str.join(' '));
                        }
                    } else {
                        msg.channel.send("muito alto issae diminui ai");
                    }
                } else {
                    msg.channel.send("expertinhu so o biscoito  e o mythedao e o re=vrsingn pode esecutar iso");
                }
                break;
            case 'sorte':
                msg.channel.send("Seu numero da sorte: " + Math.floor(Math.random() * 100) + 1);
                break;
            case 'foda-se':
                msg.channel.send("Foda-se " + args.join(' '));
                break;
            case 'gay':
                msg.channel.send("AE GALERA O " + msg.author.username.toUpperCase() + " ADMITIU QUE E GAY AO VIVO EM!!!!!!!!!!");
                break;
            case 'roleadd':
                if (msg.author.id !== "473527953511153684") {
                    msg.channel.send("hmmmmmmm, parese que vose esecutou o comanmdo imcorreto");
                } else {
                    let userToModify = msg.mentions.members.first();
                    let roleToAdd = msg.mentions.roles.first();
                    userToModify.addRole(roleToAdd);
                }
                break;
            case 'rolermv':
                if (msg.author.id !== "473527953511153684") {
                    msg.channel.send("hmmmmmmm, parese que vose esecutou o comanmdo imcorreto");
                } else {
                    let userToModify = msg.mentions.members.first();
                    let roleToAdd = msg.mentions.roles.first();
                    userToModify.removeRole(roleToAdd);
                }
                break;
            case 'localizar':
                axios.get('http://api.db-ip.com/v2/free/' + args[0]).then(response5 => {
                    try {
                        if (response5.data.error) {
                            msg.channel.send({
                                embed: {
                                    color: 0xFF0000,
                                    description: "Indefinido, codigo de erro: " + response5.data.errorCode,
                                    footer: {
                                        icon_url: msg.author.avatarURL,
                                        text: "Requested by: " + msg.author.username
                                    }
                                }
                            });
                        } else {
                            msg.channel.send({
                                embed: {
                                    color: 0xFF0000,
                                    description: "Codigo do pais: " + response5.data.countryCode + "\n" + "Nome do pais: " + response5.data.countryName + "\n" + "Estado: " + response5.data.stateProv + "\n" + "Cidade: " + response5.data.city,
                                    footer: {
                                        icon_url: msg.author.avatarURL,
                                        text: "Requested by: " + msg.author.username
                                    }
                                }
                            });
                        }
                    } catch (_a) {
                        msg.channel.send({
                            embed: {
                                color: 0xFF0000,
                                description: "API Timeout",
                                footer: {
                                    icon_url: msg.author.avatarURL,
                                    text: "Requested by: " + msg.author.username
                                }
                            }
                        });
                    }
                });
                break;
            case 'thonkao':
                const ayy = bot.emojis.find("name", "thonkao");
                msg.channel.send(`${ayy}`);
                break;
            case 'gayname':
                var randomNumber = Math.floor(Math.random() * words.length);
                msg.reply("Seu nome gay: " + words[randomNumber] + "GAY");
                break;
            case 'ban':
                msg.channel.send("banido rs")
                break;
            case 'mute':
                msg.channel.send("mutado rs");
                break;

            default:
                var textArray = [
                    'vose esecutou o conando errado xeu burro',
                    'mano pqp executa o comando certo e pronto',
                    'execute o comando correto por gentizela',
                    'hmmmmmmm, parese que vose esecutou o comanmdo imcorreto',
                    'querido amigo, VAI TOMAR NO CU, obrigado e por gentiliza execute o comando correto'
                ];
                var randomNumber = Math.floor(Math.random() * textArray.length);
                msg.channel.send(textArray[randomNumber] + ' ' + msg.author.username);
        }
    } else if (msg.content.startsWith("<@!478989726657806340>") && msg.author !== bot.user) {
        var arraydoidera = [
            "d6eeb13f-8a8a-470b-af98-c94a4bbfc061",
            "16d48710-45b6-4e0f-996e-793a6d174202",
            "17289d8c-121c-435e-84bf-18f888f74c7b",
            "67eddf1f-71e8-4d52-b511-8e87349bfd85",
            "bf002f57-b15f-4634-9896-1270f61d47e5",
            "d3dfd459-9ff9-46b3-af41-0fcc38ab201e",
            "280c123d-2e9c-4d05-af8e-74aff5ae3077",
            "d49610c6-fe07-4730-b01c-565da855ac06"
        ];
        var seila2 = Math.floor(Math.random() * arraydoidera.length);
        axios.get('http://sandbox.api.simsimi.com/request.p?key=' + arraydoidera[seila2] + '&lc=en&ft=0.0&text=' + msg.content).then(response => {
            console.log("Request token: " + arraydoidera[seila2])
            if (response.data['result'] === 100) {
                msg.channel.startTyping();
                setTimeout(function () {
                    msg.channel.send(response.data['response']);
                    msg.channel.stopTyping(true);
                }, Math.floor(Math.random() * 1200) + 350);
            } else if (response.data['result'] === 509) {
                msg.channel.send({
                    embed: {
                        color: 0xFF0000,
                        description: "Limite excedido (Tomou no cu)",
                        footer: {
                            icon_url: msg.author.avatarURL,
                            text: "Requested by: " + msg.author.username
                        }
                    }
                });
            } else if (response.data['result'] === 404) {
                msg.channel.send({
                    embed: {
                        color: 0xFF0000,
                        description: "Mensagem nao reconhecida.",
                        footer: {
                            icon_url: msg.author.avatarURL,
                            text: "Requested by: " + msg.author.username
                        }
                    }
                });
            } else if (msg.content.startsWith("#")) {
                msg.react("👀");
            } else {
                msg.channel.send({
                    embed: {
                        color: 0xFF0000,
                        description: "Erro desconhecido",
                        footer: {
                            icon_url: msg.author.avatarURL,
                            text: "Requested by: " + msg.author.username
                        }
                    }
                });
            }
        });
    } else if (msg.author !== bot.user) {
        if (msg.content.includes("teste")) {
            msg.edit("ahn")
        } else if (msg.author !== bot.user) {
            if (msg.content.includes("faz sol")) {
                msg.channel.send({
                    file: 'https://i.imgur.com/oCvQTxn.jpg'
                })
            } else if (msg.author !== bot.user) {
                if (msg.content.includes("hack")) {
                    msg.channel.send({
                        file: 'https://objects.floatr.me/9Rqx3gi61Us8Lqcm.png'
                    })
                } else if (msg.author !== bot.user) {
                    if (msg.content.includes("doidera")) {
                        msg.channel.send("de mais");
                    }
                }
            }
        }
    }
});