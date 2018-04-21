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
        message.delete();
        message.channel.sendMessage(sayMessage);
    }
    
    if (command === 'roast') {
        message.channel.sendMessage("ummm " + message.mentions.members.first() + " is gay lol");
    }
    
    if (command === "purge") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched);
    }       
});
    

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

