import { commands } from './commands.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { config } from '../config/discord.js';


const rest = new REST({ version: '9' }).setToken(config.TOKEN);

const registerCommands = async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(config.GUILD_ID, config.CLIENT_ID),
      { body: commands },
    );
  }
  catch (err) {
    console.error(err);
  }
};


export {
  registerCommands
};
