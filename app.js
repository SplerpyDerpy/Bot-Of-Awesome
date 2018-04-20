const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";

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

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


client.on('message', message => {
    if (message.content === 'Spam') {
        message.author.sendMessage("please do not spam");
    }else
        
    if (message.content === 'Ur mum gay') {
        message.channel.sendMessage('no u');
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
        message.channel.sendMessage('not enough commands yet');
    }else
      
    if (message.content.startsWith(prefix + "roast ryan")) {
        message.channel.sendMessage('idk ummm ryan has autism lol');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
