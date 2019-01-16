const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const PREFIX = "P!";
const EVERYONE = "@";
const YouTube = require("simple-youtube-api")
const newUsers = [];
var client = new Discord.Client();

var footer = ("Progllenge")
var footer2 = ('http://image.noelshack.com/fichiers/2019/03/4/1547681890-logo.jpg')
var color = ("0x78eeff")

const youtube = new YouTube("AIzaSyDE684AY4Th50yKvN7lZ9GroJiFvF5yjy8");

const queue = new Map();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
  var games = [
        "P!help | Progllenge Bot V1.0",
        "Développé par Anthony",
        "http://progllenge.nietsloh.com",
        "" + new Date(),
        bot.users.size + " utilisateurs !"
    ]
        bot.user.setActivity(setInterval(function() {
        bot.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv/Progllenge", type: "STREAMING"})
    }, 3000))

    
    console.log("*``*___*``*");
    console.log("Progllenge Bot - Connecté");
    console.log("*``*___*``*");
});

bot.on('message', function(message) {
     
       var member = message.member;

        if(message.content === 'Progllenge') {
            message.reply("Progllenge c'est super.")
        }

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }
    
        if (message.content === PREFIX + "invite"){
           var embed = new Discord.RichEmbed()
           .addField("Lien d'invitation Discord", "📨 | https://discord.gg/bdb6weH")
           .setColor(color)
           .setTimestamp()
           .setFooter(footer, footer2)
           message.delete()
           message.channel.send(embed);
        }
    });

bot.on("guildMemberAdd", function(member) {               
  var games = [
        "P!help | Progllenge Bot V1.0",
        "Développé par Anthony",
        "http://progllenge.nietsloh.com",
        "" + new Date(),
        bot.users.size + " utilisateurs !"
    ]
        bot.user.setActivity(setInterval(function() {
        bot.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv/Progllenge", type: "STREAMING"})
    }, 3000))
  
     member.addRole(member.guild.roles.find("name", "Membres"));
    var MemberJoinEmbed = new Discord.RichEmbed()
        .addField(`Nous sommes désormais **${member.guild.memberCount}** sur le serveur :white_check_mark:`,`Bienvenue à toi, ${member.displayName} sur le Discord **${member.guild.name}.**\n`)
        .setColor(color)
        .setTimestamp()
        .setFooter(footer, footer2)
    member.guild.channels.find("name","nouveaux").send(MemberJoinEmbed);

});

bot.on("guildMemberRemove", function(member) {
  var games = [
        "P!help | Progllenge Bot V1.0",
        "Développé par Anthony",
        "http://progllenge.nietsloh.com",
        "" + new Date(),
        bot.users.size + " utilisateurs !"
    ]
        bot.user.setActivity(setInterval(function() {
        bot.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv/Progllenge", type: "STREAMING"})
    }, 3000))
  
    var MemberLeaveEmbed = new Discord.RichEmbed()
        .addField(`Nous sommes désormais **${member.guild.memberCount}** sur le serveur :x:`,`${member.displayName} a quitté **${member.guild.name} :x:**\n`)
        .setColor("0xFF0000")
        .setTimestamp()
        .setFooter(footer, footer2)
  member.guild.channels.find("name", "nouveaux").send(MemberLeaveEmbed);
});

bot.login(process.env.TOKEN);
