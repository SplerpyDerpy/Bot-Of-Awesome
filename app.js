const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});


if (message.substring(0, 1) == '!') {

        var args = message.substring(1).split(' ');

        var cmd = args[0];
    
    
client.on('message', message => {

    if (message.content === 'ping') {

    	message.reply('pong');

  	}

});

client.on('message', message => {
    if (message.content === 'oof') {
        message.reply('bidoof');
    }
})


args = args.splice(1);
    switch(cmd)
        case 'ping':
        bot.sendMessage({
                to: channelID,
                    message: "pong"
        });
    break;
    case 'spam':
    message.author.sendMessage('bamboozled, spamming is a horrible thing to do why would you even consider it')
    

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
