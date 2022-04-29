import dotenv from 'dotenv';


dotenv.config();
const config = {
  token: process.env.TOKEN,
  guildId: process.env.GUILD_ID,
  clientId: process.env.CLIENT_ID
}


export { config };
