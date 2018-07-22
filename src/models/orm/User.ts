import 'reflect-metadata';

import * as Sequelize from 'sequelize';
import { provide } from '../../container/ioc';
import BaseORM from '../BaseORM';

@provide('User')
export default class User extends BaseORM {
    protected setupDefine() {
        this.define = this.mysqlManager.Instance().define('user', {
            userID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            posts: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
            likes: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 }
        }, {
                // 不要添加时间戳属性 (updatedAt, createdAt)
                timestamps: false,
                freezeTableName: true
            }
        );
    }

    public getDefine() {
        return this.define;
    }
}