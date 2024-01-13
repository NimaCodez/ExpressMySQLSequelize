const { Model, DataTypes: d } = require('sequelize');
const { seq } = require('../config/mysql.config');

class Devices extends Model {}

Devices.init(
    {
        id: {
            type: d.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        IP: {
            type: d.STRING,
            allowNull: false,
        },
        lastLoginTime: {
            type: d.DATE,
            allowNull: false,
        },
        deviceInfo: {
            type: d.STRING,
            allowNull: false,
        },
        userAgent: {
            type: d.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: seq,
        createdAt: true,
        updatedAt: true,
        timestamps: true,
        tableName: 'Devices',
        indexes: [
            {
                fields: ['id'],
                unique: true,
                type: 'UNIQUE',
            },
        ],
    },
);
