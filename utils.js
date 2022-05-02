import { TableManager } from "./tables/table-manager.js";

export function buildTitle(tableNumber) {
  let table = TableManager.find(tableNumber);
  let title = `Table ${tableNumber}`;
  if (table && table.extension > 0) {
    title += ` | ${table.extension}min extension`;
  }
  if (table && table.assigned) {
    title += ` | ${table.assigned}`;
  }
  return title;
}