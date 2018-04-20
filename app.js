
const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");




client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

    	message.reply('pong');

  	}

});

client.on('message', message => {
    if (message.content === 'Oof') {
        message.channel.send('bidoof')
    }
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    
if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(hmm=>{});
    message.channel.send(sayMessage);
}


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
