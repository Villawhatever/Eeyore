let tables = [];
let assigned = [];

export const TableRepository = {
  add(tableNumber, message) {
    const table = this.find(tableNumber);
    if (table) {
      table.message = message;
    } else {
      tables.push({
        tableNumber: tableNumber,
        message: message,
        extension: 0
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

  assign(tableNumber, name) {
    const table = this.find(tableNumber);
    if (!assigned.includes(name)) {
      assigned.push(name);
    }
    if (table) {
      table.assigned = name;
    }
  },

  clear() {
    tables = [];
  }
}
