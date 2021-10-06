const { SlashCommandBuilder } = require("@discordjs/builders");

/* "auto-off": This command is used to turn off the auto-unarchive feature of this bot. */

module.exports = {
  data: new SlashCommandBuilder()
    .setName("auto-off")
    .setDescription("Turns off auto-unarchiving for this thread. Just let it die, already!"),

  async execute(interaction) {
      return interaction.reply(`Hooray! You called "Auto-off!"`);
  },
  
};