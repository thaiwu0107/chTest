import 'reflect-metadata';

import * as Sequelize from 'sequelize';
import { provide } from '../../container/ioc';
import BaseORM from '../BaseORM';

@provide('Post')
export default class Post extends BaseORM {
    protected setupDefine() {
        this.define = this.mysqlManager.Instance().define('post', {
            postID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            userId: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
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