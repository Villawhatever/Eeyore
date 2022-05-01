let tables = [];

export const TableRepository = {
  add(tableNumber, messageId) {
    const table = this.find(tableNumber);
    if (table) {
      table.messageId = messageId;
    } else {
      tables.push({
        tableNumber: tableNumber,
        messageId: messageId
      });
    }
  },

  find(tableNumber) {
    return tables.find(x => x.tableNumber == tableNumber);
  },

  addExtension(tableNumber, time) {
    const table = this.find(tableNumber);
    if (table) {
      table.extension += time;
    } else {
      tables.push({
        tableNumber: tableNumber,
        extension: time
      });
    }
  },

  clear() {
    tables = [];
  }
}
