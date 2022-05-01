import fs from 'fs';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { config } from './config/discord.js';


export const registerCommands = async (client) => {
  try {
    const commands = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = await import (`./commands/${file}`);
      commands.push(command.data.toJSON());
      client.commands.set(command.data.name, command);
    }
    
    const rest = new REST({ version: '9' }).setToken(config.TOKEN);
    await rest.put(
      Routes.applicationGuildCommands(config.GUILD_ID, config.CLIENT_ID),
      { body: commands },
    );
  } catch (err) {
    console.error(err);
  }
};
