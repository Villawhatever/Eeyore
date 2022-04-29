import { commands } from './commands.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import dotenv from 'dotenv';


dotenv.config();
const token = process.env.TOKEN;
const guildId = process.env.GUILD_ID;
const clientId = process.env.CLIENT_ID;

const rest = new REST({ version: '9' }).setToken(token);

const registerCommands = async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(guildId, clientId),
      { body: commands },
    );
  }
  catch (err) {
    console.error(err);
  }
};


export { registerCommands };
