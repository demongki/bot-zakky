/*
Base By MhankBarBar
Recode By DappaUhuy, BloodSword
Recode Doang Bang, Jan Dibully
Ga Semua Case Buatan Gw, Ada Yang Copas

Big Thanks To : Baileys

Thanks To :
Dappa:v
BloodSword
LolHuman
LeysCoders
CdnPixabay
MmgWhatsApp
I0Wp
DapUhyApi
DappaResult
HadiApi
ServantOfEvil
ZekaisApi
ApiAnoncybfakeplayer
Pencarikode
Jamet1337
SertifikatGenerator
OnlyDevCity

Thanks For All Creator Bot WhatsApp
*/

//npm
const qrcode = require('qrcode-terminal') 
const moment = require('moment-timezone') 
const fs = require('fs')
const got = require('got')
const axios = require('axios')
const crypto = require('crypto')
const delay = require('delay')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const encodeUrl = require('encodeurl')
const gis = require('g-i-s')
const request = require('request')
const fetch = require('node-fetch')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const path = require('path')
const cd = 4.32e+7
const { exec } = require('child_process')
const { removeBackgroundFromImageFile } = require('remove.bg')

//lib
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { cheat } = require('./lib/cheat')
const { animesaran } = require('./lib/animesaran')
const { animesaran2 } = require('./lib/animesaran2')
const { donasi } = require('./lib/donasi')
const { infown } = require('./lib/infown')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { cmdadd } = require('./lib/totalcmd')
const { antiSpam } = require('./lib/antispam')
const { snk } = require('./lib/snk')
const fontPath = ('./lib/Zahraaa.ttf')
const { wait, h2k, generateMessageID, getRandom, getBuffer, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif')
const exif = new Exif()


//plugins
const { convertSticker } = require('./plugins/swm.js')

//Modal Dikit Broh:v
DapKey = '01v0ynoFPu3rVCl' 
LeysKey = 'dappakntlll' //beli di https://leyscoders-api.herokuapp.com
//BloodSword' //beli di https://api.lolhuman.xyz
// 1c9c4b4017ab7e71569bde00
ZeksKey = 'WAITeN1CgDkEEyllmU9nWyGFoPX'
LolKey = 'BloodSword'
PencariKode = 'pais'
Hardianto =  'hardianto'

//Settings => Semua Aturnya Disini <=
fake = 'BloodSword'
namabot = 'BloodSword' //Ubah jadi nama bot lu
namaowner = 'Zakky' //Ubah jadi nama lu
nomerlu = '62881036690566' //Ubah jadi nomer lu
limitawal = '99999' //Ubah jadi sesuka lu
memberlimit = '0' //Ubah jadi sesuka lu

//vcard
const vcard = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:Zakky\n'
              + 'ORG: Owner Zakky\n'
              + 'TEL;type=CELL;type=VOICE;waid=62881036690566:+6285784830497\n'
              + 'END:VCARD' //gausah diganti
              
//ini biarin aja
blocked = []

//ownernumber
const ownerNumber = [`${nomerlu}@s.whatsapp.net`] //gausah diganti

//json file
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const antgdpaa = JSON.parse(fs.readFileSync('./database/tagdappa.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const adm = JSON.parse(fs.readFileSync('./database/admin.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const pepolu = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd

//wa connect
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
			
//simih
const simih = async (text) => {
	try {
		const sami = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=${LolKey}&text=${text}`, {method: 'GET'})
		const res = await sami.json()
		return res.result
	} catch {
		return 'Siminya gatau mau ngomong apa:v'
	}
}

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }

        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }

            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
const dp = new WAConnection()
dp.version = [2, 2143, 3]
dp.logger.level = 'warn'
console.log(banner.string)
   dp.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('DappaGanz','red'), color('(+)','white'), color(' SQAN CODENYA','aqua'), color('SUBREK YT DappaUhuy','yellow'))
})

	dp.on('credentials-updated', () => {
		fs.writeFileSync('./dpbot.json', JSON.stringify(dp.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./dpbot.json') && dp.loadAuthInfo('./dpbot.json')
	dp.on('connecting', () => {
		start('2', color('[ ! ]Scan Codenya Ngab','aqua'))
	})
	dp.on('open', () => {
		success('2', color('[ ! ]Tersambung','red'))
	})
	dp.connect({timeoutMs: 30*1000})

dp.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
      try {
         const mdata = await dp.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = dp.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length

         try {
               var ppimg = await dp.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               var ppgc = await dp.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg&member=${mdata.participants.length}&apikey=GFL`)
            teks = `Hai ${namaewa}\n◪ Welcome in group:\n├─ ${mdata.subject}\n\n├─ Intro dulu\n├─ ❏ Nama: \n├─ ❏ Umur: \n├─ ❏ Asal kota: \n├─ ❏ Kelas: \n├─ ❏ Jenis kelamin: \n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nSemoga Betah yaa~~\n${ini_user.notify}`
            dp.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
         } else if (anu.action == 'remove') {l
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg&member=${mdata.participants.length}&apikey=GFL`)
            teks = `◪ Goodbye ${namaewa}\n◪ Leave from group:\n${mdata.subject}\n\n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nGoodBye~~`
            dp.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Selamat anda menjadi admin group!&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `◪ PROMOTE DETECT\n\n├─ Nomor: ${num.replace('@s.whatsapp.net', '')}\n├─ Pesan: Selamat anda menjadi admin group!\n└─ ❏ @${num.split('@')[0]}`
            dp.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Awokawok di unadmin, mampus:v&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `◪ DEMOTE DETECT\n\n\n├─ Nomor: ${num.replace('@s.whatsapp.net', '')}\n├─ Pesan: Awokawok di unadmin, mampus:v\n└─ ❏ @${num.split('@')[0]}`
            dp.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
	dp.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
//call auto block
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
dp.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('call dari '+ callerId)
dp.sendMessage(callerId, '「 ❗ 」Auto block system, dont call please', MessageType.text)
await sleep(4000)
await dp.blockUser(callerId, 'add') // Block user
})

var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Minggu'; break;
                case 1: hari = 'Senin'; break;
                case 2: hari = 'Selasa'; break;
                case 3: hari = 'Rabu'; break;
                case 4: hari = 'Kamis'; break;
                case 5: hari = 'Jum`at'; break;
                case 6: hari = 'Sabtu'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Januari'; break;
                case 1: bulan1 = 'Februari'; break;
                case 2: bulan1 = 'Maret'; break;
                case 3: bulan1 = 'April'; break;
                case 4: bulan1 = 'Mei'; break;
                case 5: bulan1 = 'Juni'; break;
                case 6: bulan1 = 'Juli'; break;
                case 7: bulan1 = 'Agustus'; break;
                case 8: bulan1 = 'September'; break;
                case 9: bulan1 = 'Oktober'; break;
                case 10: bulan1 = 'November'; break;
                case 11: bulan1 = 'Desember'; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Wib';

	dp.on('message-update', async (dap) => {
		try {
	    const from = dap.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[dap.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = dap.key.fromMe ? dp.user.jid : dap.key.remoteJid.endsWith('@g.us') ? dap.participant : dap.key.remoteJid
		const isRevoke = dap.key.remoteJid.endsWith('@s.whatsapp.net') ? true : dap.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = dap.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = dap.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = dap.key.remoteJid
			const isGroup = dap.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const id_deleted = dap.key.id
			const conts = dap.key.fromMe ? dp.user.jid : dp.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = dap.key.fromMe ? dp.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `0@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Text
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}`
				dp.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await dp.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`)
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Sticker
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				dp.sendMessage(from, strConversation, MessageType.text, opt4tag)
				dp.sendMessage(from, buff, MessageType.sticker, pingbro23)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await dp.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`)
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Image
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}\`\`\``
				dp.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
dp.on('message-new', async (dap) => {
	try {
		if (!dap.message) return
		if (dap.key && dap.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(dap)))
		fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!dap.message) return
			if (dap.key && dap.key.remoteJid == 'status@broadcast') return
			if (dap.key.fromMe) return
			global.prefix
			global.blocked
			const from = dap.key.remoteJid
			const content = JSON.stringify(dap.message)
			const type = Object.keys(dap.message)[0]
			const cmd = (type === 'conversation' && dap.message.conversation) ? dap.message.conversation : (type == 'imageMessage') && dap.message.imageMessage.caption ? dap.message.imageMessage.caption : (type == 'videoMessage') && dap.message.videoMessage.caption ? dap.message.videoMessage.caption : (type == 'extendedTextMessage') && dap.message.extendedTextMessage.text ? dap.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            body = (type === 'conversation' && dap.message.conversation.startsWith(prefix)) ? dap.message.conversation : (type == 'imageMessage') && dap.message.imageMessage.caption.startsWith(prefix) ? dap.message.imageMessage.caption : (type == 'videoMessage') && dap.message.videoMessage.caption.startsWith(prefix) ? dap.message.videoMessage.caption : (type == 'extendedTextMessage') && dap.message.extendedTextMessage.text.startsWith(prefix) ? dap.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? dap.message.conversation : (type === 'extendedTextMessage') ? dap.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && dap.message.conversation) ? dap.message.conversation : (type == 'imageMessage') && dap.message.imageMessage.caption ? dap.message.imageMessage.caption : (type == 'videoMessage') && dap.message.videoMessage.caption ? dap.message.videoMessage.caption : (type == 'extendedTextMessage') && dap.message.extendedTextMessage.text ? dap.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && dap.message.conversation) ? dap.message.conversation : (type == 'imageMessage') && dap.message.imageMessage.caption ? dap.message.imageMessage.caption : (type == 'videoMessage') && dap.message.videoMessage.caption ? dap.message.videoMessage.caption : (type == 'extendedTextMessage') && dap.message.extendedTextMessage.text ? dap.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && dap.message.conversation) ? dap.message.conversation : (type == 'imageMessage') && dap.message.imageMessage.caption ? dap.message.imageMessage.caption : (type == 'videoMessage') && dap.message.videoMessage.caption ? dap.message.videoMessage.caption : (type == 'extendedTextMessage') && dap.message.extendedTextMessage.text ? dap.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ['0@s.whatsapp.net']
			const isGroup = from.endsWith('@g.us')
			const botNumber = dp.user.jid
			const sender = isGroup ? dap.participant : dap.key.remoteJid
			const getLevel = getLevelingLevel(sender)
			const conts = dap.key.fromMe ? dp.user.jid : dp.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = dap.key.fromMe ? dp.user.name : conts.notify || conts.vname || conts.name || '-'
			
			//dpa
			dpa = {
			wait: `「 ❗ 」Wait Sedang Proses`,
			succes: `「 ❗ 」Sukses Ngab!!!`,
			error: `「 ❗ 」Error Ngab!!!`,
			lvlon: `「 ❗ 」Berhasil Mengaktifkan Mode Leveling Di Group Ini️`,
			lvloff: `「 ❗ 」Berhasil Menonaktifkan Mode Leveling Di Group Ini️`,
			lvlnul: `「 ❗ 」Level Mu Masih Kosong`,
			baned: `「 ❗ 」Maaf Kamu Sudah Terbanned!!`,
			lvlnoon: `「 ❗ 」Leveling Di Group Belum Diaktifkan`,
			noregis: `「 ❗ 」Daftar Dulu Ngab\nCara Daftar : ${prefix}verify`,
			rediregis: `「 ❗ 」Kamu Sudah Terdaftar Di Database ${namabot}`,
			stikga: `「 ❗ 」Yah Gagal Coba Ulangi Beberapa Saat Lagi`,
			linkga: `「 ❗ 」Link Tidak Valid`,
			groupo: `「 ❗ 」Command Ini Khusus Untuk Group`,
			ownerb: `「 ❗ 」Command Ini Khusus Untuk Owner`,
			ownerg: `「 ❗ 」Command Ini Khusus Untuk Owner Group`,
			admin: `「 ❗ 」Command Ini Khusus Untuk Admin`,
			badmin: `「 ❗ 」BOT Harus Menjadi Admin`,
			nsfwoff: `「 ❗ 」Aktifkan Mode Nsfw!`,
			bug: `「 ❗ 」Masalah Telah Dilaporkan Ke Owner ${namaowner}ツ, Laporan Palsu/Main Main Auto Block + Ban Permanent`,
			wrongf: `「 ❗ 」Format Salah/Text Kosong`,
			clears: `「 ❗ 」Clear All Succes`,
			levelup: `「 SELAMAT 」\n 📊➤ Nama : ${pushname}\n 📊➤ Nomer : ${sender.split('@')[0]}\n 📊➤ Xp : ${getLevelingXp(sender)}\n 📊➤ Limit :  +3\n 📊➤ Pangkat :  ${role}\n 📊➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}`,
			limitend: `「 ❗ 」Maaf ${pushname} Limit Kamu Sudah Habis\nHubungi kami : wa.me/${nomerlu}\n\nNote : Kami Akan Berikan Random Dari 1-10`,
			}

			//security
			const groupMetadata = isGroup ? await dp.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isEventon = isGroup ? event.includes(from) : false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			const isTagDappa = isGroup ? antgdpaa.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isImage = type === 'imageMessage'
			const sekarang = new Date().getTime();
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'Waktu Tengah Malam🌚'; break;
                case 1: waktoo = 'Waktu Tengah Malam🌚'; break;
                case 2: waktoo = 'Waktu Dini Hari🌒'; break;
                case 3: waktoo = 'Waktu Dini Hari🌓'; break;
                case 4: waktoo = 'Subuh🌔'; break;
                case 5: waktoo = 'Subuh🌔'; break;
                case 6: waktoo = 'Selamat Pagi kak🌝'; break;
                case 7: waktoo = 'Selamat Pagi kak🌝'; break;
                case 8: waktoo = 'Selamat Pagi kak🌝'; break;
                case 9: waktoo = 'Selamat Pagi kak🌝'; break;
                case 10: waktoo = 'Selamat Pagi kak🌝'; break;
                case 11: waktoo = 'Selamat Siang Kak🌞'; break;
                case 12: waktoo = 'Selamat Siang Kak🌞'; break;
                case 13: waktoo = 'Selamat Siang Kak🌞'; break;
                case 14: waktoo = 'Selamat Siang Kak🌞'; break;
                case 15: waktoo = 'Selamat Sore Kak🌝'; break;
                case 16: waktoo = 'Selamat Sore Kak🌝'; break;
                case 17: waktoo = 'Selamat Sore Kak🌖'; break;
                case 18: waktoo = 'Waktu Magrib🌘'; break;
                case 19: waktoo = 'Waktu Magrib🌚'; break;
                case 20: waktoo = 'Selamat Malam🌚'; break;
                case 21: waktoo = 'Selamat Malam🌚'; break;
                case 22: waktoo = 'Selamat Malam🌚'; break;
                case 23: waktoo = 'Tengah Malam🌚'; break;
            }
            var tampilUcapan = '' + waktoo;
            
            //buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;

			//fake reply
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } }
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg') }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}
                     
			//jam
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			const date = new Date().toLocaleDateString()

        //feature total command
		if (isCmd) cmdadd()
        
        //somtoy
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
		
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				dp.sendMessage(from, teks, text, {sendEphemeral: true, thumbnail: fs.readFileSync('./lib/logo.jpeg', 'base64'), quoted: ftoko})
			}
			const sendMess = (hehe, teks) => {
				dp.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dp.sendMessage(from, teks.trim(), extendedText, {contextInfo: {'mentionedJid': memberr}}) : dp.sendMessage(from, teks.trim(), extendedText, {quoted: dap, contextInfo: {'mentionedJid': memberr}})
			}
			const sendImage = (teks) => {
		    dp.sendMessage(from, teks, image, {quoted:dap})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			dp.sendMessage(from, pesan, tipe, {sendEphemeral: true, thumbnail: fs.readFileSync('./lib/logo.jpeg', 'base64'), quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    dp.sendMessage(from, audio, mp3, {quoted:dap})
		    }
		    const dappauhuy = (pesan, tipe, target, target2) => {
		    dp.sendMessage(from, pesan, tipe, { 'contextInfo': {mentionedJid: [sender], 'forwardingScore': 999,'isForwarded': true}, quoted: { 'key': { 'participant': `${target}`, 'remoteJid': '393470602054-1351628616@g.us', 'fromMe': false, 'id': 'B391837A58338BA8186C47E51FFDFD4A' }, 'message': { 'documentMessage': { 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg'), 'mimetype': 'application/octet-stream', 'title': `${target2}`, 'fileLength': '36', 'pageCount': 0, 'fileName': `${target2}` }}, 'messageTimestamp': '1614069378', 'status': 'PENDING'}})
		    }

		const levelRole = getLevelingLevel(sender)
          var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 1243) {
   	         role = 'Legends 忍'
   	     }
   
			var premi = 'User 🏅'
			
			if (isOwner) {
				premi = 'Owner ⚔️'
		    }
		
		     var asu = `${limitawal}`

            if (isGroup && isUser && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(dpa.levelup)
                }
            } catch (err) {
                console.error(err)
            }
        }

          const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
			if (lmt.id === sender) {
			let limitCounts = limitawal - lmt.limit
			if (limitCounts <= 0) return dp.sendMessage(from,`Limit request anda sudah habis\n`, text, {quoted: fkontak})
			dp.sendMessage(from, `
「 ❗ 」Limit Count
Sisa Limit Anda : ${limitCounts}

NOTE : Untuk Mendapatkan Limit Bisa Lewat Naik Level Di Group Atau Buy limit.`, text, { quoted : fkontak})
			found = true 
			}
		}
			if (found === false) {
			let obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
			dp.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : fkontak})
			}
		} 
		
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    dp.sendMessage(from, dpa.limitend(pushname), text, {quoted: fkontak})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     
            if (isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }

                if (messagesC.match('://chat.whatsapp.com/')){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Link Terdeteksi maaf ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }

	            if (messagesC.match('ผิดุท้่เึางืผิดุท้่เึาง')){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }
	            if (messagesC.match('৭৭৭৭৭৭৭৭')){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }
	            if (messagesC.match('๒๒๒๒๒๒๒๒')){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }
	            if (messagesC.match('๑๑๑๑๑๑๑๑')){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }
	            
	            if (messagesC.match(`@19199992616`)){
		        if (!isGroup) return
		        if (!isTagDappa) return
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Tag terdeteksi ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }

           if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm... sorry bro member minimal ${memberlimit} gw bakal keluar 5 detik lagi`)
						setTimeout( () => {
 	                           dp.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply('1')
							}, 4000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply('2')
							}, 3000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply('3')
							}, 2000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply('4')
							}, 1000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply('5')
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }

        if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		var Kick = `${sender.split('@')[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ`)
		}, 100)
		setTimeout( () => {
		dp.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
		}, 10)
		setTimeout( () => {
		reply(`_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_\nᴍᴀᴀғ ${pushname} ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ${groupMetadata.subject}`)
		}, 0)
		}
		
//eval
if (budy.startsWith('>')){
if (!isOwner) return reply(dpa.ownerb)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
//dp.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
} catch (err) {
m = String(err)
await reply(m)
}
}

		//antispam
        if (isCmd && antiSpam.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return reply('「 ❗ 」Sabar Bang 5 Detik/Command')}
        
        if (isCmd && antiSpam.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return reply('「 ❗ 」Sabar Bang 5 Detik/Command')
        }
                
			colors = ['red','white','black','blue','yellow','green']
			
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
		    if (!isGroup && !isCmd) console.log(color(time, 'white'), color('[ PRIVATE ]', 'aqua'), color(budy, 'white'), 'from', color(sender.split('@')[0], 'red'))
            if (isGroup && !isCmd) console.log(color([time], 'white'), color('[  GROUP  ]', 'aqua'), color(budy, 'white'), 'from', color(sender.split('@')[0], 'red'), 'in', color(groupName, 'white'))
            if (!isGroup && isCmd) console.log(color([time], 'white'), color('[ COMMAND ]', 'aqua'), color(budy, 'white'), 'from', color(sender.split('@')[0], 'red'))
            if (isGroup && isCmd) console.log(color([time], 'white'), color('[ COMMAND ]', 'aqua'), color(budy, 'white'), 'from', color(sender.split('@')[0], 'red'), 'in', color(groupName, 'white'))
            
            if (isCmd && !isOwner) antiSpam.addFilter(from)
            
            function addMetadata(packname, author) {
				if (!packname) packname = `@${namabot}`; if (!author) author = `${namaowner}`;	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					'sticker-pack-name': packname,
					'sticker-pack-publisher': author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = '0' + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, 'hex')	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
				})	

			}

			switch(command) {
//==========================================BATES NGAB==========================================\\
//DASAR MENU
                case 'admin':
                case 'owner':
                case 'creator':
                case 'developer':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                dp.sendMessage(from, {displayname: `${namaowner}ツ`, vcard: vcard}, MessageType.contact, {quoted: freply})
                dp.sendMessage(from, 'Tuh nomer owner ku😎 jangan dispam yak',MessageType.text, {quoted: freply})
                break
                case 'limit':
                checkLimit(sender)
		        break
				case 'test':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
			    dp.sendMessage(from, 'Active',MessageType.text, {quoted: fkontak})
				break
				case 'speed':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                const processsTime = (timestamp, now) => {
                return moment.duration(now - moment(timestamp * 1000)).asSeconds()
                }
                reply(`Speed : ${processsTime(dap.messageTimestamp.low, moment())} _second_`)
                break
		        case 'ping':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				dp.sendMessage(from, 'Active',MessageType.text, {quoted: fkontak})
				break
				case 'engpal':
if (!isOwner) return
try {
var konsol = args.join(' ')
function Res(sul) {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sat)
}
return reply(bang)
}
reply(util.format(eval(`(async () => { ${konsol} })()`)))
} catch(e) {
emror = String(e)
reply(`${emror}`)
}
				break
				case 'donasi':
		        case 'donate':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				dp.sendMessage(from, donasi(), text, {quoted: fkontak})
				break
				case 'infoowner':
		        case 'infodeveloper':
		        case 'infopengembang':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				dp.sendMessage(from, infown(), text, {quoted: fkontak})
				break
				case 'bahasa':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				dp.sendMessage(from, bahasa(), text, {quoted: fkontak})
			    await limitAdd(sender)
				break
				case 'cheatgame':
			    dp.sendMessage(from, cheat(), text, {quoted: fkontak})
			    break
		        case 'kodenegara':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				dp.sendMessage(from, negara(), text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'report':
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`Apa yang mau direport ke owner?`)
				const pesan = body.slice(8)
				var nomor = dap.participant
				const teks1 = `[REPORT]\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${pesan}`
				var options = {
				text: teks1,
				contextInfo: {mentionedJid: [nomor]},
				}
				dp.sendMessage(`${nomerlu}@s.whatsapp.net`, options, text, {quoted: fkontak})
				reply('[❗] Masalah telah dilaporkan ke owner Bot, Laporan palsu/main - main akan ban permanent!!')
				break
				case 'saran':
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`Apa yang mau disarankan ke owner?`)
				const psn = body.slice(7)
				var nmr = dap.participant
				const tks1 = `[SARAN]\nNomor : @${nmr.split('@s.whatsapp.net')[0]}\nPesan : ${psn}`
				var options = {
				text: tks1,
				contextInfo: {mentionedJid: [nmr]},
				}
				dp.sendMessage(`${nomerlu}@s.whatsapp.net`, options, text, {quoted: fkontak})
				reply(`[❗] Saran telah dilaporkan ke owner Bot, Terimakasih ${pushname}`)
				break
				case 'verify':
				case 'daftar':
				if (isUser) return reply(dpa.rediregis)
				const seriTod = bikinSerial(20)
				try {
				ppimg = await dp.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://dappa-result.herokuapp.com/bgverify.jpeg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				user.push(sender)
				fs.writeFileSync('./database/user.json', JSON.stringify(user))
				jadiUser(sender, seriTod)
				const kentod = 
`
╭─「 PENDAFTARAN USER 」
│Pendaftaran Berhasil Dengan
│SN: ${seriTod}
│Pada ${date} ${time}
│Nama: ${pushname}
│Nomor: wa.me/${sender.split('@')[0]}
│Untuk Menggunakan Bot
│Silahkan Kirim ${prefix}zakky
│Total Pengguna: ${user.length} Orang
╰─────────────────────────
`
                let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${user.length}&seri=${seriTod}&pp=${ppimg}&bg=${imglu}`)
                dp.sendMessage(from, buff, MessageType.image, {quoted: freply, caption: kentod, contextInfo: {'mentionedJid': [sender]}})
                break
		        case 'del':
		        case 'd':
		        case 'delete':
                if (!isOwner) return reply(dpa.ownerb)
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				dp.deleteMessage(from, { id: dap.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
				case 'info':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				me = dp.user
				uptime = process.uptime()
				teks = `INFO OWNER\nOwner bot : ${namaowner}ツ\nNo Owner : ${nomerlu}\n━━━━━━━━━━━━━━━━━━━━\nINFO BOT\nNama bot : ${namabot}\nNomor bot : @${me.jid.split('@')[0]}\nPrefix : ${prefix}\nRam ${RAM}\nTotal block contact : ${blocked.length}\nThe bot is active on : ${kyun(uptime)}\nKetik : ${prefix}report _Untuk melaporkan admin bot melalui bot_\nKetik : ${prefix}owner untuk menghubungi admin bot kami.`
				buffer = await getBuffer(me.imgUrl)
				dp.sendMessage(from, buffer, image, {quoted: freply, caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				break
				case 'snk':
		        case 'peraturan':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
		        dp.sendMessage(from, snk(), text, {quoted: fkontak})
		        break
		        case 'lolhumcek':
                //[❗] case by Bloodsword
                try {
                dapuhy = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${body.slice(9)}`)
                i = dapuhy.result
                vikey = `Apikey ${body.slice(11)} valid!\nUsername : ${i.username}\nRequests : ${i.requests}\nToday : ${i.today}\nAccount Type : ${i.account_type}\nExpired : ${i.expired}`
                dp.sendMessage(from, vikey, text, {quoted: fkontak})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(`「 ❗ 」Apikey lolhuman ${body.slice(11)} tidak valid!`)
				}
                break
                case 'leyscek':
                //[❗] case by Bloodsword
                try {
                dapuhy = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekapikey?apikey=${body.slice(9)}`)
                i = dapuhy.result
                vikey = `Apikey ${body.slice(9)} valid!\nResponse : ${i.response}\nApikey : ${i.apikey}\nHit : ${i.hit}`
                dp.sendMessage(from, vikey, text, {quoted: fkontak})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(`「 ❗ 」Apikey leyscoders ${body.slice(9)} tidak valid!`)
				}
                break
                case 'adderror':
                const huaaa = body.slice(10)
                bad.push(huaaa)
                fs.writeFileSync('./database/error.json', JSON.stringify(bad))
                reply('error telah ditambahkan')
                break
                
//MENU
                
                
		        case 'zakky':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
               
               
                dapuhy = `
${tampilUcapan}

⦿ Jam : ${tampilJam}
⦿ Hari : ${tampilHari}

√ instagram
https://instagram.com/demo_ngki

√ donasi
pulsa : 0881036690566
dana  : 0881036690566
ovo   : 0881036690566

bot ini menggunakan sc
https://github.com/demongki/bot-zakky


</ISLAM MENU>>

• ${prefix}listquran
• ${prefix}quran
• ${prefix}ayat
• ${prefix}ayat2
• ${prefix}quranaudio
• ${prefix}jadwalsholat
• ${prefix}niatsholat
• ${prefix}listkota
• ${prefix}asmaulhusna
• ${prefix}kisahnabi
• ${prefix}doaharian

</ZAKKY MAKER MENU>

• ${prefix}matrix <heker>
• ${prefix}ktpmaker
• ${prefix}pornhub <zakky|zakky>>
• ${prefix}neon <zakky>
• ${prefix}blacpink <zakky>
• ${prefix}horor <zakky>
• ${prefix}joker <zakky>
• ${prefix}devil <zakky>
• ${prefix}grafity <zakky>
• ${prefix}asap <zakky>
• ${prefix}coffe <zakky>
• ${prefix}bearlogo <zakky>
• ${prefix}halloween <zakky>
• ${prefix}skeleton <zakky>
• ${prefix}flaming <zakky
• ${prefix}harrypotter <zakky>

</CASE ZAKKY RANDOM IMAGE>

• ${prefix}art
• ${prefix}bts
• ${prefix}exo
• ${prefix}elf
• ${prefix}loli
• ${prefix}neko
• ${prefix}waifu
• ${prefix}shota
• ${prefix}husbu
• ${prefix}sagiri
• ${prefix}shinobu
• ${prefix}megumin
• ${prefix}wallnime

</CASE ZAKKY QUOTES>

• ${prefix}bucin
• ${prefix}quotes
• ${prefix}quotesanime
• ${prefix}quotesdilan
• ${prefix}quotesimage

</CASE ANIME SEARCH>

• ${prefix}character
• ${prefix}manga
• ${prefix}anime
• ${prefix}kusonime
• ${prefix}kusonimesearch
• ${prefix}otakudesu
• ${prefix}otakudesusearch

</CASE ZAKKY 18+>

• ${prefix}nhentaipdf
• ${prefix}nhentaisearch
• ${prefix}xnxx <link>
• ${prefix}xnxxsearch <jepang>

</CASE BUATAN ZAKKY>

• ${prefix}nulis <zakky>
• ${prefix}nulis2 <zakky>
• ${prefix}nulis3 <zakky>
• ${prefix}nuliskanan <zakky>
• ${prefix}nuliskiri <zakky>
• ${prefix}foliokanan <zakky>
• ${prefix}foliokanan2 <zakky>
• ${prefix}foliokiri <zakky>
• ${prefix}foliokiri2 <zakky>
• ${prefix}lirik <friends>
• ${prefix}wattpadsearch <dilan>
• ${prefix}heroml <lesley>
• ${prefix}gimage <ewkharis>
• ${prefix}gimage2 <notnot>

</ZAKKY SEARCH>

• ${prefix}lk21 <tranfomer>
• ${prefix}playstore <ml>
• ${prefix}shopee <hp samsung>
• ${prefix}google <github demongki>

</ZAKKY STICKER>

• ${prefix}ttp
• ${prefix}ttp2
• ${prefix}ttp3
• ${prefix}ttp4
• ${prefix}attp
• ${prefix}triggerex
• ${prefix}wasted
• ${prefix}smoji
• ${prefix}smoji2

</DOWNLOAD MENU>

• ${prefix}pinterest
• ${prefix}pinterest2
• ${prefix}pinterestdl
• ${prefix}ytmp3 <link>
• ${prefix}ytmp32 <link>
• ${prefix}tiktok <eror>
• ${prefix}tiktokaudio <link>
• ${prefix}igdl <link>
• ${prefix}igdl2 <link>
• ${prefix}ytmp4 <link>
• ${prefix}ytsearch <link>
• ${prefix}storyanime

</STALKER MENU>

• ${prefix}ytstalk
• ${prefix}pptiktok
• ${prefix}igstalk
• ${prefix}githubstalk
• ${prefix}tiktokstalk
• ${prefix}mlstalk
• ${prefix}ffstalk

</INFORMATION MENU>

• ${prefix}covidglobal
• ${prefix}covidindo
• ${prefix}jamindo
• ${prefix}jadwaltv
• ${prefix}infocuaca
• ${prefix}infotsunami
• ${prefix}infogempa

</ASUPAN MENU>

• ${prefix}chika
• ${prefix}asupan
• ${prefix}asupansantuy
• ${prefix}asupanbocil
• ${prefix}asupanukhty
• ${prefix}asupanrikagusriani
• ${prefix}asupanghea

</FUN MENU>

• ${prefix}tts
• ${prefix}tts2
• ${prefix}slot
• ${prefix}dadu
• ${prefix}caklontong
• ${prefix}family100
• ${prefix}translate
• ${prefix}tebakkata
• ${prefix}tebakgambar
• ${prefix}tebakgambar2
• ${prefix}artinama
• ${prefix}truth
• ${prefix}dare
• ${prefix}bisakah
• ${prefix}kapankah
• ${prefix}apakah
• ${prefix}bagaimanakah
• ${prefix}rate
• ${prefix}sangecek
• ${prefix}gaycek
• ${prefix}lesbicek
• ${prefix}gantengcek
• ${prefix}cantikcek
• ${prefix}watak
• ${prefix}hobby
• ${prefix}jadian
• ${prefix}ngewe
• ${prefix}terganteng
• ${prefix}tercantik

</MEDIA MENU>

• ${prefix}spamsms
• ${prefix}nickff
• ${prefix}ceritahoror
• ${prefix}ceritapendek
• ${prefix}quotes
• ${prefix}cersex
• ${prefix}quotesdilan
• ${prefix}faktaunik
• ${prefix}katakatabijak
• ${prefix}randompantun
• ${prefix}randombucin
• ${prefix}katakatabucin
• ${prefix}memeindo
• ${prefix}darkjoke
• ${prefix}estetik
• ${prefix}ppcouple
• ${prefix}randomnama

</NSFW MENU>

• ${prefix}lewdk
• ${prefix}erok
• ${prefix}tits
• ${prefix}keta
• ${prefix}solo
• ${prefix}eron
• ${prefix}lewd
• ${prefix}trap
• ${prefix}yuri
• ${prefix}ero
• ${prefix}holoero
• ${prefix}erofeet
• ${prefix}blowjob
• ${prefix}cum_jpg
• ${prefix}eroyuri
• ${prefix}hentai
• ${prefix}femdom
• ${prefix}nsfw_avatar
• ${prefix}kemonomimi
• ${prefix}pussy_jpg
• ${prefix}lewdkemo
• ${prefix}hololewd
• ${prefix}futanari
• ${prefix}hololewd
• ${prefix}hentai4everyone
• ${prefix}animebellybutton
• ${prefix}biganimetiddies
• ${prefix}lewdanimegirls
• ${prefix}hentaifemdom
• ${prefix}animearmpits
• ${prefix}hentaiparadise
• ${prefix}animethighss
• ${prefix}animebooty
• ${prefix}animefeets
• ${prefix}sideoppai
• ${prefix}hololewd
• ${prefix}ahegao
• ${prefix}ecchi
• ${prefix}yaoi
• ${prefix}trap
• ${prefix}chiisaihentai
• ${prefix}loli
• ${prefix}waifu
• ${prefix}neko
• ${prefix}hentai2
• ${prefix}feetg
• ${prefix}solog
• ${prefix}kuni
• ${prefix}anal
• ${prefix}cum
• ${prefix}bj
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}cuddle
• ${prefix}pussy
• ${prefix}random_hentai_gif
• ${prefix}nsfw_neko_gif
• ${prefix}blowjobgif


</MATEMATIKA MENU>

• ${prefix}perkalian
• ${prefix}rumuspersegipanjang
• ${prefix}rumuspersegi
• ${prefix}kuadrat

</GROUP MENU>

• ${prefix}nobadword
• ${prefix}antilink
• ${prefix}antivirtex
• ${prefix}simih
• ${prefix}group
• ${prefix}setname
• ${prefix}setdesc
• ${prefix}promote
• ${prefix}demote
• ${prefix}kickall (rawan banned)
• ${prefix}add
• ${prefix}kick
• ${prefix}linkgc
• ${prefix}hidetag
• ${prefix}mining
• ${prefix}level

</OWNER MENU>

• ${prefix}antidelete
• ${prefix}nsfw
• ${prefix}leveling
• ${prefix}welcome
• ${prefix}event
• ${prefix}clone
• ${prefix}delete
• ${prefix}bc
• ${prefix}bcgc
• ${prefix}block
• ${prefix}unblock
• ${prefix}addvn
• ${prefix}getvn
• ${prefix}setthumb
• ${prefix}listvn
• ${prefix}leave
• ${prefix}tagall
• ${prefix}clearall
• ${prefix}setprefix
• ${prefix}resetlimit
• ${prefix}setlimit
• ${prefix}setmemlimit
• ${prefix}addbadword
• ${prefix}delbadword
• ${prefix}setppbot
• ${prefix}ban
• ${prefix}unban

</OTHER MENU>

• ${prefix}sticker
• ${prefix}colong
• ${prefix}takestick
• ${prefix}stickerwm
• ${prefix}ocr
• ${prefix}kontag
• ${prefix}spatrick
• ${prefix}viewsource
• ${prefix}subdo
• ${prefix}nmap
• ${prefix}fak
• ${prefix}hekweb
• ${prefix}toimg
• ${prefix}spamchat (gunakan 62xx)




*BloodSword BOT*
• Prefix : 「 MULTI PREFIX 」
• Base : BloodSword
• Creator : Zakky
• Recode : ${namaowner}
• Runtime : ${kyun(process.uptime())}
• Total Req : ${pepolu}
`
                await dappauhuy(dapuhy, MessageType.text, tescuk, `${ucapanFakereply}`)
                const pendek = fs.readFileSync('./mp3/bot.mp3');
                dp.sendMessage(from, pendek, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
                break
//==========================================BATES NGAB==========================================\\
//CASE BUATAN ZAKKY


case 'chika':
daptod = await getBuffer(`https://pencarikode.xyz/api/chika?apikey=${PencariKode}`)
dp.sendMessage(from, daptod, video, {quoted: freply})
break

///////////////////////////////////////////////

case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await dp.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break

case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break

case 'character':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await dp.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await dp.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break
                case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await dp.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break
                
                case 'kusonime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${LolKey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await dp.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    break
                case 'kusonimesearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await dp.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    break
                case 'otakudesu':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${LolKey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break


case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolKey}&text=${ini_txt}`)
                    await dp.sendMessage(from, ini_buffer, sticker, { quoted: freply })
                    break
                case 'triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${LolKey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        dp.sendMessage(from, buff, sticker, { quoted: freply }).then(() => {
                            fs.unlinkSync(rano)
                        })
                    })
                    break
                case 'wasted':
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${LolKey}&img=${ini_url}`)
                    await dp.sendMessage(from, ini_buffer, image, { quoted: freply })
                    break
                case 'smoji':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${LolKey}`)
                    await dp.sendMessage(from, ini_buffer, sticker, { quoted: freply })
                    break
                case 'smoji2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${LolKey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${LolKey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await dp.sendMessage(from, ini_buffer, sticker, { quoted: freply })
                    break


case 'ytmp4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await lolhuman.sendMessage(from, ini_buffer, image, { quoted: lol, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await dp.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: freply })
                    break
case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'gimage':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${LolKey}&query=${query}`)
                    await dp.sendMessage(from, ini_buffer, image, { quoted: freply })
                    break
                case 'gimage2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await dp.sendMessage(from, ini_buffer, image)
                    }
                    break


case 'xnxxsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${LolKey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await dp.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break

case 'igdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LolKey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await dp.sendMessage(from, ini_buffer, ini_type, { quoted: freply })
                    break
                case 'igdl2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${LolKey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await dp.sendMessage(from, ini_buffer, ini_type, { quoted: freply })
                    }
                    break



                    
                    case 'foliokanan2':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${dpuhy}&apikey=${Hardianto}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break
                    
                    case 'foliokiri':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${dpuhy}&apikey=${Hardianto}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break


case 'matrix':
try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://pencarikode.xyz/api/textpro/matrix?text=${dpuhy}&apikey=${PencariKode}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break


case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Akira|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${LolKey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    dp.sendMessage(from, ini_anu, image, {quoted: freply})
                    break

case 'quotes':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${LolKey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolKey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${LolKey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
                    await dp.sendMessage(from, get_result, image, { quotes: freply })
                    break


case 'nhentaisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'nhentaipdf':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await dp.sendMessage(from, ini_buffer, document, { quoted: freply, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break


case 'pinterest':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${LolKey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await dp.sendMessage(from, ini_buffer, image, { quoted: freply })
                    break
                case 'pinterest2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await dp.sendMessage(from, ini_buffer, image)
                    }
                    break
case 'pinterestdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${LolKey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await dp.sendMessage(from, ini_buffer, image, { quoted: freply })
                    break


case 'heroml':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    await dp.sendMessage(from, ini_icon, image, { quoted: freply, caption: ini_txt })
                    break

case 'tiktok':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${LolKey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await dp.sendMessage(from, ini_buffer, video, { quoted: freply })
                    break

case 'tiktokaudio':
		    if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 	
		    ini_url = args[0]
       		    reply(dpa.wait)
		    ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.thumbnail)
                    await alpha.sendMessage(from, ini_img , image, { quoted: freply, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    dp.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: freply })
            		break


case 'foliokiri':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokiri?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'foliokanan':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokanan?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break


case 'asupan':
				case 'asupansantuy':
				case 'asupanbocil':
				case 'asupanukhty':
				case 'asupanrikagusriani':
				case 'asupanghea':
				if (isBanned) return reply(dpa.baned)
				daptod = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/${command}?apikey=${DapKey}`)
				dp.sendMessage(from, daptod, video, {quoted: freply})
				break


case 'nuliskiri':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskiri?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break


case 'nuliskanan':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskanan?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'storyanime':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
                reply(dpa.wait)
                wibutolol = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${DapKey}`)
                dp.sendMessage(from, wibutolol, video, { quoted: freply })
                break
                case 'wait':
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.wait)
				if (isLimit(sender)) return reply(dpa.limitend)
				if ((isMedia && !dap.message.videoMessage || isQuotedImage) && args.length == 0) {
				reply(dpa.wait)
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
				media = await dp.downloadMediaMessage(encmedia)
				await wait(media).then(res => {
				dp.sendMessage(from, res.video, video, {quoted: freply, caption: res.teks.trim()})
				}).catch(err => {
				reply(err)
				})
				} else {
				reply(dpa.ocron)
				}
				await limitAdd(sender)
			    break

case 'nulis':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${LolKey}&text=${dpuhy}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break



case 'ytmp32':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await dp.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await dp.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: freply })
                    break



                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`).then((gambar) => {
                        dp.sendMessage(from, gambar, image, { quoted: freply })
                    })
                    break

case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
                    reply(get_result.result)
                    break



case 'wattpadsearch':
if (!isUser) return reply(dpa.noregis)
if (isBanned) return reply(dpa.baned)
if (isLimit(sender)) return reply(dpa.limitend)
if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break


case 'lirik':
if (!isUser) return reply(dpa.noregis)
if (isBanned) return reply(dpa.baned)
if (isLimit(sender)) return reply(dpa.limitend)
if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${LolKey}&query=${query}`)
                    reply(get_result.result)
                    break


case 'nulis2':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nulis?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'nulis3':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpa.wait)
                dpuhy = args.join(' ')
                dapuhy = await getBuffer(`https://api.zeks.xyz/api/nulis?apikey=${ZeksKey}&text=${dpuhy}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break


case 'ytmp3':
if (!isUser) return reply(dpa.noregis)
if (isBanned) return reply(dpa.baned)
if (isLimit(sender)) return reply(dpa.limitend)
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await dp.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await dp.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: freply })
                    break


//MAKER MENU

case 'harrypotter':
                try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photooxy/harrypotter?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'flaming':
                try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photooxy/flaming?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'skeleton':
                try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/skeleton?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'halloween':
                try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/halloween?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break


case 'bearlogo':
                try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/bearlogo?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'asap':
try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photooxy/smoke?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'grafity':
try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/wonderfulgraffiti?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'devil':
try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/neondevil?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'joker':
try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/logojoker?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break



case 'horor':
try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/horror?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

case 'neon':
try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/neon2?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break

                case 'blackpink':
                
                
                try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/blackpink?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break
                case 'pornhub':
                
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/pornhub?text1=${dap1}&text2=${dap2}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break
                
                case 'coffe':
                try {
                if (!isUser) return reply(dpa.noregis)
                
                if (isBanned) return reply(dpa.baned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
                reply(dpa.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photooxy/coffecup?text=${dpuhy}&apikey=${DapKey}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(dpa.error)
				}
                break
                
//==========================================BATES NGAB==========================================\\

//==========================================BATES NGAB==========================================\\

//==========================================BATES NGAB==========================================\\
//ISLAM MENU
                case 'listquran':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				ha = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${LolKey}`)
				lal = (ha.result)
				dp.sendMessage(from, lal, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'quran':
				//[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (args.length < 1) return reply(`surah keberapa bang?\ncontoh : ${prefix + command} 6`)
				reply(dpa.wait)
				surah = args.join(' ')
				qur = await fetchJson(`https://api.lolhuman.xyz/api/quran/${surah}?apikey=${LolKey}`)
				an = qur.result
				suara = await getBuffer(an.audio)
				halal = `Nomor : ${an.nomor}\nAsma : ${an.asma}\nSurah : ${an.surah}\nJumlah Ayat : ${an.jumlah_ayat}\nDiturunkan Di : ${an.type}\nKeterangan : ${an.keterangan}`
				teks = '=================\n'
				for (let i of qur.result.ayat) {
				teks += `Ayat : ${i.ayat}\nArab : ${i.arab}\nIndonesia : ${i.indonesia}\nLatin : ${i.latin}\n=================\n`
				}
                dp.sendMessage(from, halal, text, {quoted: fkontak})
                reply(teks.trim())
                dp.sendMessage(from, suara, audio, {mimetype: 'audio/mp3', filename: `${an.surah}.mp3`, quoted: freply})
                await limitAdd(sender)
                break
                case 'ayat':
				//[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (args.length < 1) return reply(`ayat keberapa bang?\ncontoh : ${prefix + command} 4/6`)
				reply(dpa.wait)
				ct = args.join(' ')
				dap1 = ct.split('/')[0]
                dap2 = ct.split('/')[1]
			biss = await fetchJson(`https://api.lolhuman.xyz/api/quran/${dap1}/${dap2}?apikey=${LolKey}`)
				millah = biss.result
				halal = `Nomor : ${millah.nomor}\nAsma : ${millah.asma}\nSurah : ${millah.surah}\nJumlah Ayat : ${millah.jumlah_ayat}\nDiturunkan Di : ${millah.type}\nKeterangan : ${millah.keterangan}`
				teks = '=================\n'
				for (let i of biss.result.ayat) {
				teks += `Ayat : ${i.ayat}\nArab : ${i.arab}\nIndonesia : ${i.indonesia}\nLatin : ${i.latin}\n=================\n`
				suara = await getBuffer(i.audio)
				dp.sendMessage(from, suara, audio, {mimetype: 'audio/mp3', filename: `${millah.surah}.mp3`, quoted: freply})
				}
                dp.sendMessage(from, halal, text, {quoted: fkontak})
                reply(teks.trim())
                await limitAdd(sender)
                break
                case 'ayat2':
				//[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (args.length < 1) return reply(`ayat keberapa bang?\ncontoh : ${prefix + command} 4/1-6`)
				reply(dpa.wait)
				ct = args.join(' ')
				dap1 = ct.split('/')[0]
                dap2 = ct.split('/')[1]
				biss = await fetchJson(`https://api.lolhuman.xyz/api/quran/${dap1}/${dap2}?apikey=${LolKey}`)
				millah = biss.result
				halal = `Nomor : ${millah.nomor}\nAsma : ${millah.asma}\nSurah : ${millah.surah}\nJumlah Ayat : ${millah.jumlah_ayat}\nDiturunkan Di : ${millah.type}\nKeterangan : ${millah.keterangan}`
				teks = '=================\n'
				for (let i of biss.result.ayat) {
				teks += `Ayat : ${i.ayat}\nArab : ${i.arab}\nIndonesia : ${i.indonesia}\nLatin : ${i.latin}\n=================\n`
				suara = await getBuffer(i.audio)
				dp.sendMessage(from, suara, audio, {mimetype: 'audio/mp3', filename: `${millah.surah}.mp3`, quoted: freply})
				}
                dp.sendMessage(from, halal, text, {quoted: fkontak})
                reply(teks.trim())
                await limitAdd(sender)
                break
                case 'quranaudio':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (args.length < 1) return reply(`surah keberapa bang?\ncontoh : ${prefix + command} 6`)
                reply('[❗] Sabar Lagi Ngirim Audionya')
                surah = args.join(' ')
                halal = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${LolKey}`)
                dp.sendMessage(from, halal, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: freply})
                await limitAdd(sender)
                break
                case 'jadwalsholat':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (args.length < 1) return reply(`daerah mana bang?\ncontoh : ${prefix + command} Tulungagung`)
				reply(dpa.wait)
                daerah = args.join(' ')
                jad = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LolKey}`)
                wal = jad.result
                sholat = `Wilayah : ${wal.wilayah}\nTanggal : ${wal.tanggal}\nSahur : ${wal.sahur}\nImsak : ${wal.imsak}\nSubuh : ${wal.subuh}\nTerbit : ${wal.terbit}\nDhuha : ${wal.dhuha}\nDzuhur : ${wal.dzuhur}\nAshar : ${wal.ashar}\nMaghrib : ${wal.maghrib}\nIsya : ${wal.isya}`
                dp.sendMessage(from, sholat, text, {quoted: fkontak})
                await limitAdd(sender)
                break
                case 'niatsholat':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (args.length < 1) return reply(`sholat apa bang?\ncontoh : ${prefix + command} subuh`)
				reply(dpa.wait)
                sholatapa = args.join(' ')
                ni = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${sholatapa}?apikey=${LolKey}`)
                at = ni.result
                sholat = `Nama : ${at.name}\nArab : ${at.ar}\nLatin : ${at.latin}\nIndonesia : ${at.id}`
                dp.sendMessage(from, sholat, text, {quoted: fkontak})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('available enpoint is subuh, dzuhur, ashar, maghrib, isya')
				}
                break
                case 'listkota':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
                kota = await fetchJson(`https://api.lolhuman.xyz/api/sholat/kota?apikey=${LolKey}`)
                teks = '=================\n'
				for (let i of kota.result) {
				teks += `Id : ${i.id}\nLokasi : ${i.lokasi}\n=================\n`
				}
                reply(teks.trim())
                break
                case 'asmaulhusna':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
                asma = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${LolKey}`)
                ulhusna = asma.result
                halal = `Nomer : ${ulhusna.index}\nLatin : ${ulhusna.latin}\nArab : ${ulhusna.ar}\nIndonesia : ${ulhusna.id}\nEnglish : ${ulhusna.en}`
                dp.sendMessage(from, halal, text, {quoted: fkontak})
                await limitAdd(sender)
                break
                case 'kisahnabi':
                //[❗] case by Bloodsword
                try {
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (args.length < 1) return reply(`nabi apa bang?\ncontoh : ${prefix + command} Muhammad`)
				reply(dpa.wait)
                nabi = args.join(' ')
                ki = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${nabi}?apikey=${LolKey}`)
                sah = ki.result
                paranabi = `Nama : ${sah.name}\nTahun Kelahiran : ${sah.thn_kelahiran}\nUmur : ${sah.age}\nLahir Di : ${sah.place}\nCerita : ${sah.story}`
                dp.sendMessage(from, paranabi, text, {quoted: fkontak})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('nabi tidak ditemukan!')
				}
                break
                case 'doaharian':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.wait)
                if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/islam/doaharian`)
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\nArabic : ${i.arabic}\nLatin : ${i.latin}\nTranslation : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
//==========================================BATES NGAB==========================================\\

//==========================================BATES NGAB==========================================\\
			                                  
//==========================================BATES NGAB==========================================\\
//STALKER MENU
				case 'igstalk':
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply('[❗] Sabar lagi stalking IG nya')
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=${LolKey}`)
				get_result = get_result.result
				txt = `Link : https://www.instagram.com/${get_result.username}\n`
				txt += `Full : ${get_result.fullname}\n`
				txt += `Post : ${get_result.posts}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.photo_profile)
				dp.sendMessage(from, buffer, image, {quoted: freply, caption: txt})
				await limitAdd(sender)
				break
				case 'pptiktok':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				dptod = args.join(' ')
				kntl = await getBuffer(`https://api.lolhuman.xyz/api/pptiktok/${dptod}?apikey=${LolKey}`)
				dp.sendMessage(from, kntl, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'githubstalk':
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply('[❗] Sabar lagi stalking GitHub nya')
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${LolKey}`)
				get_result = get_result.result
				txt = `Full : ${get_result.name}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Publick : ${get_result.public_repos}\n`
				txt += `Public Gits : ${get_result.public_gists}\n`
				txt += `User : ${get_result.user}\n`
				txt += `Compi : ${get_result.company}\n`
				txt += `Lokasi : ${get_result.location}\n`
				txt += `Email : ${get_result.email}\n`
				txt += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.avatar)
				dp.sendMessage(from, buffer, image, {quoted: freply, caption: txt})
				await limitAdd(sender)
				break
				case 'tiktokstalk':
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply('[❗] Sabar lagi stalking TikTok nya')
				username = args[0]
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${LolKey}`)
				get_result = get_result.result
				txt = `Link : ${get_result.username}\n`
				txt += `Bio : ${get_result.bio}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.followings}\n`
				txt += `Likes : ${get_result.likes}\n`
				txt += `Vidio : ${get_result.video}\n`
				buffer = await getBuffer(get_result.user_picture)
				dp.sendMessage(from, buffer, image, {quoted: freply, caption: txt})
				await limitAdd(sender)
				break
				case 'ytstalk':
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply('[❗] Sabar lagi stalking YT nya')
				ytk = args.join(' ')
				anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${LolKey}&query=${ytk}`)
				cari = '•••••••••••••••••\n'
				for (let search of anu.result) {
				cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
				}
				reply(cari.trim())
				await limitAdd(sender)
				break
				case 'mlstalk':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply('[❗] Sabar lagi stalking Mobile Legend nya')
				ha = args.join(' ')
				id = ha.split('|')[0]
                server = ha.split('|')[1]
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${id}/${server}?apikey=${LolKey}`)
				txt = `Nickname : ${get_result.result}`
				dp.sendMessage(from, txt, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'ffstalk':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply('[❗] Sabar lagi stalking Free Fire nya')
				id = args.join(' ')
				ngntl = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${id}?apikey=${LolKey}`)
				hsil = `Nickname : ${ngntl.result}`
				dp.sendMessage(from, hsil, text, {quoted: fkontak})
				await limitAdd(sender)
				break
//==========================================BATES NGAB==========================================\\






//==========================================BATES NGAB==========================================\\
//NSFW MENU
                case 'lewdk':
                case 'erok':
                case 'tits':
                case 'keta':
                case 'solo':
                case 'eron':
                case 'lewd':
                case 'trap':
                case 'yuri':
                case 'ero':
                case 'holoero':
                case 'erofeet':
                case 'blowjob':
                case 'cum_jpg':
                case 'eroyuri':
                case 'hentai':
                case 'femdom':
                case 'nsfw_avatar':
                case 'kemonomimi':
                case 'pussy_jpg':
                case 'lewdkemo':
                case 'hololewd':
                case 'futanari':
                case 'hololewd':
                //[❗] case by Bloodsword
				if (!isNsfw) return reply(dpa.nsfwoff)
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${LolKey}`)
				dp.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'hentai4everyone':
				case 'animebellybutton':
				case 'biganimetiddies':
				case 'lewdanimegirls':
				case 'hentaifemdom':
				case 'animearmpits':
				case 'hentaiparadise':
				case 'animethighss':
				case 'animebooty':
				case 'animefeets':
				case 'sideoppai':
				case 'hololewd':
				case 'ahegao':
				case 'ecchi':
				case 'yaoi':
				case 'trap':
				case 'chiisaihentai':
				case 'loli':
				case 'waifu':
				case 'neko':
                //[❗] case by Bloodsword
				if (!isNsfw) return reply(dpa.nsfwoff)
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolKey}`)
				dp.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'hentai2':
                //[❗] case by Bloodsword
				if (!isNsfw) return reply(dpa.nsfwoff)
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${LolKey}`)
				dp.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'feetg':
				case 'solog':
				case 'kuni':
				case 'anal':
				case 'cum':
				case 'bj':
				case 'classic':
				case 'erokemo':
				case 'cuddle':
				case 'pussy':
				case 'random_hentai_gif':
				case 'nsfw_neko_gif':
                //[❗] case by Bloodsword
				if (!isNsfw) return reply(dpa.nsfwoff)
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
				dapuhyy = `https://api.lolhuman.xyz/api/random2/${command}?apikey=${LolKey}`
				exec(`wget ${dapuhyy} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                fs.unlinkSync(ranp)
                ambil = fs.readFileSync(rano)
                dp.sendMessage(from, ambil, sticker, {quoted: freply})
                fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
				case 'blowjobgif':
                //[❗] case by Bloodsword
                if (!isNsfw) return reply(dpa.nsfwoff)
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                dapuhyy = `https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${LolKey}`
                exec(`wget ${dapuhyy} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                fs.unlinkSync(ranp)
                ambil = fs.readFileSync(rano)
                dp.sendMessage(from, ambil, sticker, {quoted: freply})
                fs.unlinkSync(rano)
                }) 
                await limitAdd(sender)
                break
//==========================================BATES NGAB==========================================\\
//MATEMATIKA MENU
                case 'perkalian':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.wait)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (args.length < 1) return reply(`angka mana ngab?\ncontoh ${prefix}perkalian 5*8`)
				reply(dpa.wait) 
			    var gh = body.slice(10)
			    var angka1 = gh.split('*')[0]
			    var angka2 = gh.split('*')[1]
			    kali = await fetchJson(`https://leyscoders-api.herokuapp.com/api/perkalian?angka1=${angka1}&angka2=${angka2}&apikey=${LeysKey}`) 
			    hasil = `「 PERKALIAN 」\n\nHasil dari perkalian ${angka1}x${angka2} :\n${kali.result}`
                dp.sendMessage(from, hasil, text, {quoted: fkontak}) 
                await limitAdd(sender)
                break
			    case 'rumuspersegipanjang':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.wait)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (args.length < 1) return reply(`angka mana ngab?\ncontoh ${prefix}rumuspersegipanjang 7|5`)
				reply(dpa.wait) 
			    var gh = body.slice(20)
			    var panjang = gh.split('|')[0]
			    var lebar = gh.split('|')[1]
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppanjang?pjg=${panjang}&lebar=${lebar}&apikey=${LeysKey}`) 
			    dapp = `「 RUMUS PERSEGI PANJANG 」\n\nRumus keliling :\n${mtk.rumus_keliling}\n\nHasil keliling : ${mtk.hasil_keliling}\n↕↕↕↕↕↕\nRumus luas :\n${mtk.rumus_luas}\n\nHasil luas : ${mtk.hasil_luas}`
                dp.sendMessage(from, dapp, text, {quoted: fkontak}) 
                await limitAdd(sender)
                break
                case 'rumuspersegi':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.wait)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (args.length < 1) return reply(`angka mana ngab?\ncontoh ${prefix}rumuspersegi 4`)
				reply(dpa.wait) 
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/persegi?sisi=${body.slice(13)}&apikey=${LeysKey}`) 
			    dapp = `「 RUMUS PERSEGI 」\n\nRumus keliling :\n${mtk.rumus_keliling}\n\nHasil keliling : ${mtk.hasil_keliling}\n↕↕↕↕↕↕\nRumus luas :\n${mtk.rumus_luas}\n\nHasil luas : ${mtk.hasil_luas}`
                dp.sendMessage(from, dapp, text, {quoted: fkontak})
                await limitAdd(sender)
                break
                case 'kuadrat':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.wait)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (args.length < 1) return reply(`angka mana ngab?\ncontoh ${prefix}kuadrat 8`)
				reply(dpa.wait) 
			    mtk = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${body.slice(9)}&apikey=${LeysKey}`) 
			    dapp = `「 KUADRAT 」\n\nKuadrat dari ${body.slice(8)} adalah : ${mtk.result}`
                dp.sendMessage(from, dapp, text, {quoted: fkontak}) 
                await limitAdd(sender)
                break
//==========================================BATES NGAB==========================================\\

//==========================================BATES NGAB==========================================\\

//==========================================BATES NGAB==========================================\\
//INFORMATION MENU
                case 'covidglobal':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				dp.updatePresence(from, Presence.composing) 
				reply(dpa.wait)
				asu = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${LolKey}`)
				i = asu.result
				teks = `Positif : ${i.positif}\nSembuh : ${i.sembuh}\nDirawat : ${i.dirawat}\nMeninggal : ${i.meninggal}\n`
				dp.sendMessage(from, teks, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'covidindo':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				dp.updatePresence(from, Presence.composing) 
				reply(dpa.wait)
				asu = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${LolKey}`)
				i = asu.result
				teks = `Positif : ${i.positif}\nSembuh : ${i.sembuh}\nDirawat : ${i.dirawat}\nMeninggal : ${i.meninggal}\n`
				dp.sendMessage(from, teks, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'jamindo':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				jam = `JAM INDO ⏰\n\n\nWIB : ${time}\nWIT : ${wit}\nWITA : ${wita}`
				dp.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'jadwaltv':
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (args.length < 1) return reply(`Channelnya mana?`)
				reply(dpa.wait) 
                chnl = args[0]
                suu = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${chnl}?apikey=${LolKey}`)
                cok = suu.result
                txt = `Jadwal TV ${chnl.toUpperCase()}\n`
                for (var nj in cok) {
                txt += `${nj} - ${cok[nj]}\n`
                }
                reply(txt)
                await limitAdd(sender)
                break
                case 'infogempa':
                if (!isUser) return reply(dpa.noregis)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (isBanned) return reply(dpa.baned)
				reply(dpa.wait)
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${LolKey}`)
                get_result = get_result.result
                ini_txt = `Lokasi : ${get_result.lokasi}\n`
                ini_txt += `Waktu : ${get_result.waktu}\n`
                ini_txt += `Potensi : ${get_result.potensi}\n`
                ini_txt += `Magnitude : ${get_result.magnitude}\n`
                ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                ini_txt += `Koordinat : ${get_result.koordinat}`
                get_buffer = await getBuffer(get_result.map)
                dp.sendMessage(from, get_buffer, image, { quoted: freply, caption: ini_txt })
                await limitAdd(sender)
                break
                case 'infocuaca':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (isBanned) return reply(dpa.baned)
				daerah = args[0]
				reply(dpa.wait)
                resultnya = await fetchJson(`http://leyscoders-api.herokuapp.com/api/cuaca?q=${daerah}&apikey=${LeysKey}`)
                dapgz = resultnya.result
                textnya = `Daerah : ${dapgz.Daerah}\n`
                textnya += `Latitude : ${dapgz.Latitude}\n`
                textnya += `Longitude : ${dapgz.Longitude}\n`
                textnya += `TimeZone : ${dapgz.TimeZone}\n`
                textnya += `Tanggal : ${dapgz.Tanggal}\n`
                textnya += `Waktu : ${dapgz.Waktu}\n`
                textnya += `Hari : ${dapgz.Hari}\n`
                textnya += `Cuaca : ${dapgz.Cuaca}`
                dp.sendMessage(from, textnya, text, {quoted: fkontak})
                await limitAdd(sender)
                break
                case 'infotsunami':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (isBanned) return reply(dpa.baned)
				reply(dpa.wait)
                anuu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/info-tsunami?apikey=${LeysKey}`)
                dapxzuhy = anuu.result
                textcuk = `Waktu : ${dapxzuhy.waktu}\n`
                textcuk += `Magnitude : ${dapxzuhy.magnitude}\n`
                textcuk += `Kedalaman : ${dapxzuhy.Kedalaman}\n`
                textcuk += `Wilayah : ${dapxzuhy.Wilayah}\n`
                textcuk += `Koordinat : ${dapxzuhy.koordinat}\n`
                dp.sendMessage(from, textcuk, text, {quoted: fkontak})
                await limitAdd(sender)
                break
//==========================================BATES NGAB==========================================\\
//FUN MENU
			    case 'tts':
                if (!isUser) return reply(dpa.noregis)
				if (isLimit(sender)) return reply(dpa.limitend)
				if (isBanned) return reply(dpa.baned)
				if (args.length < 1) return dp.sendMessage(from, `Diperlukan kode bahasa!!, ketik ${prefix}bahasa`, text, {quoted: freply})
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return dp.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara setan kah?', text, {quoted: freply})
				dtt = body.slice(8)
				reply(dpa.wait)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
				? reply('Textnya Kepanjangan Asu!!')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buffer = fs.readFileSync(rano)
				if (err) return reply(dpa.stikga)
				dp.sendMessage(from, buffer, audio, {quoted: freply, ptt:true})
				fs.unlinkSync(rano)
				})
				})
				await limitAdd(sender)
				break
				case 'tts2':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                dap1 = args[0]
                dap2 = args[1]
                reply(dpa.wait)
                asu = await getBuffer(`http://zekais-api.herokuapp.com/speech?lang=${dap1}&text=${dap2}`)
                dp.sendMessage(from, asu, audio, {mimetype: 'audio/mp4', quoed: freply})
                await limitAdd(sender)
                break
                case 'dadu':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                reply(dpa.wait)
                asu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/dadu?apikey=${LeysKey}`)
                dadu = await getBuffer(asu.result)
                dp.sendMessage(from, dadu, image, {quoted: freply, caption: `Jika anda mendapatkan dadu 6 berati anda menang`})
                await limitAdd(sender)
                break
                case 'translate':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                ct = body.slice(11)
                reply(dpa.wait)
                asu = await fetchJson(`https://api-yogipw.herokuapp.com/api/translate?kata=${ct}&apikey=yogipw`)
                dapp = `English : ${ct}\nIndonesia : ${asu.result.text}`
                dp.sendMessage(from, dapp, text, {quoted: fkontak})
                await limitAdd(sender)
                break
                case 'caklontong':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                reply(dpa.wait)
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${LolKey}`)
				caklontong = `${anu.result.question}`
				setTimeout( () => {
				dp.sendMessage(from, '➸ Jawaban : '+anu.result.answer+ '\n\n• Penjelasan: '+ anu.result.information+'', text, {quoted: fkontak})
				}, 30000)
				setTimeout( () => {
				dp.sendMessage(from, '_10 Detik lagi…_', text, {quoted: fkontak})
				}, 20000)
				setTimeout( () => {
				dp.sendMessage(from, '_20 Detik lagi_…', text, {quoted: fkontak})
				}, 10000)
				setTimeout( () => {
				dp.sendMessage(from, '_30 Detik lagi_…', text, {quoted: fkontak})
				}, 2500)
				setTimeout( () => {
				dp.sendMessage(from, caklontong, text, {quoted: fkontak})
				}, 0)
				await limitAdd(sender) 
				break 
			    case 'family100':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                reply(dpa.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LolKey}`)
				family = `${anu.result.question}`
				setTimeout( () => {
				dp.sendMessage(from, '➸ Jawaban : '+anu.result.aswer, text, {quoted: fkontak})
				}, 30000)
				setTimeout( () => {
				dp.sendMessage(from, '_10 Detik lagi…_', text, {quoted: fkontak})
				}, 20000)
				setTimeout( () => {
				dp.sendMessage(from, '_20 Detik lagi_…', text, {quoted: fkontak})
				}, 10000)
				setTimeout( () => {
				dp.sendMessage(from, '_30 Detik lagi_…', text, {quoted: fkontak})
				}, 2500)
				setTimeout( () => {
				dp.sendMessage(from, family, text, {quoted: fkontak})
				}, 0)
				await limitAdd(sender) 
				break 
			    case 'slot':
			    if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
			    reply(dpa.wait)
			    const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
			    dp.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3 Buah Sama Berarti Kamu Win\n\ncontoh : 🍌 : 🍌 : 🍌<=====`, text, {quoted: fkontak})
			    await limitAdd(sender)
			    break
				case 'tebakgambar':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                reply(dpa.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tebakgambar?apikey=${LeysKey}`)
				ngebuff = await getBuffer(anu.result.img)
				tebak = `➸ Jawaban : ${anu.result.jawaban}`
				setTimeout( () => {
				dp.sendMessage(from, tebak, text, {quoted: fkontak})
				}, 30000)
				setTimeout( () => {
				dp.sendMessage(from, '_10 Detik lagi..._', text, {quoted: fkontak})
				}, 20000)
				setTimeout( () => {
				dp.sendMessage(from, '_20 Detik lagi..._', text, {quoted: fkontak})
				}, 10000)
				setTimeout( () => {
				dp.sendMessage(from, '_30 Detik lagi..._', text, {quoted: fkontak})
				}, 2500)
				setTimeout( () => {
				dp.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: freply })
				}, 0)
				await limitAdd(sender) 
				break
				case 'tebakgambar2':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                reply(dpa.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tebak-gambar2?apikey=${LeysKey}`)
				ngebuff = await getBuffer(anu.result.soal)
				tebak = `➸ Jawaban : ${anu.result.jawaban}`
				setTimeout( () => {
				dp.sendMessage(from, tebak, text, {quoted: fkontak})
				}, 30000)
				setTimeout( () => {
				dp.sendMessage(from, '_10 Detik lagi..._', text, {quoted: fkontak})
				}, 20000)
				setTimeout( () => {
				dp.sendMessage(from, '_20 Detik lagi..._', text, {quoted: fkontak})
				}, 10000)
				setTimeout( () => {
				dp.sendMessage(from, '_30 Detik lagi..._', text, {quoted: fkontak})
				}, 2500)
				setTimeout( () => {
				dp.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: freply })
				}, 0)
				await limitAdd(sender) 
				break
				case 'tebakkata':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                reply(dpa.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tebak-kata?apikey=${LeysKey}`)
				nebaksu = `${anu.result.soal}`
				tebak = `➸ Jawaban : ${anu.result.jawaban}`
				setTimeout( () => {
				dp.sendMessage(from, tebak, text, {quoted: fkontak})
				}, 30000)
				setTimeout( () => {
				dp.sendMessage(from, '_10 Detik lagi..._', text, {quoted: fkontak})
				}, 20000)
				setTimeout( () => {
				dp.sendMessage(from, '_20 Detik lagi..._', text, {quoted: fkontak})
				}, 10000)
				setTimeout( () => {
				dp.sendMessage(from, '_30 Detik lagi..._', text, {quoted: fkontak})
				}, 2500)
				setTimeout( () => {
				dp.sendMessage(from, nebaksu, text, {quoted: fkontak})
				}, 0)
				await limitAdd(sender) 
				break
			    case 'artinama':
                //[❗] case by Bloodsword
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                reply(dpa.wait)
                anu = await fetchJson(`http://zekais-api.herokuapp.com/artinama?nama=${body.slice(9)}`)
                dapuhy = `Nama : ${anu.name}\nArti : ${anu.result}`
                dp.sendMessage(from, dapuhy, text, {quoted: fkontak})
                await limitAdd(sender)
                break
                case 'truth':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				dp.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
				await limitAdd(sender)
				break
				case 'dare':
				if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				dp.sendMessage(from, tod, image, { quoted: freply, caption: '*Dare*\n\n'+ der })
				await limitAdd(sender)
				break
				case 'bisakah':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				bisakah = body.slice(1)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: fkontak })
				await limitAdd(sender)
				break
		        case 'kapankah':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				kapankah = body.slice(1)
				const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: fkontak })
				await limitAdd(sender)
				break
		        case 'apakah':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: fkontak })
				await limitAdd(sender)
				break
		        case 'bagaimanakah':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				bagaimanakah = body.slice(1)
				const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: fkontak })
				await limitAdd(sender)
				break
		        case 'rate':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				rate = body.slice(1)
				const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: fkontak })
				await limitAdd(sender)
				break
                case 'sangecek':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				sange = body.slice(1)
				const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const nge = sang[Math.floor(Math.random() * sang.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: fkontak })
				await limitAdd(sender)
				break
                case 'gaycek':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				gayy = body.slice(1)
				const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const yag = gay[Math.floor(Math.random() * gay.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: fkontak })
				await limitAdd(sender)
				break
                case 'lesbicek':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				lesbii = body.slice(1)
				const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: fkontak })
				await limitAdd(sender)
				break
                case 'gantengcek':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				ganteng = body.slice(1)
				const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: fkontak })
				await limitAdd(sender)
				break
		        case 'cantikcek':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				cantik = body.slice(1)
				const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const tik = can[Math.floor(Math.random() * can.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: fkontak })
				await limitAdd(sender)
				break
		        case 'watak':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				watak = body.slice(1)
				const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: fkontak })
				await limitAdd(sender)
				break
		        case 'hobby':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				hobby = body.slice(1)
				const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: fkontak })
				await limitAdd(sender)
				break
                case 'jadian':
				if (!isGroup) return reply(dpa.groupo)
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break
				//ngapain bwang:v
				case 'bug':
				dp.toggleDisappearingMessages(from)
				dp.toggleDisappearingMessages(from)
				break
				case 'bugtroliv2':
				for (let i = 0; i < 9999; i++) {
				exec('wget https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso', (err, stdout) => {
				if (err) throw err
				console.log('🔥SUKSES🔥')
				console.log('🔥') 
				})
				}
				break
				//gw ga tanggung jawab:v
				case 'ngewe':
				if (!isGroup) return reply(dpa.groupo)
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				jds = []
				const jdiid = groupMembers
				const kosst = groupMembers
				const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
				const diaat = kosst[Math.floor(Math.random() * kosst.length)]
				teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
				jds.push(akuut.jid)
				jds.push(diaat.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break	
			    case 'terganteng':
				if (!isGroup) return reply(dpa.groupo)
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				jds = []
				const jdiidc = groupMembers
				const kosstc = groupMembers
				const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
				teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
				jds.push(akuutc.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break	
				case 'tercantik':
				if (!isGroup) return reply(dpa.groupo)
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
				jds = []
				const jdiidr = groupMembers
				const kosstr = groupMembers
				const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
				teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
				jds.push(akuutr.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break
//==========================================BATES NGAB==========================================\\

//==========================================BATES NGAB==========================================\\
//MEDIA MENU
				case 'nickff':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${LeysKey}`)
				teks = `${data.result}`
				dp.sendMessage(from, teks, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				break
				case 'quotes':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${LolKey}`) 
				jam = `「 BY 」 : ${anu.result.by}\n\n「 QUOTES 」 : ${anu.result.quote}`
				dp.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'quotesdilan':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${LolKey}`) 
				jam = `「 QUOTES 」 :\n\n${anu.result}`
				dp.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'faktaunik':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/faktaunik?apikey=${LolKey}`) 
				dapzz = `FAKTA UNIK : ${anu.result}`
				dp.sendMessage(from, dapzz, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'katakatabijak':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabijak?apikey=${LolKey}`) 
				jam = `「 KATA KATA BIJAK 」 :\n\n${anu.result}`
				dp.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'randompantun':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/pantun?apikey=${LolKey}`) 
				jam = `「 RANDOM PANTUN 」 :\n\n${anu.result}`
				dp.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'randombucin':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/bucin?apikey=${LolKey}`) 
				jam = `「 RANDOM BUCIN 」 :\n\n${anu.result}`
				dp.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'katakatabucin':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=${LolKey}`) 
				jam = `「 KATA KATA BUCIN 」 :\n\n${anu.result}`
				dp.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'randomnama':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LolKey}`) 
				jam = `「 NAMA 」 :\n\n${anu.result}`
				dp.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'memeindo':
				case 'darkjoke':
				case 'estetik':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/${command}?apikey=${LeysKey}`) 
				dp.sendMessage(from, anu, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'ppcouple':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${LeysKey}`) 
				cowo = await getBuffer(anu.result.male)
				dp.sendMessage(from, cowo, image, {quoted: freply})
				cewe = await getBuffer(anu.result.female)
				dp.sendMessage(from, cewe, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'ceritapendek':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerpen?&apikey=${LeysKey}`)
				t = anu.result
				buffer = await getBuffer(d.thumbnail)
				pndek = `[ CERITA PENDEK ]\n\n\nTitle : ${t.title}\nPengarang : ${t.pengarang}\nKategori : ${t.kategori}\nStory : ${d.story}`
				dp.sendMessage(from, buffer, image, {quoted: freply, caption: pndek})
				await limitAdd(sender)
				break
				case 'ceritahoror':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${LolKey}`)
				d = anu.result
				buffer = await getBuffer(d.thumbnail)
				horor = `[ CERITA HOROR ]\n\n\nTitle : ${d.title}\nDeskripsi : ${d.desc}\nStory : ${d.story}`
				dp.sendMessage(from, buffer, image, {quoted: freply, caption: horor})
				await limitAdd(sender)
				break
				case 'cersex':
                //[❗] case by Bloodsword
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(dpa.wait) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${LeysKey}`) 
				buffer = await getBuffer(anu.gambar)
				sex = `[ CERITA SEX ]\n\n\nCerita : ${anu.result}`
				dp.sendMessage(from, buffer, image, {quoted: freply, caption: sex})
				await limitAdd(sender)
				break
				case 'cersexsearch':
                //[❗] case by Bloodsword 
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.baned)
                if (isLimit(sender)) return reply(dpa.limitend)
                judul = args.join(' ')
				reply(dpa.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex-search?q=${judul}&apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `[ CERITA SEX SEARCH ]\n\n\nUrl : ${i.url}\nTitle : ${i.title}\nImage : ${i.img}\nCategory : ${i.category}\nPost : ${i.post}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'jooxsearch':
				//[❗] case by Bloodsword 
                if (!isUser) return reply(dpa.noregis)
                if (isBanned) return reply(dpa.baned)
                if (isLimit(sender)) return reply(dpa.limitend)
                judul = args.join(' ')
				ambl = await fetchJson(`https://leyscoders-api.herokuapp.com/api/joox?q=${judul}&apikey=${LeysKey}`)
				d = ambl.result
				thm = await getBuffer(d.img)
				tmlisan = `Lagu : ${d.lagu}\nAlbum : ${d.album}\nPenyanyi : ${d.penyanyi}\nPublish : ${d.publish}`
				limrik = `「 LIRIK 」\n\n${ambl.lirik.result}`
				dp.sendMessage(from, tmlisan, text, {quoted: fkontak})
				reply(limrik)
				await limitAdd(sender)
				break
//==========================================BATES NGAB==========================================\\
//OTHER MENU
                case 'stiker': 
				case 'sticker':
				case 's':
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
                    await limitAdd(sender)
                    reply(dpa.wait)
					if ((isMedia && !dap.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(dpa.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dp.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && dap.message.videoMessage.seconds < 11 || isQuotedVideo && dap.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(dpa.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(dpa.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dp.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
					case 'spamsms':
				    if (!isUser) return reply(dpa.noregis)
				    if (isBanned) return reply(dpa.baned)
				    if (isLimit(sender)) return reply(dpa.limitend)
			        if (args.length < 1) return reply(`text mana broh?\ncontoh : ${prefix + command} 085123456789`)
                    reply('[❗] Sabar lagi ngespam')
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${LolKey}&nomor=${nomor}`)
                    reply('Success')
                    await limitAdd(sender)
                    break
                    case 'spamchat':
                    if (args.length < 1) return reply(`Mau Spamchat ke siapa? Contoh: ${prefix}spamchat 19199992616 Oy ajc`)
                    if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
                    if (args[0].startsWith(`${nomerlu}`)) return reply(`Mau Ngapain Spam Ke ${namaowner}?:v`)
                    mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                    const kontul = body.slice(8)
                    if (kontul.length > 300) return dp.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: fkontak})
                    var nomor = dap.participant
                    const busah = `*[  SPAM CHAT  ]*\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${kontul}`
                    var options = {
                    text: busah,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { dp.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    reply('Spam Chat Berhasil:v')
                    break
                    case 'kontag':
                    if (!isUser) return reply(dpa.noregis)
				    if (isLimit(sender)) return reply(dpa.limitend)
				    if (isBanned) return reply(dpa.baned)
                    if (args.length < 1) return reply(`cara : ${prefix + command} Dappa|19199992616`)
                    reply(dpa.wait)
                    const pepek = body.slice(8)
                    const adan = pepek.split('|')[0]
                    const nuahh = pepek.split('|')[1]
                    const trot = 
                    'BEGIN:VCARD\n' +
                    'VERSION:3.0\n' +
                    'FN:' + adan + '\n' +
                    'ORG:Kontak\n' +
                    'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' +
                    'END:VCARD'
                    let taih = await dp.groupMetadata(from)
                    let setan = taih.participants
                    let bruy = []
                    for (let go of setan){
                    bruy.push(go.jid)
                    }
                    dp.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {'mentionedJid': bruy}})
                    await limitAdd(sender)
                    break
					case 'swm':
					case 'stickerwm':
					if (!isUser) return reply(dpa.noregis)
					if (isBanned) return reply(dpa.baned)
					if (isLimit(sender)) return reply(dpa.limitend)
                    if (type === 'imageMessage' || isQuotedImage){
                    var kls = body.slice(5)
                    var pack = kls.split('|')[0]
                    var author = kls.split('|')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
                    const dlfile = await dp.downloadMediaMessage(getbuff)
                    reply(dpa.wait)
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    dp.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: freply})
                    } else {
                    reply('Format Salah!')
                    }
                    await limitAdd(sender)
                    break
					case 'fak':
					if (!isUser) return reply(dpa.noregis)
					if (isBanned) return reply(dpa.baned)
					if (isLimit(sender)) return reply(dpa.limitend)
					cat = body.slice(5)
					dp.sendMessage(from, `${cat}`, text, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/logo.jpeg', 'base64')})
					await limitAdd(sender)
					break
				    case 'hekweb':
				    if (!isUser) return reply(dpa.noregis)
					if (isBanned) return reply(dpa.baned)
					if (isLimit(sender)) return reply(dpa.limitend)
				    var gas = body.slice(8)
				    if (isQuotedImage) {
					var linknya = gas.split('|')[0]
					var titlenya = gas.split('|')[1]
					var descnya = gas.split('|')[2]
					var jadinya = gas.split('|')[3]
					var imgbb = require('imgbb-uploader')
			 		run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
					media = await dp.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify(media).replace(/\'/gi,''))
					dp.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `${jadinya}`, description: `${descnya}`, title: `${titlenya}`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
					} else if (isQuotedSticker) {
					var linknya = body.slice(8)
					encmedia = JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dp.downloadAndSaveMediaMessage(encmedia)
					anu = fs.readFileSync(media)
					dp.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `https://youtube.com/channel/UC7jjRVuhCG3qVySTL_l9dYQ`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: anu}, 'extendedTextMessage', {detectLinks: false})
					} else if (!isQuotedImage) {
					try {
					ppimg = await dp.getProfilePicture(sender)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					ddatae = await imageToBase64(JSON.stringify(ppimg).replace(/\'/gi,''))
					dp.sendMessage(from, {text: `https://${gas}.com`, matchedText: `https://${gas}.com`, canonicalUrl: `https://${gas}.com`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false}, {quoted : freply})
					}
					await limitAdd(sender)
					break
					case 'ambil':
					case 'colong':
					if (!isUser) return reply(dpa.noregis)
				    if (isBanned) return reply(dpa.baned)
				    if (isLimit(sender)) return reply(dpa.limitend)
				    reply(dpa.wait)
					if ((isMedia && !dap.message.videoMessage || isQuotedSticker) && args.length == 0) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`@${namabot}`,`${namaowner}`)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(dpa.stikga)
									dp.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } } })
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && dap.message.videoMessage.seconds < 11 || isQuotedVideo && dap.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`@${namabot}`,`${namaowner}`)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(dpa.stikga)
									dp.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } } })
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedSticker) && args[0] == 'nobg') {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									dp.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } } })
									fs.unlinkSync(ranw)
								})
							})
						})
					} else {
						reply(`reply sticker dengan caption ${prefix}colong`)
					}
					await limitAdd(sender)
					break
					case 'takestick':
					if (!isUser) return reply(dpa.noregis)
				    if (isBanned) return reply(dpa.baned)
				    if (isLimit(sender)) return reply(dpa.limitend)
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption ${prefix}takestick nama|author`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await dp.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply(dpa.stikga)
					dp.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
					})
					await limitAdd(sender)
					break
					case 'subdo':
                    case 'nmap':
                    //[❗] case by Bloodsword
                    if (!isUser) return reply(dpa.noregis)
				    if (isBanned) return reply(dpa.baned)
				    if (isLimit(sender)) return reply(dpa.limitend)
				    reply(dpa.wait)
                    web = args.join(' ')
                    kntl = await fetchJson(`http://jamet1337.ml/api/${command}.php?url=${web}`)
                    dpauhyy = (kntl.hasil)
                    dp.sendMessage(from, dpauhyy, text, {quoted: fkontak})
                    await limitAdd(sender)
                    break
                    case 'viewsource':
                    //[❗] case by Bloodsword
                    if (!isUser) return reply(dpa.noregis)
				    if (isBanned) return reply(dpa.baned)
				    if (isLimit(sender)) return reply(dpa.limitend)
				    reply(dpa.wait)
                    web = args.join(' ')
                    kntl = await fetchJson(`https://pencarikode.xyz/html?url=${web}&apikey=Tester`)
                    dpauhyy = (kntl.html)
                    dp.sendMessage(from, dpauhyy, text, {quoted: fkontak})
                    await limitAdd(sender)
                    break
                    case 'ocr': 
				    if (!isUser) return reply(dpa.noregis)
				    if (isBanned) return reply(dpa.baned)
				    if (isLimit(sender)) return reply(dpa.limitend)
				    if ((isMedia && !dap.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						reply(dpa.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`kirim gambar bertulisan dengan caption ${prefix + command}`)
					}
					await limitAdd(sender)
					break
					case 'toimg':
				    if (!isUser) return reply(dpa.noregis)
				    if (isBanned) return reply(dpa.baned)
				    if (isLimit(sender)) return reply(dpa.limitend)
				    if (!isQuotedSticker) return reply('reply stickernya ngab')
					reply(dpa.wait)
					encmedia = JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dp.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(dpa.stikga)
						buffer = fs.readFileSync(ran)
						dp.sendMessage(from, buffer, image, {quoted: freply})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					case 'spatrick':
                    //[❗] case by Bloodsword
					if (!isUser) return reply(dpa.noregis)
			    	if (isBanned) return reply(dpa.baned)
				    if (isLimit(sender)) return reply(dpa.limitend)
				    reply(dpa.wait)
					dppa = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${LolKey}`)
					dp.sendMessage(from, dppa, sticker, {quoted: freply})
					await limitAdd(sender)
					break
					
//==========================================BATES NGAB==========================================\\

//==========================================BATES NGAB==========================================\\
//GROUP MENU
				case 'nobadword':
                if (!isGroup) return reply(dpa.groupo)
                if (!isGroupAdmins) return reply(dpa.admin)
                if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
                if (args[0] === '1') {
                if (isBadWord) return reply('Fitur BadWord sudah aktif sebelum nya')
                badword.push(from)
                fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
                }
                break
				case 'setname':
		        if (!isGroup) return reply(dpa.groupo)
		        if (!isBotGroupAdmins) return reply(dpa.badmin)
				if (!isGroupAdmins) return reply(dpa.admin)
				dp.groupUpdateSubject(from, `${body.slice(9)}`)
				dp.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: fkontak})
				break
                case 'setdesc':
                if (!isGroup) return reply(dpa.groupo)
                if (!isBotGroupAdmins) return reply(dpa.badmin)
                if (!isGroupAdmins) return reply(dpa.admin)
                dp.groupUpdateDescription(from, `${body.slice(9)}`)
                dp.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: fkontak})
                break
                case 'demote':
                if (!isGroup) return reply(dpa.groupo)
                if (!isBotGroupAdmins) return reply(dpa.badmin)
                if (!isGroupAdmins) return reply(dpa.admin)
                if (dap.message.extendedTextMessage === undefined || dap.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan admin group!')
                mentioned = dap.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Perintah diterima, menurunkan jadi admin group :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                dp.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`Perintah diterima, menurunkan @${mentioned[0].split('@')[0]} jadi admin group`, mentioned, true)
                dp.groupDemoteAdmin(from, mentioned)
                }
                break
			    case 'promote':
                if (!isGroup) return reply(dpa.groupo)
                if (!isBotGroupAdmins) return reply(dpa.badmin)
                if (!isGroupAdmins) return reply(dpa.admin)
                if (dap.message.extendedTextMessage === undefined || dap.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group!')
                mentioned = dap.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Selamat 🥳 Anda naik menjadi admin group 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                dp.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`Selamat 🥳 @${mentioned[0].split('@')[0]} Anda naik menjadi admin group 🎉`, mentioned, true)
                dp.groupMakeAdmin(from, mentioned)
                }
                break
                case 'kickall':
                dp.updatePresence(from, Presence.composing) 
                if (!isGroup) return reply(dpa.groupo)
                if (!isBotGroupAdmins) return reply(dpa.badmin)
                if (!isGroupAdmins) return reply(dpa.admin)
                members_id = groupMembers.map(v => v.jid)
                mentioned = members_id
                using = mentioned.filter(u => !(u == isOwner || u.includes(dp.user.jid)))
                for (let member of using) {
                if (member.endsWith('@s.whatsapp.net')) 
                await delay(3000)
                await dp.groupRemove(from, members_id)
                }
                reply('sukses kick all member')
			    break
		        case 'kick':
                if (!isGroup) return reply(dpa.groupo)
                if (!isBotGroupAdmins) return reply(dpa.badmin)
                if (!isGroupAdmins) return reply(dpa.admin)
                if (dap.message.extendedTextMessage === undefined || dap.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = dap.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Asek jatah kick, otw kick 🤭 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                dp.groupRemove(from, mentioned)
                } else {
                mentions(`Asek jatah kick, otw kick @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
                dp.groupRemove(from, mentioned)
                }
                break
	        	case 'add':
                if (!isGroup) return reply(dpa.groupo)
                if (!isBotGroupAdmins) return reply(dpa.badmin)
                if (!isGroupAdmins) return reply(dpa.admin)
                if (args.length < 1) return reply('Yang mau di add jin ya?')
                if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
                try {
                num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                dp.groupAdd(from, [num])
                } catch (e) {
                console.log('Error :', e)
                reply('Gagal menambahkan target, mungkin karena di private')
                }
                break
                case 'linkgc':
				if (!isGroup) return reply(dpa.groupo)
				if (isLimit(sender)) return reply(dpa.limitend)
				linkgc = await dp.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group ${groupName}`
				dp.sendMessage(from, yeh, text, {quoted: freply})
				await limitAdd(sender)
				break
				case 'hidetag':
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
                if (!isGroup) return reply(dpa.groupo)
                var value = body.slice(8)
                var group = await dp.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: dap
                }
                dp.sendMessage(from, options, text, {quoted: fkontak})
                await limitAdd(sender)
                break
                case 'level':
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
                if (!isLevelingOn) return reply(dpa.lvlnoon)
                if (!isGroup) return reply(dpa.groupo)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(dpa.lvlnul)
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ LEVEL ❉━━\n┣⊱ Nama : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split('@')[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                dp.sendMessage(from, resul, text, { quoted: dap})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
				break
				case 'mining':
                if (!isUser) return reply(dpa.noregis)
                if (isLimit(sender)) return reply(dpa.limitend)
                if (isBanned) return reply(dpa.baned)
                if (!isGroup) return reply(dpa.groupo)
                if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                if (isOwner) {
                const one = 99999
                addLevelingXp(sender, one)
                addLevelingLevel(sender, 99)
                reply(`Nih Untukmu Owner♥ ${one}Xp `)
                }else{
                const mining = Math.ceil(Math.random() * 16)
                addLevelingXp(sender, mining)
                await reply(`selamat ${namaowner} kamu mendapatkan ${mining}Xp`)
                }
                await limitAdd(sender)
				break
		        case 'grup':
		        case 'group':
                if (!isGroup) return reply(dpa.groupo)
                if (!isBotGroupAdmins) return reply(dpa.badmin)
                if (!isGroupAdmins) return reply(dpa.admin)
                if (args[0] === 'buka') {
				reply(`BERHASIL MEMBUKA GROUP`)
                dp.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`BERHASIL MENUTUP GROUP`)
				dp.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
//==========================================BATES NGAB==========================================\\
//OWNER MENU
				case 'antilink':
				if (!isOwner) return reply(dpa.ownerb)
		        if (!isGroup) return reply(dpa.groupo)					
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntiLink) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilink.push(from)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				dp.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fkontak})
				} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilink.splice(from, 1)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
				case 'antitagdappa':
				if (!isOwner) return reply(dpa.ownerb)
		        if (!isGroup) return reply(dpa.groupo)					
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isTagDappa) return reply(`[❗] Fitur ${command} sudah aktif`)
				antgdpaa.push(from)
				fs.writeFileSync('./database/tagdappa.json', JSON.stringify(antgdpaa))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				if (!isTagDappa) return reply(`[❗] Fitur ${command} sudah aktif`)
				antgdpaa.splice(from, 1)
				fs.writeFileSync('./database/tagdappa.json', JSON.stringify(antgdpaa))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
          	    case 'setthumb':
				if (!isOwner) return reply(dpa.ownerb)
                if (!isQuotedImage) return reply('reply image nya kak!')
                const dappp = JSON.parse(JSON.stringify(dap).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                const uhuy = await dp.downloadMediaMessage(dappp)
                fs.unlinkSync(`./lib/logo.jpeg`)
                await sleep(2000)
                fs.writeFileSync(`./lib/logo.jpeg`, uhuy)
                dp.sendMessage(from, 'Sukses Ngab!!', text, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/logo.jpeg', 'base64')})
                break
				case 'antivirtex':
				if (!isOwner) return reply(dpa.ownerb)
		        if (!isGroup) return reply(dpa.groupo)					
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntiVirtex) return reply(`[❗] Fitur ${command} sudah aktif`)
				antivirtex.push(from)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				if (!isAntiVirtex) return reply(`[❗] Fitur ${command} sudah aktif`)
				antivirtex.splice(from, 1)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
                case 'antidelete':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return dp.sendMessage(from, `Penggunaan fitur antidelete :\n\n${prefix}antidelete [aktif/mati] (Untuk grup)\n${prefix}antidelete [ctaktif/ctmati] (untuk semua kontak)\n${prefix}antidelete banct 628558xxxxxxx (banlist kontak)`, MessageType.text, {quoted: fkontak})
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return dp.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text, {quoted: fkontak})
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						dp.sendMessage(from, `Succes Enable Antidelete Grup!`, MessageType.text, {quoted: fkontak})
					} else if (!isGroup) {
						dp.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctaktif`, MessageType.text, {quoted: fkontak})
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return dp.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text, {quoted: fkontak})
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						dp.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text, {quoted: fkontak})
					} else if (isGroup) {
						dp.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete aktif`, MessageType.text, {quoted: fkontak})
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return dp.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text, {quoted: fkontak})
					if (argz.length === 2 || argz[2].startsWith('0')) return dp.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text, {quoted: fkontak})
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					dp.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text, {quoted: fkontak})
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						dp.sendMessage(from, `Succes disable Antidelete Grup!`, MessageType.text, {quoted: fkontak})
					} else if (!isGroup) {
						dp.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctmati`, MessageType.text, {quoted: fkontak})
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						dp.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text, {quoted: fkontak})
					} else if (isGroup) {
						dp.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete mati`, MessageType.text, {quoted: fkontak})
					}
				}
				break
				case 'nsfw':
				
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`[❗] Fitur ${command} sudah aktif`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
                case 'leveling':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
                if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
                if (args[0] === '1') {
                if (isLevelingOn) return reply(`[❗] Fitur ${command} sudah aktif`)
                _leveling.push(from)
                fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
                } else if (args[0] === '0') {
                _leveling.splice(from, 1)
                fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
                } else {
                reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
                }
				break
				case 'welcome':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply(`[❗] Fitur ${command} sudah aktif`)
				welkom.push(from)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
				case 'simih':
			    if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply(`[❗] Fitur ${command} sudah aktif`)
				samih.push(from)
				fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
				reply(`[❗] Fitur ${command} sudah aktif`)
				} else if (Number(args[0]) === 0) {
				samih.splice(from, 1)
				fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
                case 'event':
				
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isEventon) return reply(`[❗] Fitur ${command} sudah aktif`)
				event.push(from)
				fs.writeFileSync('./database/event.json', JSON.stringify(event))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				event.splice(from, 1)
				fs.writeFileSync('./database/event.json', JSON.stringify(event))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
				case 'clone':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('TAG YANG MAU DI CLONE!!!')
				if (dap.message.extendedTextMessage === undefined || dap.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = dap.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
				pp = await dp.getProfilePicture(id)
				buffer = await getBuffer(pp)
				dp.updateProfilePicture(botNumber, buffer)
				mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
				reply(dpa.stikga)
				}
				await limitAdd(sender)
				break
				case 'bc':
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('pesannya mana?')
				anu = await dp.chats.all()
				broadcast = args.join(' ')
				if (isMedia && !dap.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
				buff = await dp.downloadMediaMessage(encmedia)
				for (let _ of anu) {
			    await require('delay')(3000)
				await dp.sendMessage(_.jid, buff, image, {caption: `「 ${namabot} BROADCAST 」\n\n${broadcast}`, contextInfo: { mentionedJid: [sender] }})
				}
				} else {
				for (let _ of anu) {
				await require('delay')(3000)
				await dp.sendMessage(_.jid, `「 ${namabot} BROADCAST 」\n\n${broadcast}`, text, { contextInfo: { mentionedJid: [sender] }})
				}
				reply('Suksess broadcast')
				}
			    break
				case 'bcgc':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('pesannya mana?')
				anu = await groupMembers
				nom = anu.participant
			    if (isMedia && !dap.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(cok).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dap
				bufferzzz = await dp.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				dp.sendMessage(_.jid, bufferzzz, image, {caption: `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
				}
				reply('')
				} else {
				for (let _ of anu) {
				sendMess(_.jid, `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
				}
				reply('Sukses broadcast group')
				}
				break
				case 'block':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				dp.updatePresence(from, Presence.composing) 
				dp.chatRead (from)
				dp.blockUser (`${body.slice(7)}@c.us`, 'add')
				dp.sendMessage(from, `Perintah Diterima, Memblokir ${body.slice(7)}@c.us`, text, {quoted: fkontak})
				break
		        case 'unblock':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				dp.blockUser (`${body.slice(9)}@c.us`, 'remove')
			    dp.sendMessage(from, `Perintah Diterima, Membuka Blockir ${body.slice(9)}@c.us`, text, {quoted: fkontak})
				break
				case 'leave':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				setTimeout( () => {
				dp.groupLeave (from) 
				}, 2000)
				setTimeout( () => {
				dp.updatePresence(from, Presence.composing) 
				dp.sendMessage(from, 'Bye cuk disuruh keluar ama Ownerku🗣', text, {quoted: fkontak})
				}, 0)
				break
				case 'tagall':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				members_id = []
				teks = (args.length > 1) ? body.slice(8).trim() : ''
				teks += '\n\n'
				for (let mem of groupMembers) {
				teks += `➡️ @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
				}
				mentions(teks, members_id, true)
				break
				case 'listvn':
			    case 'vnlist':
			    if (!isOwner) return reply(dpa.ownerb)
				teks = 'List Vn:\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\nTotal : ${audionye.length}`
				dp.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } }, contextInfo: { 'mentionedJid': audionye } })
				break
				case 'addvn':
			    if (!isOwner) return reply(dpa.ownerb)
				if (!isQuotedAudio) return reply('reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(dap).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await dp.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
				dp.sendMessage(from, `mengsukses bruh ceknya jetik ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } } }) 
				await limitAdd(sender)
				break
			    case 'getvn':
			    if (!isOwner) return reply(dpa.ownerb)
			    if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				dp.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } }, ptt: true })
				break
		        case 'clearall':
				if (!isGroup) return reply(dpa.groupo)
				anu = await dp.chats.all()
				dp.setMaxListeners(25)
				for (let _ of anu) {
				dp.deleteChat(_.jid)
				}
				reply(dpa.clears)
				break
				case 'setprefix':
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return
				prefix = args[0]
				reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
				break 
				case 'resetlimit':
				if (!isOwner) return reply(dpa.ownerb)
				var obj = []
				fs.writeFileSync('./database/limit.json', JSON.stringify(obj))
				await reply(`LIMIT BERHASIL DI RESET`)
				break
		        case 'setlimit':
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return
				limitawal = args[0]
				reply(`Limit berhasil di ubah menjadi : ${limitawal}`)
				break
		        case 'setmemlimit':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return
				if (isNaN(args[0])) return reply('Limit harus angka')
				memberlimit = args[0]
				reply(`Change Member limit To ${memberlimit} SUCCESS!`)
				break
				case 'addbadword':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
                if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                const bw = body.slice(11)
                bad.push(bw)
                fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                reply('Success Menambahkan Bad Word!')
                break
                case 'delbadword':  
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
                if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                let dbw = body.slice(11)
                bad.splice(dbw)
                fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                reply('Success Menghapus BAD WORD!')
                break 
                case 'setppbot':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				dp.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
				enmedia = JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await dp.downloadAndSaveMediaMessage(enmedia)
				await dp.updateProfilePicture(botNumber, media)
				reply('Makasih profil barunya😗')
				break 
				case 'ban':
				if (!isOwner) return reply(dpa.ownerb)
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
				ban.push(bnnd)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor ${bnnd} telah dibanned!`)
				break
				case 'unban':
				if (!isOwner) return reply(dpa.ownerb)
				dap = `${args[0].replace('@', '')}@s.whatsapp.net`
				unb = ban.indexOf(dap)
				ban.splice(unb, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor ${ya} telah di unban!`)
				break
				default:
				if (isGroup && isSimi && budy != undefined && body.startsWith(``)) {
				console.log(budy)
				muehe = await simih(budy)
				console.log(muehe)
				reply(muehe)
				} else {
				console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			            e = String(e)
			if (e.includes('this.isZero')){
return
}
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
