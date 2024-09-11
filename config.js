const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Kampala,Uganda."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VabS4UbATRSsyE8oIa1R";
global.website=process.env.GURL || "https://youtube.com/@itsbravotech" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75af2f62134a92abae784.jpg" || "https://telegra.ph/file/75af2f62134a92abae784.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Greyhat" 


global.devs = "256740632497" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256740632497";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75af2f62134a92abae784.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_34_09_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFVXRzVGk1Y2t6VnVLSW9HQkZrR3MwRmhIVzRRUmR2SXNKSS80WjV5dGo4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfd2gwV2VSaVFHZUJvcWVfMHNXU2N3XCIsXG4gIFwicGhvbmVJZFwiOiBcImVlMzM1OGYwLThkYjMtNDU2OS1hNzJmLTAyMjk1YWQ5NjcwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDE1NCxcbiAgICAgIDE0OCxcbiAgICAgIDI0MCxcbiAgICAgIDE1MixcbiAgICAgIDE4MSxcbiAgICAgIDk0LFxuICAgICAgMTEsXG4gICAgICAyMjYsXG4gICAgICAxNCxcbiAgICAgIDM5LFxuICAgICAgMjYsXG4gICAgICAwLFxuICAgICAgMjQ5LFxuICAgICAgMTkyLFxuICAgICAgMTY0LFxuICAgICAgMjM2LFxuICAgICAgNTYsXG4gICAgICAxOTgsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMzMsXG4gICAgICAyMyxcbiAgICAgIDIwMSxcbiAgICAgIDE3NyxcbiAgICAgIDIxMixcbiAgICAgIDE2MyxcbiAgICAgIDE1NSxcbiAgICAgIDIxOCxcbiAgICAgIDU0LFxuICAgICAgNDMsXG4gICAgICAyMDMsXG4gICAgICAzNCxcbiAgICAgIDEyMixcbiAgICAgIDE4OSxcbiAgICAgIDIwNCxcbiAgICAgIDg1LFxuICAgICAgMTEwLFxuICAgICAgMTkwLFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE0REc2M0E5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDA2MzI0OTc6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTc5Mzk1NjIyMDkzNjo3NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeUFsdUlGRU9tNTNyWUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtzUEtWRDNGYWtJeGQyWlUrVlFhd0tZMWFpWkx5ajU4SE1HYUMzMTlzeXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiLzVyVmJaZXRMTjl2a29hVVNQbk5UMGJkbi9YNmo5R29rdnQxMWxZM2Q0T3ZNZ3pnK0ZPcTZNQ1hiRUJIYmhCYmgrd1BRNFFDVGorNG5EaE5GdUR2QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSlhrcGJwYStYWGJwZ2RhNllSWGRhR29mV1NmWDRTU1VhQmRneFY3QlhuVFQ3Ty9jbXg0aHpBRThXWTVLTG82VFN4YU12Vnc2YVBQSHh6cWZxTHpMQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzQwNjMyNDk3Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTQwNjQ0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9XRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1dELmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmIzNkt1OGtCY0ltTjV3cDd5dVUrWkVwMyt5TXhJN1BRZ0JuOU83Q1JoZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTQ4MDU4NjM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI1MTQyNTgyNDk2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GH-Anon ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • IBT』*\n youtube.com/@itsbravotech"),
 
  author : process.env.PACK_AUTHER|| "",const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Kampala,Uganda."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VabS4UbATRSsyE8oIa1R";
global.website=process.env.GURL || "https://youtube.com/@itsbravotech" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75af2f62134a92abae784.jpg" || "https://telegra.ph/file/75af2f62134a92abae784.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Greyhat" 


global.devs = "256740632497" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256740632497";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75af2f62134a92abae784.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_34_09_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFVXRzVGk1Y2t6VnVLSW9HQkZrR3MwRmhIVzRRUmR2SXNKSS80WjV5dGo4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfd2gwV2VSaVFHZUJvcWVfMHNXU2N3XCIsXG4gIFwicGhvbmVJZFwiOiBcImVlMzM1OGYwLThkYjMtNDU2OS1hNzJmLTAyMjk1YWQ5NjcwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDE1NCxcbiAgICAgIDE0OCxcbiAgICAgIDI0MCxcbiAgICAgIDE1MixcbiAgICAgIDE4MSxcbiAgICAgIDk0LFxuICAgICAgMTEsXG4gICAgICAyMjYsXG4gICAgICAxNCxcbiAgICAgIDM5LFxuICAgICAgMjYsXG4gICAgICAwLFxuICAgICAgMjQ5LFxuICAgICAgMTkyLFxuICAgICAgMTY0LFxuICAgICAgMjM2LFxuICAgICAgNTYsXG4gICAgICAxOTgsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMzMsXG4gICAgICAyMyxcbiAgICAgIDIwMSxcbiAgICAgIDE3NyxcbiAgICAgIDIxMixcbiAgICAgIDE2MyxcbiAgICAgIDE1NSxcbiAgICAgIDIxOCxcbiAgICAgIDU0LFxuICAgICAgNDMsXG4gICAgICAyMDMsXG4gICAgICAzNCxcbiAgICAgIDEyMixcbiAgICAgIDE4OSxcbiAgICAgIDIwNCxcbiAgICAgIDg1LFxuICAgICAgMTEwLFxuICAgICAgMTkwLFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE0REc2M0E5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDA2MzI0OTc6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTc5Mzk1NjIyMDkzNjo3NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeUFsdUlGRU9tNTNyWUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtzUEtWRDNGYWtJeGQyWlUrVlFhd0tZMWFpWkx5ajU4SE1HYUMzMTlzeXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiLzVyVmJaZXRMTjl2a29hVVNQbk5UMGJkbi9YNmo5R29rdnQxMWxZM2Q0T3ZNZ3pnK0ZPcTZNQ1hiRUJIYmhCYmgrd1BRNFFDVGorNG5EaE5GdUR2QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSlhrcGJwYStYWGJwZ2RhNllSWGRhR29mV1NmWDRTU1VhQmRneFY3QlhuVFQ3Ty9jbXg0aHpBRThXWTVLTG82VFN4YU12Vnc2YVBQSHh6cWZxTHpMQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzQwNjMyNDk3Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTQwNjQ0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9XRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1dELmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmIzNkt1OGtCY0ltTjV3cDd5dVUrWkVwMyt5TXhJN1BRZ0JuOU83Q1JoZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTQ4MDU4NjM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI1MTQyNTgyNDk2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GH-Anon ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • IBT』*\n youtube.com/@itsbravotech"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GH-Ai",
  ownername:process.env.OWNER_NAME|| "GH-Anon",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GH-Ai",
  ownername:process.env.OWNER_NAME|| "GH-Anon",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
