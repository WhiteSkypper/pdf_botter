//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 AshiSingh Bot Inc. Queen AshiSingh Bot MD
//════════════════════════════//

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const AshiSinghkey = require('xfarr-api')
const cheerio = require ("cheerio")
const { AshiSinghTiktok } = require('./lib/tiktokbyAshiSingh')
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { AshiSinghWiki } = require('./lib/AshiSinghywiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const AshiSinghtod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database omther\\
let AshiSinghysticker = JSON.parse(fs.readFileSync('./AshiSinghMedia/theme/Ashi-Singh-Store/sticker.json'));
let AshiSinghyaudio = JSON.parse(fs.readFileSync('./AshiSinghMedia/theme/Ashi-Singh-Store/audio.json'));
let AshiSinghyimage = JSON.parse(fs.readFileSync('./AshiSinghMedia/theme/Ashi-Singh-Store/image.json'));
let AshiSinghyvideo = JSON.parse(fs.readFileSync('./AshiSinghMedia/theme/Ashi-Singh-Store/video.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = AshiSingh = async (AshiSingh, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await AshiSingh.decodeJid(AshiSingh.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
        const groupMetadata = m.isGroup ? await AshiSingh.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : true
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        const deploy = (teks) => {
  AshiSingh.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}	
	
	// FAKE TEXT IMG
const textImg = (teks) => {
AshiSingh.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./AshiSinghMedia/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `94767043432 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "94767043432-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "94767043432-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "94767043432-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "94767043432-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "94767043432-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           AshiSingh.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AshiSinghMedia/theme/AshiSinghhPic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            AshiSingh.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AshiSinghMedia/theme/AshiSinghhPic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!AshiSingh.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await AshiSingh.setStatus(`${AshiSingh.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return AshiSingh.sendMessage(from, { react: { text: `${global.themeemoji}`, key: m.key }})
//}
	

  //auto recording all
    if (global.autoRecord) { if (m.chat) { AshiSingh.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { AshiSingh.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { AshiSingh.sendPresenceUpdate('available', m.chat) }
  }
//auto Status Read
  if (global.statuss) { if (mek.key && mek.key.remoteJid === 'status@broadcast') return AshiSingh.readMessages([mek.key])
  }  

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AshiSingh.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AshiSingh.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AshiSingh.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AshiSingh.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

                //auto reply by AshiSingh
  //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of AshiSinghysticker){
				if (budy === anji){
					result = fs.readFileSync(`./AshiSinghMedia/sticker/${anji}.webp`)
					AshiSingh.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of AshiSinghyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./AshiSinghMedia/audio/${anju}.mp3`)
					AshiSingh.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of AshiSinghyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./AshiSinghMedia/image/${anjh}.jpg`)
					AshiSingh.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of AshiSinghyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./AshiSinghMedia/video/${anjh}.mp4`)
					AshiSingh.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
AshiSingh.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: AshiSingh.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, AshiSingh.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        AshiSingh.ev.emit('messages.upsert', msg)
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

switch(command) {

case 'status': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return replay(`Type status on to enable\nType status off to disable`)
if (args[0] === 'on') {
if (statuss === true) return
global.statuss = true
replay(`Successfully activated AutoRead status!`)
} else if (args[0] === 'off') {
if (statuss === false) return
global.statuss = false
replay(`Successfully deactivated AutoRead status!`)
} else {
replay('Choose on or off')
}
}
break
case 'v2000': {
 re2000 = fs.readFileSync('./AshiSinghMedia/Pdf/V2000.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2000, mimetype: '', fileName:`විවරණ 2000 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2001': {
 re2001 = fs.readFileSync('./AshiSinghMedia/Pdf/V2001.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2001, mimetype: '', fileName:`විවරණ 2001 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2002': {
 re2000 = fs.readFileSync('./AshiSinghMedia/Pdf/V2000.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2002, mimetype: '', fileName:`විවරණ 2002 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2003': {
 re2003 = fs.readFileSync('./AshiSinghMedia/Pdf/V2000.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2003, mimetype: '', fileName:`විවරණ 2003 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2004': {
 re2000 = fs.readFileSync('./AshiSinghMedia/Pdf/V2000.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2004, mimetype: '', fileName:`විවරණ 2004 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2005': {
 re2005 = fs.readFileSync('./AshiSinghMedia/Pdf/V2005.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2005, mimetype: '', fileName:`විවරණ 2005 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2006': {
 re2006 = fs.readFileSync('./AshiSinghMedia/Pdf/V2006.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2006, mimetype: '', fileName:`විවරණ 2006 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2007': {
 re2007 = fs.readFileSync('./AshiSinghMedia/Pdf/V2007.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2007, mimetype: '', fileName:`විවරණ 2007 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break


case 'v2009': {
 re2009 = fs.readFileSync('./AshiSinghMedia/Pdf/V2009.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2009, mimetype: '', fileName:`විවරණ 2009 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2010': {
 re2010 = fs.readFileSync('./AshiSinghMedia/Pdf/V2010.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2010, mimetype: '', fileName:`විවරණ 2010 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2011': {
 re2011 = fs.readFileSync('./AshiSinghMedia/Pdf/V2011.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2011, mimetype: '', fileName:`විවරණ 2011 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2012': {
 re2012 = fs.readFileSync('./AshiSinghMedia/Pdf/V2012.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2012, mimetype: '', fileName:`විවරණ 2012 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2013': {
 re2013 = fs.readFileSync('./AshiSinghMedia/Pdf/V2013.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2013, mimetype: '', fileName:`විවරණ 2013 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2014': {
 re2014 = fs.readFileSync('./AshiSinghMedia/Pdf/V2014.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2014, mimetype: '', fileName:`විවරණ 2014 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2015': {
 re2015 = fs.readFileSync('./AshiSinghMedia/Pdf/V2015.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2015, mimetype: '', fileName:`විවරණ 2015 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2016': {
 re2016 = fs.readFileSync('./AshiSinghMedia/Pdf/V2016.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2016, mimetype: '', fileName:`විවරණ 2016 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2017': {
 re2017 = fs.readFileSync('./AshiSinghMedia/Pdf/V2017.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2017, mimetype: '', fileName:`විවරණ 2017 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2018': {
 re2018 = fs.readFileSync('./AshiSinghMedia/Pdf/V2018.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2018, mimetype: '', fileName:`විවරණ 2018 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2019': {
 re2019 = fs.readFileSync('./AshiSinghMedia/Pdf/V2019.pdf')
 AshiSingh.sendMessage(m.chat, {document: re2019, mimetype: '', fileName:`විවරණ 2019 ප්‍රශ්න පත්‍රය.pdf` }, {quoted: m })
 }
 break

case 'v2020':
await AshiSingh.sendMessage(m.chat,  { text: `මෙම විවරණ පත්‍රය අප හා සම්බන්ධ කර නොමැත😢.කරුණාකර අපගේ Boss දැනුවත් කරන්න🫡`} , {quoted: m } )
break

case 'v2021':
await AshiSingh.sendMessage(m.chat,  { text: `මෙම විවරණ පත්‍රය අප හා සම්බන්ධ කර නොමැත😢.කරුණාකර අපගේ Boss දැනුවත් කරන්න🫡`} , {quoted: m } )
break

case 'v2022':
await AshiSingh.sendMessage(m.chat,  { text: `මෙම විවරණ පත්‍රය අප හා සම්බන්ධ කර නොමැත😢.කරුණාකර අපගේ Boss දැනුවත් කරන්න🫡`} , {quoted: m } )
break

case 'v2008':
await AshiSingh.sendMessage(m.chat,  { text: `මෙම විවරණ පත්‍රය අප හා සම්බන්ධ කර නොමැත😢.කරුණාකර අපගේ Boss දැනුවත් කරන්න🫡`} , {quoted: m } )
break

case 'v2023':
await AshiSingh.sendMessage(m.chat,  { text: `Eww Piccu Collah🤭මට අනාගතේ දකින්න බෑ modayo😒😒💓`} , {quoted: m } )
break

case 'menu':
await AshiSingh.sendMessage(m.chat,  { text: `හායි යාලූ🙊💕
Synergy ආයතනයේ Bot හා සම්බන්ධ වීම පිලිබද මාගේ ස්තූතිය🫣 !

ඔබට අවශ්‍ය PDF ලබාගැනීමට පහත ඒවා type කරන්න💃

${prefix}vivarana - විවරණ ග්‍රන්ථ ලබා ගැනීමට

${prefix}termtest2 - දෙවන වාර විභාගයට අදාල සෙට් එක 

${prefix}termtest3 - තෙවන වාර විභාගයට අදාල සෙට් එක

Credit By Synergy Official⚜️`} , {quoted: m } )
break


case 'termtest2':
await AshiSingh.sendMessage(m.chat,  { text: `
ඔබට අවශ්‍ය PDF ලබාගැනීමට පහත ඒවා type කරන්න💃

${prefix}ananda - කොළඹ ආනන්ද ප්‍රශ්න පත්‍රය 2016

${prefix}vishaka - කොළඹ විශාකා ප්‍රශ්න පත්‍රය 2019

${prefix}dakuna19 - දකුණ පළාත් ප්‍රශ්න පත්‍රය 2019

${prefix}dakuna20 - දකුණ පළාත් ප්‍රශ්න පත්‍රය 2020

${prefix}sena16 - DS සේනානායක ප්‍රශ්න පත්‍රය 2020

${prefix}royal16 - කොළඹ රෝයල් ප්‍රශ්න පත්‍රය 2016

${prefix}thurston19 - තස්ටන් ප්‍රශ්න පත්‍රය 2019

${prefix}wayamba17 - වයඹ පළාත් ප්‍රශ්න පත්‍රය 2017

${prefix}wayamba18 - වයඹ පළාත් ප්‍රශ්න පත්‍රය 2018

${prefix}wayamba19 - වයඹ පළාත් ප්‍රශ්න පත්‍රය 2019

${prefix}wayamba20 - වයඹ පළාත් ප්‍රශ්න පත්‍රය 2020

Credit By Synergy Official⚜️`} , {quoted: m } )
break

case 'wayamba20': {
    wayamba20_1 = fs.readFileSync('./AshiSinghMedia/Pdf/wayamba20.pdf')
    AshiSingh.sendMessage(m.chat, {document: wayamba20_1, mimetype: '', fileName:`වයඹ පළාත් ප්‍රශ්න පත්‍රය 2020.pdf` }, {quoted: m })
    wayamba20_2 = fs.readFileSync('./AshiSinghMedia/Pdf/wayamba201.pdf')
    AshiSingh.sendMessage(m.chat, {document: wayamba20_2, mimetype: '', fileName:`වයඹ පළාත් පිලිතුරු පත්‍රය 2020.pdf` }, {quoted: m })
    }
    break

case 'wayamba19': {
    wayamba19_1 = fs.readFileSync('./AshiSinghMedia/Pdf/wayamba19.pdf')
    AshiSingh.sendMessage(m.chat, {document: wayamba19_1, mimetype: '', fileName:`වයඹ පළාත් ප්‍රශ්න පත්‍රය 2019.pdf` }, {quoted: m })
    }
    break

case 'wayamba18': {
    wayamba18_1 = fs.readFileSync('./AshiSinghMedia/Pdf/wayamba18.pdf')
    AshiSingh.sendMessage(m.chat, {document: wayamba18_1, mimetype: '', fileName:`වයඹ පළාත් ප්‍රශ්න පත්‍රය 2018.pdf` }, {quoted: m })
    }
    break

case 'wayamba17': {
    wayamba17_1 = fs.readFileSync('./AshiSinghMedia/Pdf/wayamba17.pdf')
    AshiSingh.sendMessage(m.chat, {document: wayamba17_1, mimetype: '', fileName:`වයඹ පළාත් ප්‍රශ්න පත්‍රය 2017.pdf` }, {quoted: m })
    wayamba17_2 = fs.readFileSync('./AshiSinghMedia/Pdf/wayamba171.pdf')
    AshiSingh.sendMessage(m.chat, {document: wayamba17_2, mimetype: '', fileName:`වයඹ පළාත් පිලිතුරු පත්‍රය 2017.pdf` }, {quoted: m })
    }
    break

case 'thurston19': {
    thurston19_1 = fs.readFileSync('./AshiSinghMedia/Pdf/thurston19.pdf')
    AshiSingh.sendMessage(m.chat, {document: thurston19_1, mimetype: '', fileName:`තස්ටන් ප්‍රශ්න පත්‍රය 2019.pdf` }, {quoted: m })
    thurston19_2 = fs.readFileSync('./AshiSinghMedia/Pdf/thurston191.pdf')
    AshiSingh.sendMessage(m.chat, {document: thurston19_2, mimetype: '', fileName:`තස්ටන් පිලිතුරු පත්‍රය 2019.pdf` }, {quoted: m })
    }
    break

case 'royal16': {
    royal16_1 = fs.readFileSync('./AshiSinghMedia/Pdf/royal16.pdf')
    AshiSingh.sendMessage(m.chat, {document: royal16_1, mimetype: '', fileName:`කොළඹ රෝයල් ප්‍රශ්න පත්‍රය 2016.pdf` }, {quoted: m })
    royal16_2 = fs.readFileSync('./AshiSinghMedia/Pdf/royal161.pdf')
    AshiSingh.sendMessage(m.chat, {document: royal16_2, mimetype: '', fileName:`කොළඹ රෝයල් පිලිතුරු පත්‍රය 2016.pdf` }, {quoted: m })
    }
    break

case 'sena16': {
    sena16_1 = fs.readFileSync('./AshiSinghMedia/Pdf/sena16.pdf')
    AshiSingh.sendMessage(m.chat, {document: sena16_1, mimetype: '', fileName:`DS සේනානායක ප්‍රශ්න පත්‍රය 2020.pdf` }, {quoted: m })
    sena16_2 = fs.readFileSync('./AshiSinghMedia/Pdf/sena161.pdf')
    AshiSingh.sendMessage(m.chat, {document: sena16_2, mimetype: '', fileName:`DS සේනානායක පිලිතුරු පත්‍රය 2020.pdf` }, {quoted: m })
    }
    break
case 'dakuna20': {
    dakuna20_1 = fs.readFileSync('./AshiSinghMedia/Pdf/dakuna20.pdf')
    AshiSingh.sendMessage(m.chat, {document: dakuna20_1, mimetype: '', fileName:`දකුණ පළාත් ප්‍රශ්න පත්‍රය 2020.pdf` }, {quoted: m })
    dakuna20_2 = fs.readFileSync('./AshiSinghMedia/Pdf/dakuna201.pdf')
    AshiSingh.sendMessage(m.chat, {document: dakuna20_2, mimetype: '', fileName:`දකුණ පළාත් පිලිතුරු පත්‍රය 2020.pdf` }, {quoted: m })
    }
    break

case 'dakuna19': {
    dakuna19_1 = fs.readFileSync('./AshiSinghMedia/Pdf/dakuna19.pdf')
    AshiSingh.sendMessage(m.chat, {document: dakuna19_1, mimetype: '', fileName:`දකුණ පළාත් ප්‍රශ්න පත්‍රය 2019.pdf` }, {quoted: m })
    dakuna19_2 = fs.readFileSync('./AshiSinghMedia/Pdf/dakuna191.pdf')
    AshiSingh.sendMessage(m.chat, {document: dakuna19_2, mimetype: '', fileName:`දකුණ පළාත් පිලිතුරු පත්‍රය 2019.pdf` }, {quoted: m })
    }
    break

case 'vishaka': {
    vishaka_1 = fs.readFileSync('./AshiSinghMedia/Pdf/vishaka.pdf')
    AshiSingh.sendMessage(m.chat, {document: vishaka_1, mimetype: '', fileName:`කොළඹ විශාකා ප්‍රශ්න පත්‍රය 2019.pdf` }, {quoted: m })
    vishaka_2 = fs.readFileSync('./AshiSinghMedia/Pdf/vishaka1.pdf')
    AshiSingh.sendMessage(m.chat, {document: vishaka_2, mimetype: '', fileName:`කොළඹ විශාකා පිලිතුරු පත්‍රය 2019.pdf` }, {quoted: m })
    }
    break

case 'ananda': {
    termtest2_1 = fs.readFileSync('./AshiSinghMedia/Pdf/ananda.pdf')
    AshiSingh.sendMessage(m.chat, {document: termtest2_1, mimetype: '', fileName:`කොළඹ ආනන්ද ප්‍රශ්න පත්‍රය 2016.pdf` }, {quoted: m })
    termtest2_2 = fs.readFileSync('./AshiSinghMedia/Pdf/ananda1.pdf')
    AshiSingh.sendMessage(m.chat, {document: termtest2_2, mimetype: '', fileName:`කොළඹ ආනන්ද පිලිතුරු පත්‍රය 2016.pdf` }, {quoted: m })
    }
    break

    case 'termtest3':
        await AshiSingh.sendMessage(m.chat,  { text: `
        ඔබට අවශ්‍ය PDF ලබාගැනීමට පහත ඒවා type කරන්න💃
        
    ${prefix}sena22 - DS සේනානායක ප්‍රශ්න පත්‍රය 2022
         
    ${prefix}mada21 - මධ්‍යම පළාත් ප්‍රශ්න පත්‍රය 2021
        
    ${prefix}thirdwayamba18 - වයඹ පළාත් තෙවන ප්‍රශ්න පත්‍රය 2018
        
    ${prefix}thirdwayamba17 - වයඹ පළාත් තෙවන ප්‍රශ්න පත්‍රය 2017
        
        Credit By Synergy Official⚜️`} , {quoted: m } )
        break

    case 'thirdwayamba18': {
        thirdwayamba18_1 = fs.readFileSync('./AshiSinghMedia/Pdf/thirdwayamba18.pdf')
            AshiSingh.sendMessage(m.chat, {document: thirdwayamba18_1, mimetype: '', fileName:`වයඹ පළාත් තෙවන ප්‍රශ්න පත්‍රය 2018.pdf` }, {quoted: m })
            }
            break

     case 'thirdwayamba17': {
        thirdwayamba17_1 = fs.readFileSync('./AshiSinghMedia/Pdf/thirdwayamba17.pdf')
             AshiSingh.sendMessage(m.chat, {document: thirdwayamba17_1, mimetype: '', fileName:`වයඹ පළාත් තෙවන ප්‍රශ්න පත්‍රය 2017.pdf` }, {quoted: m })
             }
             break

    case 'sena22': {
            sena22_1 = fs.readFileSync('./AshiSinghMedia/Pdf/sena22.pdf')
            AshiSingh.sendMessage(m.chat, {document: sena22_1, mimetype: '', fileName:`DS සේනානායක I ප්‍රශ්න පත්‍රය 2022.pdf` }, {quoted: m })
            sena22_2 = fs.readFileSync('./AshiSinghMedia/Pdf/sena221.pdf')
            AshiSingh.sendMessage(m.chat, {document: sena22_2, mimetype: '', fileName:`DS සේනානායක II ප්‍රශ්න පත්‍රය 2022.pdf` }, {quoted: m })
            sena22_3 = fs.readFileSync('./AshiSinghMedia/Pdf/sena222.pdf')
            AshiSingh.sendMessage(m.chat, {document: sena22_3, mimetype: '', fileName:`DS සේනානායක පිලිතුරු පත්‍රය 2022.pdf` }, {quoted: m })
            }
            break

    case 'mada21': {
        mada21_1 = fs.readFileSync('./AshiSinghMedia/Pdf/mada21.pdf')
                AshiSingh.sendMessage(m.chat, {document: mada21_1, mimetype: '', fileName:`මධ්‍යම පළාත් ප්‍රශ්න පත්‍රය 2021.pdf` }, {quoted: m })
                mada21_2 = fs.readFileSync('./AshiSinghMedia/Pdf/mada211.pdf')
                AshiSingh.sendMessage(m.chat, {document: mada21_2, mimetype: '', fileName:`මධ්‍යම පළාත් II පිලිතුරු පත්‍රය 2021.pdf` }, {quoted: m })
                mada21_3 = fs.readFileSync('./AshiSinghMedia/Pdf/mada212.jpeg')
                AshiSingh.sendMessage(m.chat, {document: mada21_3, mimetype: '', fileName:`මධ්‍යම පළාත් I පිලිතුරු පත්‍රය 2021.jpeg` }, {quoted: m })
                }
                break
     
     case 'vivarana':
        await AshiSingh.sendMessage(m.chat,  { text: `ඔබට අවශ්‍ය PDF ලබාගැනීමට පහත  ඒවා type කරන්න💃
        
    විවරණ ග්‍රන්ථ ලබා ගැනීමට,
    ඔයාට ඕනකරන විවරණ පත්තරේ ගන්න කරන්නේ මෙච්චරයි😌
                 අදාල වර්ෂය type කරන්න.මතක් කරලා ඉස්සරහට V අකුරක් ගහන්න හරිද🤦‍♂️?
        
    Eg :- ඔයාට ඕනෙ 2010 නම් , v2010 කියලා ටයිප් කරන්න. 
        
        Credit By Synergy Official⚜️`} , {quoted: m } )
        break    

    case 'v2023':
            await AshiSingh.sendMessage(m.chat,  { text: `Eww Piccu Collah🤭මට අනාගතේ දකින්න බෑ modayo😒😒💓`} , {quoted: m } )
            break



            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./AshiSinghMedia/theme/yourtag.webp')
AshiSingh.sendReadReceipt(m.chat, m.sender, [m.key.id])
AshiSingh.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    AshiSingh.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
