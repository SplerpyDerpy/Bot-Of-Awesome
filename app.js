

const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");

const prefix = ".t"




client.on("message", (message) => {
    if(message.content.startsWith(prefix))
       return;
    if(message.content.startsWith(prefix + "help")) {
       message.channel.send("not enough commands for this yet");
} else
    if(message.content.startWith(prefix + "say")) {
        const input = message.content.slice(prefix)
            const sayMessage = input.join(" ");

    message.delete().catch(hmm=>{});

    message.channel.send(sayMessage);
    }
});
        
         
        
    


client.on('ready', () => {



    console.log('I am ready!');



});







client.on('message', message => {



    if (message.content === 'ping') {



    	message.reply('pong');



  	}



});

client.on('message', message => {
    if (message.content === 'Bidoof') {
        message.channel.send('oof')
    }
});

client.on('message', message => {
    if (message.content === 'Spam') {
        message.author.sendMessage('do not spam and if you typed spam for some other reason then you are an intellect')
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

});



// THIS  MUST  BE  THIS  WAY



client.login(process.env.BOT_TOKEN);
