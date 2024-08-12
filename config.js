//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "donhacker@gamil.com";
global.location = "Jinja, Uganda";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github = process.env.GITHUB || "https://github.com/Noolayko/FI-BOT-UGANDA-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ca3524b5910d72a0844b7.jpg";
global.devs = "256704376077";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "256742366969";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ca3524b5910d72a0844b7.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVAyTFhtSHZ5eTFTVDF0NENpWWdDSHR6eEFrbWVFeGtpVFQwWW5oYWJHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEVJSUdzQ0o4WGhWRVVxNUtKNmJtbkdZdDR4L0hKK0dFcUFpNzRmMGhGaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSVJwNTRCc3JBUVJnOWtEVlpVbmVvekVCZk1QZHptMkgwUmd5WnF3SUVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdlZ4MGFncFc0Mk1KVDdiR1hJNkQ5eHZkZTQzNEV0bmtsR3E2Q1F6SkJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDKzhPcG52MHBLcnNidGl3d0l4ODhIYzV2c0VpWGFtQk5xZXp6dm1nazg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndoOHQ4dDcxL1BZZkFVMzg3MmdtbGFyK0t0aG1nZHF3bGtmTVhZOGNSWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0g2cEpsekVUSFEyN2hHS3JnMVNIekMvZlVuRkdzUC9mdHo5K2lDOEduMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVE1rVXA2VjExRGQvUkQwbVVHTi9zaUxSakk4MDVVZFlhZXE0aVpLZCtSVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpxamxFekEyaE1MSGtmYmdWUERHQnNRQmJycXNFSkJYSVlrVWYvUFMzL2tXSUtlM0tyeXBycnJFRGo2VzcxZHNkRDNkSGZvY25OVnc4cVJiZ2lkd0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJ2dlVuTlRTM09aWjZiZ091NG1jM2hZREdvc0VjckV3eVcvWk0vUldWRUswPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUWmJtamlEY1NrNmtzN096dXVTQTRRIiwicGhvbmVJZCI6ImE1NWE3OTU0LWUzMTktNDhmNi1hMTU1LTdkMzU0NmJkYmNiOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVFBoVndMNm5rcjRrUVIxTkVQdG9KTmxQeW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWg4WCtwNW1uVzZOdkxxMUdNMzhlM0Z6K3VJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZURUxZUVo4IiwibWUiOnsiaWQiOiIyNTY3ODYwNjEzOTU6OTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS0FCT0kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01EOHJOTUVFTUs5NmJVR0dCVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVJNDNNaHhTNzNvZUVZS0s4RHA0K1pvVWlONHJHN0hqckdoTzdteDNUVFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBGTnJBVHFGbWxMOTFOUTFTRXIrSjNlVlRPV3V2Y3RTbFZpZlpacUtiYkN3eHNTc1AvZFRMWC91WTZXWmFqdjJ0aDlabnpaWTRQai8yUWwyWnJQWkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxcGhZdC9WRHF3Wi9tTTdtamJIWnI1ZDFzNFBwNCtJSnl0cUxWb1lWNkZvZ0xXcWlSV005NkxWdlZQclBVQWR0OTRzN253ZFN3YzkzRFl0OWsrSG1Cdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc4NjA2MTM5NTo5NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlU09OekljVXU5NkhoR0NpdkE2ZVBtYUZJamVLeHV4NDZ4b1R1NXNkMDAxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNDkwMDAwfQ=="
module.exports = {
  menu: process.env.MENU || "4",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`FI-BOT-UGANDA-™`",
  author: process.env.PACK_AUTHER || "FI-BOT-UGANDA-",
  packname: process.env.PACK_NAME || "F I B O T",
  botname: process.env.BOT_NAME || "🤖FI-BOT-UGANDA-🤖",
  ownername: process.env.OWNER_NAME || "𝑫𝑶𝑵 𝑯𝑨𝑪𝑲𝑬𝑹💥",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "Privat",
  LANG: (process.env.THEME || "F I").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
