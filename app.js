const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.toUpperCase() === 'OOF') {
        message.channel.send('bidoof');
    }
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (message.content.toUpperCase() === 'UR MUM GAY') {
        message.channel.sendMessage("no u");
    }else    
        
    if (message.content.toUpperCase() === 'SPAM') {
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
    
    if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
        
});   
    

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

