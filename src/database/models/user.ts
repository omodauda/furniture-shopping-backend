'use strict';
import { Model, InferAttributes, InferCreationAttributes, UUIDV4 } from 'sequelize';
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    declare id: string;
    declare is_admin: boolean;
    declare is_verified: boolean;
    declare full_name: string;
    declare email: string;
    declare password: string;
    declare photo: string | null;

    static associate(models: any) {
      // define association here
      User.hasMany(models.UserAddress, {
        sourceKey: 'id',
        foreignKey: 'user_id',
      })
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true
  });
  return User;
};