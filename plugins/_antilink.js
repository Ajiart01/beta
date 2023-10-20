let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nDetected *${await conn.getName(m.sender)}* kamu telah mengirim link grup lain!\n\nmaaf kamu akan saya kick dadahhh!`)
    if (isAdmin) return m.reply('*Eh maaf kamu admin, kamu tidak akan saya kick. hehe..*')
    if (!isBotAdmin) return m.reply('*Antilink tidak akan berfungsi karna bot bukan admin, jadikan bot admin dahulu agar fitur ini berfungsi cmiiw ≧﹏≦*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI LINK 」*\n\ntidak berfungsi, bot tidak akan kick kamu.\nkarna admin tidak mengaktifkan Antilink')
    await conn.sendMessage(m.chat, { delete: m.key })
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler
