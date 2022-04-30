class CommandConstants {
  static TEST = 'test'
}

const commandDictionary = {};
commandDictionary[CommandConstants.TEST] = 'making sure this works';

const commands = Object.entries(commandDictionary).map(e => ({name: e[0], description: e[1]}));

const handleCommand = async(interaction) => {
  if (interaction.commandName === CommandConstants.TEST) {
    await interaction.reply('Test worked');
  }
};


export { 
  CommandConstants,
  handleCommand,
  commands
};
