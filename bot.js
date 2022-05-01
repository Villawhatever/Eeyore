import { Client, Collection, Intents } from 'discord.js';
import { registerCommands } from './command-registration.js';
import { config } from './config/discord.js'


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

registerCommands(client);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  
  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({ content: 'Something broke', ephemeral: true});
  }
});

client.login(config.TOKEN);
