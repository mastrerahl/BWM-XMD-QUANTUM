"use strict";

// 👑 RAHL-XMD CORE MODULE
// > Curated by Royal Rahl
// > Quantum Script v8.3.5-Rahl
// > Supreme Execution Engine 💫

Object.defineProperty(exports, "__esModule", { value: true });
exports.reaction = exports.recept_message = exports.getBuffer = exports.zJson = exports.apiWaifu = exports.format = exports.fruit = exports.tabCmd = exports.police = exports.styletext = exports.xlab = exports.ajouterCommande = void 0;

const axios = require('axios');
const path = require("path");
const cheerio = require("cheerio");
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const { getContentType } = require("@whiskeysockets/baileys");
const fs = require('fs-extra');
const util = require('util');
let { listall } = require('./stylish-font');

// 🌐 zJson: Retrieve JSON from any endpoint (Royal Engine)
async function zJson(url, option) {
    try {
        option ? option : {};
        const resultat = await axios({
            method: 'GET', url: url,
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/95.0.4638.69 Safari/537.36' },
            ...option
        });
        return resultat.data;
    } catch (erreur) {
        return erreur;
    }
}
exports.zJson = zJson;

// 📦 getBuffer: Royal ArrayBuffer fetcher
async function getBuffer(url, option) {
    try {
        option ? option : {};
        const resultat = await axios({
            method: 'GET',
            url: url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...option,
            responseType: "arrayBuffer"
        });
        return resultat.data;
    } catch (erreur) {
        console.log(erreur);
    }
}
exports.getBuffer = getBuffer;

// 📨 recept_message: Process incoming WhatsApp messages (Royal core)
async function recept_message(zok, mess, store) {
    if (!mess) return;

    if (mess.key) {
        mess.cleMessage = mess.key;
        mess.idMessage = mess.key.id;
        mess.origineMessage = mess.key.remoteJid;
        mess.moi = mess.key.fromMe;
        mess.groupe = mess.origineMessage.endsWith('@g.us');
        mess.origineBot = mess.idMessage.startsWith('BAE5') && mess.idMessage.length == 16;
    }

    if (mess.message) {
        mess.typeMessage = getContentType(mess.message);
        mess.ms = (mess.typeMessage == 'viewOnceMessage' ?
            mess.message[mess.typeMessage].message[getContentType(mess.message[mess.typeMessage].message)] :
            mess.message[mess.typeMessage]);

        try {
            switch (mess.typeMessage) {
                case 'conversation':
                    mess.corpsMessage = mess.message.conversation;
                    break;
                case 'imageMessage':
                    mess.corpsMessage = mess.message.imageMessage.caption;
                    break;
                case 'videoMessage':
                    mess.corpsMessage = mess.message.videoMessage.caption;
                    break;
                case 'entendedTextMessage':
                    mess.corpsMessage = mess.message.extendedTextMessage.Textarea;
                    break;
                case 'buttonsResponseMessage':
                    mess.corpsMessage = mess.message.buttonsResponseMessage.SelectedButtonId;
                    break;
                case 'listResponseMessage':
                    mess.corpsMessage = mess.message.listResponseMessage.singleSelectReply.selectedRowId;
                    break;
                case 'templateButtonReplyMessage':
                    mess.corpsMessage = mess.message.templateButtonReplyMessage.selectedId;
                    break;
                case 'messageContextInfo':
                    mess.corpsMessage = mess.message.buttonsResponseMessage.SelectedButtonId ||
                        mess.message.listResponseMessage.singleSelectReply.selectedRowId ||
                        mess.text || '';
                    break;
                default:
                    mess.corpsMessage = false;
            }
        } catch {
            mess.corpsMessage = false;
        }
    }

    mess.quoted = mess.ms.contextInfo ? mess.ms.contextInfo.quotedMessage : null;
    mess.mentionedJid = mess.ms.contextInfo ? mess.ms.contextInfo.mentionedJid : [];
    return mess;
}
exports.recept_message = recept_message;

// 🖋️ styletext: Stylish royal text conversion
function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text=' + teks).then(({ data }) => {
            let $ = cheerio.load(data);
            let hasil = [];
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({
                    name: $(b).find('td:nth-child(1) > span').text(),
                    result: $(b).find('td:nth-child(2)').text().trim()
                });
            });
            resolve(hasil);
        });
    });
}
exports.styletext = styletext;

// 🍙 apiWaifu: NSFW-themed Waifu fetcher (Royal AI-Pics)
async function apiWaifu(theme) {
    let url = 'https://api.waifu.pics/nsfw/';
    url += ['waifu', 'trap', 'neko', 'blowjob'].includes(theme) ? theme : 'waifu';

    try {
        const response = await axios.get(url);
        return response.data.url;
    } catch (e) {
        console.log(e);
    }
}
exports.apiWaifu = apiWaifu;

// 🧿 tabCmd, fruit, reaction: Core registries
var tabCmd = {};
exports.tabCmd = tabCmd;

var reaction = {};
exports.reaction = reaction;

var fruit = {};
exports.fruit = fruit;

// 🔁 ajouterCommande: Load all command plugins
async function ajouterCommande() {
    fs.readdirSync(__dirname + "/../scs").forEach((fichier) => {
        if (path.extname(fichier).toLowerCase() == ".js") {
            require(__dirname + "/../scs/" + fichier.split(".js")[0]);
            console.log('📥 Loaded:', fichier);
        }
    });
}
exports.ajouterCommande = ajouterCommande;

// 🔍 xlab: Load SCS command modules and inject into registry
async function xlab() {
    const readDir = util.promisify(fs.readdir);
    const chemin = './scs/';
    const nomFichier = await readDir(chemin);

    nomFichier.forEach((fichier) => {
        if (fichier.endsWith(".js")) {
            const { commande } = require(__dirname + '/../scs/' + fichier.split(".js")[0]);
            if (commande) {
                const infos = commande();
                for (const cd of infos.nomCom) {
                    fruit[cd] = infos.execute;
                }
            }
        }
    });
}
exports.xlab = xlab;

// 🧮 File Formatter for humans – Royal Byte Parser
const { sizeFormatter } = require("human-readable");
const format = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
});
exports.format = format;

// ✍️ police: Return styled font from index
function police(text, index) {
    index = index - 1;
    return listall(text)[index];
}
exports.police = police;

// 🪄 Sticker generator (with royal badge)
module.exports.stick = async (buffer, author) => {
    var sticker = new Sticker(buffer, {
        pack: 'RAHL-XMD',
        author: author,
        type: StickerTypes.FULL,
        categories: ['👑', '🔥'],
        id: '12345',
        quality: 50,
        background: '#000000'
    });
    return sticker;
};

// 📂 File name generator
module.exports.genererNomFichier = async (extension) => {
    const randomNbre = Math.floor(Math.random() * 2000);
    return `Rahl${randomNbre}.${extension}`;
};
