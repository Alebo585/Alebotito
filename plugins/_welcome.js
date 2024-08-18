import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let gifUrl = "https://telegra.ph/file/5d3143ba763dba19fa349.mp4";
await conn.sendMessage(m.chat, {video: {url: gifUrl}, gifPlayback: true, caption: text.trim(), mentions: [m.sender]}, {quoted: m});
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `✗ *${botname}* \n│「 Nuevo saya 」\n└┬ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✗ Hol soy Goku \n   │✗ ${groupMetadata.subject}\n   ﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏⳹`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `✗ *${botname}* \n│「 Chau 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✗  Se fue\n   │👋 insecto \n   ﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏ ⳹`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `✗ *${botname}* \n│「 Chau  」\n└┬ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │👋  insecto \n te eliminó un admi \n    ﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏⳹`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}