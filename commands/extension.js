import { SlashCommandBuilder } from '@discordjs/builders';
import { TableManager } from '../tables/table-manager.js';

const TABLE_NUMBER = 'table-number';
const EXTENSION = 'extension';

export const data = new SlashCommandBuilder()
  .setName('ext')
  .setDescription('Add an extension to a table')
  .addIntegerOption(option => option.setName(TABLE_NUMBER).setDescription('table number').setRequired(true))
  .addIntegerOption(option => option.setName(EXTENSION).setDescription('extension time').setRequired(true));

export const execute = async(interaction) => {
  const tableNumber = interaction.options.getInteger(TABLE_NUMBER);
  const extension = interaction.options.getInteger(EXTENSION);

  TableManager.addExtension(tableNumber, extension);
  interaction.reply({ content: `Added ${extension}min extension to table ${tableNumber}.`, ephemeral: true });
}
