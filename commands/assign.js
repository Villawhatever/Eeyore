import { SlashCommandBuilder } from '@discordjs/builders';
import { TableManager } from '../tables/table-manager.js';
import { NAME, TABLE_NUMBER } from '../util/string-constants.js';


export const data = new SlashCommandBuilder()
  .setName('ass')
  .setDescription('Assign someone to watch a table')
  .addIntegerOption(option => option.setName(TABLE_NUMBER).setDescription('table number').setRequired(true))
  .addStringOption(option => option.setName(NAME).setDescription('person assigned to table').setRequired(true));

export const execute = async(interaction) => {
  const tableNumber = interaction.options.getInteger(TABLE_NUMBER);
  const name = interaction.options.getString(NAME);

  TableManager.assign(tableNumber, name);
  
  interaction.reply({ content: `Assigned ${name} to table ${tableNumber}.`, ephemeral: true });
}
