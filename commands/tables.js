import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { TableManager } from '../tables/table-manager.js';

const TABLE_NUMBERS = 'table-numbers';

export const data = new SlashCommandBuilder()
  .setName('tables')
  .setDescription('outstanding table numbers')
  .addStringOption(option => option.setName(TABLE_NUMBERS).setDescription('a space- or comma-separated list of table numbers'));

export const execute = async(interaction) => {
  const nums = interaction.options.getString(TABLE_NUMBERS);
  const tables = nums.split(/[\s,]+/).sort(function(a, b){return a-b});

  tables.map(t => {
    const tableNumber = Number(t);
    const tableEmbed = new MessageEmbed()
      .setColor('#ffffff')
      .setTitle(buildTitle(tableNumber));

    interaction.channel.send({embeds: [tableEmbed]}).then(msg => {
      TableManager.add(tableNumber, msg.channelId, msg.id);
      msg.react('✅')
        .then(() => msg.react('🚫'));
    });
  });
  interaction.reply({ content: `Created ${tables.length} tables.`, ephemeral: true });
}

function buildTitle(tableNumber) {
  let table = TableManager.find(tableNumber);
  let title = `Table ${tableNumber}`;
  if (table && table.extension > 0) {
    title = `${title} | ${table.extension}min extension`;
  }
  return title
}