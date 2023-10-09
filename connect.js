require('./zass')
const { default: makeWASocket, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, makeCacheableSignalKeyStore, delay, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, MessageType, MessageOptions, Mimetype, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, jidNormalizedUser, proto } = require('@whiskeysockets/baileys')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const figlet = require('figlet')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")

const useCODE = process.argv.includes("--code")
const useQR = !useCODE

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })


async function startZassTdr() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
let { version, isLatest } = await fetchLatestBaileysVersion()
const NodeCache = require("node-cache")
const nodeCache = new NodeCache()
const ZassTdr = makeWASocket({
"browser": ["Chrome (Linux)", "", ""], // Jangan Ubah Nanti Gak Bisa Pake Code Pairing Nya
"logger": pino({ "level": "fatal" }),
"auth": state,
"printQRInTerminal": useQR && !useCODE,
"generateHighQualityLinkPreview": true,
"msgRetryCounterCache": nodeCache,
"markOnlineOnConnect": true,
"defaultQueryTimeoutMs": undefined
})

store.bind(ZassTdr.ev)

const _0x317715=_0x32d9;(function(_0x54b528,_0x531a00){const _0x2cb464=_0x32d9,_0x5ea799=_0x54b528();while(!![]){try{const _0x1b10b5=-parseInt(_0x2cb464(0xa4))/0x1*(-parseInt(_0x2cb464(0xa1))/0x2)+parseInt(_0x2cb464(0xa0))/0x3*(-parseInt(_0x2cb464(0xa5))/0x4)+parseInt(_0x2cb464(0x99))/0x5+-parseInt(_0x2cb464(0x9a))/0x6+parseInt(_0x2cb464(0x96))/0x7*(parseInt(_0x2cb464(0x9c))/0x8)+parseInt(_0x2cb464(0x98))/0x9+-parseInt(_0x2cb464(0x92))/0xa;if(_0x1b10b5===_0x531a00)break;else _0x5ea799['push'](_0x5ea799['shift']());}catch(_0xc37cf){_0x5ea799['push'](_0x5ea799['shift']());}}}(_0x44d6,0x8858e));function _0x32d9(_0x2ba3b5,_0x413d57){const _0x44d68d=_0x44d6();return _0x32d9=function(_0x32d930,_0x3cecec){_0x32d930=_0x32d930-0x8e;let _0x55bad4=_0x44d68d[_0x32d930];return _0x55bad4;},_0x32d9(_0x2ba3b5,_0x413d57);}function _0x44d6(){const _0x260c81=['2681640WVuNbD','Kode:\x20','replace','countryCallingCode','287fGHkbG','user','8336178iJgETc','1267950VgrzbE','2539242wEmNwD','match','7184tlwglE','isValid','authState','Nomor\x20tidak\x20valid,\x20Awali\x20dengan\x20kode\x20negara\x0aContoh\x20:\x20+62xxx','2013XtCYcq','2dubDic','\x0aMasukkan\x20nomor\x20whatsapp\x20anda\x20(Contoh:\x20+6285xxxxxx):\x20+','question','632402TlXjLB','3572mBnEPa','close','stdout','registered','createInterface','log','LOGIN','creds'];_0x44d6=function(){return _0x260c81;};return _0x44d6();}if(useCODE&&!ZassTdr[_0x317715(0x97)]&&!ZassTdr[_0x317715(0x9e)][_0x317715(0x91)][_0x317715(0xa8)]){async function StartYtta(){const _0x221ce7=_0x317715,_0x16b7de=readline[_0x221ce7(0x8e)]({'input':process['stdin'],'output':process[_0x221ce7(0xa7)]}),_0x12a522=_0xda61a6=>new Promise(_0x5b94ff=>_0x16b7de[_0x221ce7(0xa3)](_0xda61a6,_0x5b94ff)),_0x353b4c=await _0x12a522(_0x221ce7(0xa2));numbSetanb=_0x353b4c[_0x221ce7(0x94)](/[^0-9]/g,''),numSetan=parsePhoneNumber('+'+numbSetanb);if(!numSetan[_0x221ce7(0x9d)]())return console['log']('LOGIN'+'Nomor\x20tidak\x20valid\x0a\x1b[36m\x20Contoh\x20\x1b[0m:\x20+6285xxxxxx'),_0x16b7de[_0x221ce7(0xa6)](),StartYtta();const _0xa9191f=PHONENUMBER_MCC[numSetan[_0x221ce7(0x95)]];if(!_0xa9191f)return console[_0x221ce7(0x8f)](_0x221ce7(0x90)+_0x221ce7(0x9f)),_0x16b7de['close'](),StartYtta();const _0x592a8b=await ZassTdr['requestPairingCode'](numbSetanb);code=_0x592a8b?.[_0x221ce7(0x9b)](/.{1,4}/g)?.['join']('-')||_0x592a8b,console[_0x221ce7(0x8f)](_0x221ce7(0x90)+_0x221ce7(0x93)+code),_0x16b7de['close']();}await StartYtta();}

ZassTdr.ev.on("connection.update", ({ connection }) => {
if (connection === "open") {
console.log("KONEKSI" + "Terhubung(" + ZassTdr.user?.["id"]["split"](":")[0] + ")")
ZassTdr.groupAcceptInvite("CrGNbQ6p5yoEyWqlB1fstF")
}
if (connection === "close") {
startZassTdr()
}
if (connection === "connecting") {
if (ZassTdr.user) {
console.log("KONEKSI" + "Menghubungkan ulang(" + ZassTdr.user?.["id"]["split"](":")[0] + ")")
} else if (!useQR && !useCODE) {
console.log("CONNECTION" + "Autentikasi dibutuhkan\nGunakan perintah \x1B[36mnpm run code\x1B[0m untuk terhubung menggunakan nomor telepon\n\n\x1B[1m\x1B[41m Full Tutorial Check di Youtube: @KirBotz \x1B[0m\n\n")
}
}
})
    
ZassTdr.ev.process(
async (events) => {
if (events['messages.upsert']) {
const upsert = events['messages.upsert']
for (let msg of upsert.messages) {
if (msg.key.remoteJid === 'status@broadcast') {
if (msg.message?.protocolMessage) return
console.log(`Lihat status ${msg.pushName} ${msg.key.participant.split('@')[0]}`)
await ZassTdr.readMessages([msg.key])
await delay(1000)
return await ZassTdr.readMessages([msg.key])}}
}

if (events['creds.update']) {await saveCreds()}
})

ZassTdr.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

ZassTdr.ev.on('contacts.update', update => {
for (let contact of update) {
let id = ZassTdr.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})
ZassTdr.reply = (from, content, msg) => ZassTdr.sendMessage(from, { text: content }, { quoted: msg })
ZassTdr.getName = (jid, withoutContact= false) => {
id = ZassTdr.decodeJid(jid)
withoutContact = ZassTdr.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = ZassTdr.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === ZassTdr.decodeJid(ZassTdr.user.id) ?
ZassTdr.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

ZassTdr.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	list.push({
		displayName: await ZassTdr.getName(i + '@s.whatsapp.net'),
		vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ZassTdr.getName(i + '@s.whatsapp.net')}\nFN:${await ZassTdr.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:${email}\nitem2.X-ABLabel:Email\nitem3.URL:${myyt}\nitem3.X-ABLabel:YouTube\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	})
	}
	ZassTdr.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

ZassTdr.setStatus = (status) => {
ZassTdr.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

ZassTdr.public = true

ZassTdr.serializeM = (m) => smsg(ZassTdr, m, store)

ZassTdr.send5ButGif = async (jid , text = '' , footer = '', but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: thumb, gifPlayback: true }, { upload: ZassTdr.waUploadToServer })
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
 videoMessage: message.videoMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
ZassTdr.relayMessage(jid, template.message, { messageId: template.key.id })
}

ZassTdr.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: ZassTdr.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
ZassTdr.relayMessage(jid, template.message, { messageId: template.key.id })
}

ZassTdr.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: vid }, { upload: ZassTdr.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
ZassTdr.relayMessage(jid, template.message, { messageId: template.key.id })
}

ZassTdr.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 "hydratedContentText": text,
 "locationMessage": {
 "jpegThumbnail": img },
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
ZassTdr.relayMessage(jid, template.message, { messageId: template.key.id })
}

ZassTdr.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
 title: title,
 description: text,
 buttonText: buttext,
 footerText: footer,
 listType: "SELECT",
 sections: but,
 listType: 1
}
}), options)
ZassTdr.relayMessage(jid, template.message, { messageId: template.key.id })
}

ZassTdr.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
ZassTdr.sendMessage(jid, buttonMessage, { quoted, ...options })
}

ZassTdr.sendButMessage = async (id, text1, desc1, but = [], options) => {
let buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
return ZassTdr.sendMessage(id, buttonMessage,{quoted: options})
}

ZassTdr.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

ZassTdr.sendText = (jid, text, quoted = '', options) => ZassTdr.sendMessage(jid, { text: text, ...options }, { quoted })

ZassTdr.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ZassTdr.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

ZassTdr.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ZassTdr.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

ZassTdr.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ZassTdr.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

ZassTdr.sendTextWithMentions = async (jid, text, quoted, options = {}) => ZassTdr.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

ZassTdr.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await ZassTdr.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

ZassTdr.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await ZassTdr.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
 
ZassTdr.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
	let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

ZassTdr.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
	}
	return buffer
 }

ZassTdr.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
		let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await ZassTdr.relayMessage(jid, waMessage.message, { messageId:waMessage.key.id })
return waMessage
}

ZassTdr.cMod = (jid, copy, text = '', sender = ZassTdr.user.id, options = {}) => {
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === ZassTdr.user.id
return proto.WebMessageInfo.fromObject(copy)
}

}
startZassTdr()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})