//------------IMPORTS-------------------
const fs = require("fs");
const { Client, Collection, Intents } = require('discord.js');
const { token } = require("./config.json");

//Client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//-------------EVENT LOGIC--------------

const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);

  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}


//--------SLASH COMMANDS LOGIC----------

client.commands = new Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

//--------------------------------------



client.login(token);