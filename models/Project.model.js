const { DataTypes: d, Model } = require('sequelize');
const { seq } = require('../config/mysql.config');
// const { User } = require('./User.model');

// const Project = seq.define('project', {
//     id: {
//         type: d.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     title: {
//         type: d.STRING,
//         allowNull: false,
//     },
//     description: {
//         type: d.STRING,
//         allowNull: false,
//     },
//     status: {
//         type: d.ENUM('open', 'closed', 'paused'),
//         defaultValue: 'open',
//     },
//     location: {
//         type: d.STRING,
//         allowNull: false,
//     },
//     gender: {
//         type: d.ENUM('Male', 'Female', 'Male & Female'),
//         allowNull: false,
//     },
// }, {
//     createdAt: true,
//     indexes: [
//         {
//             fields: ['id'],
//             unique: true,
//             type: 'UNIQUE',
//         }
//     ],
//     timestamps: true,
//     updatedAt: true,
// });

class Project extends Model {}

Project.init(
    {
        id: {
            type: d.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: d.STRING,
            allowNull: false,
        },
        description: {
            type: d.STRING,
            allowNull: false,
        },
        status: {
            type: d.ENUM('open', 'closed', 'paused'),
            defaultValue: 'open',
        },
        location: {
            type: d.STRING,
            allowNull: false,
        },
        gender: {
            type: d.ENUM('Male', 'Female', 'Male & Female'),
            allowNull: false,
        },
        author: {
            type: d.INTEGER,
            references: {
                key: 'id',
                model: 'Users',
            },
            allowNull: false,
        },
    },
    {
        sequelize: seq,
        createdAt: true,
        indexes: [
            {
                fields: ['id'],
                unique: true,
                type: 'UNIQUE',
            },
        ],
        timestamps: true,
        updatedAt: true,
    },
);

module.exports = { Project };
