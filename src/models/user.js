import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;
