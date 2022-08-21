'use strict';
import { Model, InferAttributes, InferCreationAttributes, UUIDV4 } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class UserAddress extends Model<InferAttributes<UserAddress>, InferCreationAttributes<UserAddress>> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    declare id: string;
    declare full_name: string;
    declare address: string;
    declare postal_code: number;
    declare country: string;
    declare city: string;

    static associate(models: any) {
      // define association here
      UserAddress.belongsTo(models.User, {
        targetKey: 'id',
        onDelete: 'CASCADE'
      });
    }
  };
  UserAddress.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserAddress',
    tableName: 'user_addresses',
    underscored: true
  });
  return UserAddress;
};