class CommandConstants {
  static TEST = 'test'
}

const commandDictionary = {}
commandDictionary[CommandConstants.TEST] = 'making sure this works'

const commands = [];
for (let key in commandDictionary) {
  commands.push({
    name: key,
    description: commandDictionary[key]
  });
};


export { CommandConstants, commands };
