const { Sequelize } = require('sequelize');
require('dotenv').config();

const seq = new Sequelize({
    dialect: 'mysql',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 3306,
    logging: console.log,
    benchmark: true,
});

const ConnectDB = async () => {
    await seq
        .authenticate()
        .then(() => console.log('Database connected...'))
        .then(() =>
            seq
                .sync({ alter: true })
                .then(() => console.log('Database synced...')),
        )
        .catch(error =>
            console.error('Unable to connect to the database: ', error),
        );
};

module.exports = {
    ConnectDB,
    seq,
};
