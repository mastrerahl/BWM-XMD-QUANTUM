var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod }
}
Object.defineProperty(exports, "__esModule", { value: true })

const axios = require("axios")
const cheerio = require("cheerio")
const { resolve } = require("path")
const util = require("util")
let BodyForm = require('form-data')
let { fromBuffer } = require('file-type')
let fs = require('fs')

// 💤 Royal Sleep: A sacred pause in time
exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// 🏰 Fetch a Royal Buffer from the far lands of the Internet
exports.fetchBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "GET",
            url,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/78.0.3904.70 Safari/537.36",
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (err) {
        console.log("⚠️ The Crown could not fetch the buffer:", err.message)
        return err
    }
}

// 🔮 Convert a WebP Spell to a Moving Vision (MP4)
exports.webp2mp4File = async (path) => {
    console.log("🧙 Summoning Royal Alchemy: WebP ➜ MP4")

    return new Promise((resolve, reject) => {
        const form = new BodyForm()
        form.append('new-image-url', '')
        form.append('new-image', fs.createReadStream(path))

        axios({
            method: 'post',
            url: 'https://s6.ezgif.com/webp-to-mp4',
            data: form,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${form._boundary}`
            }
        }).then(({ data }) => {
            const bodyFormThen = new BodyForm()
            const $ = cheerio.load(data)
            const file = $('input[name="file"]').attr('value')

            bodyFormThen.append('file', file)
            bodyFormThen.append('convert', "Convert WebP to MP4!")

            axios({
                method: 'post',
                url: 'https://ezgif.com/webp-to-mp4/' + file,
                data: bodyFormThen,
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                }
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')

                resolve({
                    status: true,
                    message: "🔱 Transmuted by the Royal Forge of Rahl",
                    result: result
                })
            }).catch(err => {
                console.log("❌ Alchemy Failed:", err.message)
                reject(err)
            })
        }).catch(err => {
            console.log("❌ First transmutation failed:", err.message)
            reject(err)
        })
    })
}

// 🌐 Summon data from the outside realms
exports.fetchUrl = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        console.log("⚠️ Royal Fetch Failed:", err.message)
        return err
    }
}

// 🛡️ Return the current divine WhatsApp version
exports.WAVersion = async () => {
    let get = await exports.fetchUrl("https://web.whatsapp.com/check-update?version=1&platform=web")
    let version = [get.currentVersion.replace(/[.]/g, ", ")]
    console.log("👑 The current WA version hath been divined:", version)
    return version
}

// 🎲 Generate a sacred random ID with extension
exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

// 🌍 Check if a text is a link blessed by the Web
exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'gi'))
}

// 🔢 Determine if this text is a number blessed by digits
exports.isNumber = (number) => {
    const int = parseInt(number)
    return typeof int === 'number' && !isNaN(int)
}
