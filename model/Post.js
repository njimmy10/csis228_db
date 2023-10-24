const {DataTypes} = require('sequelize');
const sequelize = require('../database/configsequelize');
const User = require('./User');

const Post = sequelize.define('Post', {
    POST_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    POST_TITLE: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    POST_CONTENT: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    POST_CREATED_AT: {
        type: DataTypes.DATE,
        allowNull: false
    },
    POST_UPDATED_AT: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'posts',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
            {name: "POST_ID"},
        ]
    }, ]
});

Post.associations = () => {
    Post.belongsTo(User, {
        foreignKey: 'USER_ID',
        as: 'user'
    })
}



module.exports = Post;