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
    if (!existingTable.message) return;

    const editedEmbed = new MessageEmbed()
      .setTitle(buildTitle(tableNumber))
      .setColor(existingTable.message.embeds[0].color);

    existingTable.message.edit({ embeds: [editedEmbed] });
  },

  assign(tableNumber, name) {
    repo.assign(tableNumber, name);

    const existingTable = this.find(tableNumber);
    if (!existingTable.message) return;

    const editedEmbed = new MessageEmbed()
      .setTitle(buildTitle(tableNumber))
      .setColor(existingTable.message.embeds[0].color);

    existingTable.message.edit({ embeds: [editedEmbed] });
  }
}
