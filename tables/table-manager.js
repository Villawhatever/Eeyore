import { TableRepository } from "./dal.js";

const repo = TableRepository;

export const TableManager = {
  add(tableNumber, messageId) {
    repo.add(tableNumber, messageId);
  },

  find(tableNumber) {
    return repo.find(tableNumber);
  },

  addExtension(tableNumber, time) {
    repo.addExtension(tableNumber, time);
  }
}
