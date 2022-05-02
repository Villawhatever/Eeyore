import { TableRepository } from "./dal.js";
import { MessageEmbed } from 'discord.js';
import { buildTitle } from "../utils.js";


const repo = TableRepository;

export const TableManager = {
  add(tableNumber, message) {
    repo.add(tableNumber, message);
  },

  find(tableNumber) {
    return repo.find(tableNumber);
  },

  addExtension(tableNumber, time) {
    repo.addExtension(tableNumber, time);

    const existingTable = this.find(tableNumber);
    console.log(existingTable);
    if (!existingTable.message) return;

    const editedEmbed = new MessageEmbed()
      .setTitle(buildTitle(tableNumber));

    existingTable.message.edit({ embeds: [editedEmbed] });
  }
}
