import 'reflect-metadata';

import * as Sequelize from 'sequelize';
import { provide } from '../../container/ioc';
import BaseORM from '../BaseORM';

@provide('Like')
export default class Like extends BaseORM {
    protected setupDefine() {
        this.define = this.mysqlManager.Instance().define('like', {
            likeID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            postId: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
            userId: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 }
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