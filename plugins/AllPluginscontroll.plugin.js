/**
 * @name @ All Plugin Controll
 * @author K3NOXOFFICIAL
 * @version 1
 * @description This Plugin Turns on / off all Plugins at Once!
 * @source https://github.com/K3NOXOFFICIAL
 */



module.exports = class PluginName {
  start() {
    BdApi.Plugins.getAll().forEach((plugin) => BdApi.Plugins.enable(plugin));
  }

  stop() {
    BdApi.Plugins.getAll().forEach((plugin) => BdApi.Plugins.disable(plugin));
  }
};
