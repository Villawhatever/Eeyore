import { Client, Intents } from 'discord.js';
import { CommandConstants } from './commands/commands.js';
import { registerCommands } from './commands/command-registration.js';
import dotenv from 'dotenv';


dotenv.config();
const token = process.env.TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
registerCommands();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === CommandConstants.TEST) {
    await interaction.reply('Test worked');
  }
});

client.login(token);
