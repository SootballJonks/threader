//Synchronous functionality for this event

module.exports = {
  name: "threadUpdate",
  execute(interaction) {
    console.log(`threadUpdate triggered: `);
    if (!interaction.markForAuto) {
      console.log("!!Not marked for auto!!")
      return;
    }
    console.log("!!Marked for Auto!!")
    interaction.setArchived(false);
    return;
  },
};