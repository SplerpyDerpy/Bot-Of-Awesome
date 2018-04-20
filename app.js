const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
    }else
            
    if (message.content === 'Oof') {
        message.channel.sendMessage('bidoof');
    }
           
});

client.on('message', message => {
    if (message.content === 'Spam') {
        message.author.sendMessage("please do not spam");
    }else
        
    if (message === 'No') {
        message.channel.sendMessage('you');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
