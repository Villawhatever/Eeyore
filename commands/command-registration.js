import { commands } from './commands.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { config } from '../env-config.js'


const rest = new REST({ version: '9' }).setToken(config.token);

const registerCommands = async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(config.guildId, config.clientId),
      { body: commands },
    );
  }
  catch (err) {
    console.error(err);
  }
};


export { registerCommands };
