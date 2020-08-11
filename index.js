const Discord = require("discord.js");
const { fstat } = require("fs");

const Client = new Discord.Client

const prefix = '$';

Client.on('ready', () => {
    console.log('bot opérationnel');

    
});


Client.on('message', message => {
    if(message.author.bot) return
    if(message.channel.type == 'dm') return

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + 'ban')){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply('membre non ou mal mentionné')
            }
            else {
               if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + ' a été banni avec succès')
               }
               else {
                   message.reply('imposible de bannir se membre')
               }
            }
        }
        else if(message.content.startsWith(prefix + 'kick')){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply('Membre non ou mal mentionné')
            }
            else {
                if(mention.kickable){
                    mention.kick()
                    message.channel.send(mention.displayName + ' a été kick avec succés')
                }
                else {
                    message.reply('impossible de kick ce membres.')
                }
            }
        }
        else if(message.content.startsWith(prefix + 'mute')){
            let mention = message.mentions.members.first()

            if(mention == undefined){ 
                message.reply('Membre non ou mal mentionné')                
        }
        else {
            mention.roles.add('736739897687277628')
            message.channel.send(mention.displayName + ' mute avec succès ')

            }

        }
        else if(message.content.startsWith(prefix + 'unmute')){
            let mention = message.mentions.members.first()

            if(mention == undefined){ 
                message.reply('Membre non ou mal mentionné')                
        }
        else {
            mention.roles.remove('736739897687277628')
            message.channel.send(mention.displayName + ' a était demute avec succès')



            }                  
        }
    }

});
 


function Savebdd() {
    fs.wriiteFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) =>  {
        if(err) message.channel.send('une erreur est survenue');
    });
}


Client.login('NzM2NjI0ODQ2MDU3NzY2OTgz.XxxhWQ.gocF41wYDMahbv8V2-EOeXpkJd8');







