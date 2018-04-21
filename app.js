const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content === 'Oof') {
        message.channel.send('bidoof');
    }
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (message.content === 'Ur mum gay') {
        message.channel.sendMessage("no u");
    }else    
        
    if (message.content === 'Spam') {
        message.author.sendMessage('do not spam');
    }
    if (command === 'say') {
        const sayMessage = args.join(" ");
        message.delete();
        message.channel.sendMessage(sayMessage);
    }
    
    if (command === 'roast') {
        message.channel.sendMessage("ummm " + message.mentions.members.first() + " is gay lol");
    }
    
    if (command === 'giveD') {
        if(!message.member.roles.some(r=>["Admin", "Dragon Gym Leader"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
        if(message.mention.member.first().roles.has("name", "Dragon Badge"))
            return message.channel.sendMessage("already has this badge");
        let role = message.guild.roles.find("name", "Dragon Badge");
        let member = message.mention.member.first();
        member.addRole(role).catch(console.error);
    }
        
});   
});
    

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

