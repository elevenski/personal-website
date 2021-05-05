require("express")().listen(1343);

const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("token");
const fetch = require("node-fetch");
const fs = require('fs')

setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Pong! Requests sent")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})

client.on("ready", () => {
  client.user.setActivity(`u.help | ${db.get("linkler").length} / ${client.guilds.size}`)
  console.log(`Logined`)
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "u.add") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("Already Available!")
    message.channel.send("Successful!");
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    return message.channel.send(e)
  })
  }
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "u.say") {
  var link = spl[1]
 message.channel.send(`${db.get("linkler").length} / ${client.guilds.size}`)
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "u.help") {
let embed = new Discord.RichEmbed()
.setColor('#4ca74c')
.addField(`Uptime Bot v1.0 Help`, `Includes a system that keeps uptime bot glitch sites open 24/7. The links in the system operate 24/7 without any maintenance.`)
.addField(`General Commands`,`

\`u.help\` - Displays the help menu.
\`u.add\` - Adds the link you specified to the system.
\`u.say\` - It shows the number of links in the system.
`)
.addField(`Links`, `[OnlyCode](https://discord.gg/qVzp2cm)
[Add to Server](https://discord.com/oauth2/authorize?client_id=727978641702649966&scope=bot&permissions=8)
[Support Server](https://discord.gg/axczJaR)`)
.setThumbnail(client.user.avatarURL)
.setAuthor(`Uptime`, client.user.avatarURL)
.setFooter(`© Rise Development. (Eleven & Cenap)`, client.user.avatarURL)
return message.channel.send(embed);
    }
 
})


client.on("message", async message => {

  if(!message.content.startsWith("u.eval")) return;
  if(!["Here Admin ID 1","Here Admin ID 2"].includes(message.author.id)) return;
  var args = message.content.split("u.eval")[1]
  if(!args) return message.channel.send("Yes?")
  
      const code = args
    
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
      }
  })
  
  const log = message => {
  console.log(`${message}`);
}
  
