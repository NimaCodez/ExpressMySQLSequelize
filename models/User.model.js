const { DataTypes: d } = require('sequelize');
const { seq } = require('../config/mysql.config');

const User = seq.define(
    'User',
    {
        id: {
            type: d.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: d.STRING,
            allowNull: false,
        },
        password: {
            type: d.STRING,
            allowNull: false
        },
        projects: {
            type: d.INTEGER,
            references: {
                key: 'id',
                model: 'Projects',
            },
        },
        devices: {
            type: d.INTEGER,
            references: {
                key: 'id',
                model: 'Devices',
            },
        },
    },
    {
        indexes: [
            {
                fields: ['id'],
                unique: true,
                type: 'UNIQUE',
            },
        ],
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    },
);

module.exports = {
    User,
};
