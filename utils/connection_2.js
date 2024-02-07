const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize('login_osgg', "onetap_web", "4oZpqfZHwYXfLfCO1fg4yTAb37GJMG8U", {
    host: "dpg-cn0f6c8l5elc73ejb14g-a",
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