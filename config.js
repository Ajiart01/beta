
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6285865953104']  
global.mods = ['6285865953104'] 
global.prems = ['6285865953104']
global.nameowner = 'BGS - BOT | MD'
global.numberowner = '6285865953104' 
global.mail = 'bgsbot@gmail.com' 
global.dana = '6285865953104'
global.pulsa = '6285865953104'
global.gopay = '6285865953104'
global.namebot = 'BGS - BOT | MD'
global.gc = 'https://chat.whatsapp.com/Lx2Vja65mXL7oLn7YLKr7H'
global.web = 'https://github.com/bgs'
global.instagram = 'https://instagram.com/bgsbot'
global.wm = 'made by BGS - BOT | MD'
global.watermark = wm
global.wm2 = '⫹⫺ bgs bot'
global.wm3 = '© bgsbot'
global.wm4 = 'made by bgs md'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/0c4be183c36003a4e0bdb.jpg'

//===> Apikey
global.lann = 'iMMI2sB3' //isi apikey mu https://api.betabotz.org
global.btc = '5E63Ptxr'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'iMMI2sB3' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
