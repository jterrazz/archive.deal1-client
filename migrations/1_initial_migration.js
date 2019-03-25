const Migrations = artifacts.require("Migrations");

module.exports = function migrate(deployer) {
  deployer.deploy(Migrations);
};
