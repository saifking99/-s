const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
var adminprefix = '$'


//bc

client.on('message', async(message) => {
  if(message.author.julian || message.channel.type == 'dm') return;
  let args = message.content.split(' ');
  if(args[0] == `${prefix}bc`){
      if(!message.member.hasPermission('MANAGE_GUILD')) return;
      if(!args[1]) return message.channel.send(`**Usage:** ${prefix}bc [message]`);
      message.guild.members.map((m) => {
          setTimeout(() => {
              m.send(args.slice(1).join(' ').replace('[user]', m).replace('[server]', message.guild.name)).catch(e => undefined);
          }, 550);
          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
          let args = message.content.split(" ").slice(1);
          var argresult = args.join(' ');
          message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
          m.send(`${argresult}\n ${m}`);
          })
          message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
          message.delete();
      });
  }
}); 


//bc online


var prefix = "$";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

  client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

const developers = ["472413769700474901","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.TOKEN);
