
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVPMUdvOHFhNUFHQld5c2dnNmZvdE9wN0Q0TDNRdllFOWJ4dUQxNWFubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkh6dWFrN0Vxc0xIRTF0WlV3NUMwTWlNcXZIVE1sWmRCUTF4ekdUSWZ5az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTURiMkkxM1pmL3ZzczU1ZEp2V3hXK3dZWWx2TWJYT1kydXl5TlpYdkdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkRkRVRFQ1MEJOWElIWG5EUm15citjSkhOM1JGTVI0cTJxdTRJbmlDS0EwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNaXNYVExMNXgyVW1oSWZjbm45b3BMQ0pHRTdBb2lwdVVJS01Fb3FVbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9XTVZUL3RVZS91b0FIb3pyUTN4b00yQ2RFcUVOcm1VNEZhZnF2ZTIrd0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5BZ1dVTkhOa1pLSzl1NmpBRGJ6Zk9PYWo3K0ttZDF5OW43RWI2WUIzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3UvK0Nrc3JOWENDZFk2N0YxNTNyMGNHSDc3OW1oRnZWTkRlTHVPeTNtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JeFJISEpTU2lJMXVtb2l4c09ROHl2ZHJNUmppQnRxVnp4MGNTTW14SWtObDAzN1VBWitOV0FuRlZ5OHJZbEVwZXhvQWttWGpwdHBTMEgxUG44a2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiIvcjZ6c3diT2xwSUZzdHY0NWU1V3JpTVpCeTlHc2lXbGpKTERHRVVqWnRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMzk2NjMzODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FGNTBCNzRFMEY5ODRGRkU5NDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NDI1NTcyNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOWcyWGE2b1ZTOGFSWEVQdEYtRWM4QSIsInBob25lSWQiOiI1YTdmM2ZkOC0yM2IyLTRiMWYtYjMzNS0wYzc5NDY1MjczOTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGxZeE9Tc1paRGliemdqUnExOWhtOHJCYlpRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFaeUhlSUJzNm83R2luNE1YRlBLQXFDYzViND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNUk1BTFZJTiIsIm1lIjp7ImlkIjoiMjM0NzAzOTY2MzM4MTo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY1MDI1NzcyMTA1Nzg4OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPV2R4cWtHRU5yOGc4NEdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhNWQ5cHVwYVlDeTVvZDVhYW1SY0lVbUxQRkh4R2NPa1h4bzFoNXZOM2dRPSIsImFjY291bnRTaWduYXR1cmUiOiJaRk1xZ0FIWU5pSlZkVEV6cHRDMGNDYXl3bWxkTTVtSk4zVC9rKzdKdnNJdTFndWpnLyszQU1scVVPeWJINENRRUlOTUJyNzZ5SWI4eFBINWtNb2hpdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT1hXa3RSaDZVaHVabnhqcEp1NVMyb0lsWEZBSXFpRWtOekJzR2QzMTRCbGJBcGluMlZnNUpjbTcwenJNd3kyd3REN2kwREk0ZXc2Uk0zQlVncC9IaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDM5NjYzMzgxOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3VYZmFicVdtQXN1YUhlV21wa1hDRkppenhSOFJuRHBGOGFOWWViemQ0RSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0FnUyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzQyNTU3MjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3ZEIn0=",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "ʟᴜᴄᴋʏ-xᴅ",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "256789966218",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "ʟᴜᴄᴋʏ ➋➊➑",
  DEV: process.env.DEV || "256789966218",
  DEVELOPER_NUMBER: '256789966218@s.whatsapp.net',
  MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/3v5i11.mp3',
NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363420656466131@newsletter',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ʟᴜᴄᴋʏ xᴅ✦ ғʀᴏᴍ ʟᴜᴄᴋʏ ᴛᴇᴄʜ ʜᴜʙ  ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/4itzeu.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  version: process.env.version || "1.5.0",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Africa/Kampala",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg" // Privacy Menu
  }
};
