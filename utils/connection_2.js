const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize('login', "postgres", "miha50544Ki", {
    host: "localhost",
    dialect: "postgres"
});

async function testConnection() {
   try {
    await sequelize.authenticate();
    console.log("Successfully")
    return true;
   } catch (error) {
    console.error("Unable to connect", error);
    return false;
   }

}
module.exports = {sequelize, testConnection}