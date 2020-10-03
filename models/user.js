'use strict';
const {
    Model
} = require('sequelize');
const isAfter = require('date-fns/isAfter');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'first_name',
            validate: {
                notNull: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'last_name',
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        isMale: {
            type: DataTypes.BOOLEAN,
            field: 'is_male',
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: true,
                isDate: true,
                isBefore(v) {
                    if (isAfter(new Date(v), new Date())) {
                        throw new Error('birthday value is incorrect: \n' +
                            'the value must be less than today\'s date')
                    }
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: true
            }
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: true
            }
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        underscored: true,
    });
    return User;
};