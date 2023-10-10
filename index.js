require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
  console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false
});

client.on('ready', async () => {

  const rpc = new Discord.RichPresence()
    .setApplicationId('534203414247112723')
    .setType('STREAMING')
    .setURL(`https://www.youtube.com/watch?v=z9rBnWnSjLM`)
    .setDetails(`vampchurch`)
    .setName(`vampchurch`)
  
  client.user.setActivity(rpc.toJSON());

  console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN); 