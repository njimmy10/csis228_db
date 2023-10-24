const {DataTypes} = require('sequelize');
const sequelize = require('../database/configsequelize');
const Post = require('./Post');

const User = sequelize.define('User', {
    USER_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    USER_FULL_NAME: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    USER_EMAIL: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    USER_PASSWORD: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    USER_DOB: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    USER_USERNAME: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    USER_PROFILE_PICTURE: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    USER_BIO: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    USER_CREATED_AT: {
        type: DataTypes.DATE,
        allowNull: false
    },
    USER_UPDATED_AT: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
            {name: "USER_ID"},
        ]
    }, ]
});

User.associations = () => {
    User.hasMany(Post, {
        foreignKey: 'POST_USER_ID',
        as: 'posts'
    })
}

User.sync()



module.exports = User;

