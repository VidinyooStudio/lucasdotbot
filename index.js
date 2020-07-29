require('dotenv').config(); 
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);

var prefix = 'l-';

client.on('ready', () => {
    console.log("Successfully connected to Discord.");
    client.user.setActivity('Testing Heroku hosting.');
});

client.on('message', message => {
    if(message.content.toLowerCase()===`${prefix}ping`) {
        message.channel.send('pong')
    }
});