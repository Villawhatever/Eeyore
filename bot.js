import { Client, Intents } from 'discord.js';
import { handleCommand } from './commands/commands.js';
import { registerCommands } from './commands/command-registration.js';
import { config } from './config/discord.js'


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
registerCommands();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  handleCommand(interaction);
});

client.login(config.TOKEN);
