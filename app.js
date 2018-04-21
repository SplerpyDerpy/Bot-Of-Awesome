const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
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
        message.delete().catch('hmm');
        message.channel.sendMessage(sayMessage);
    }
        
});
    

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

