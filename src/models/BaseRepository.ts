import 'reflect-metadata';

import { inject } from 'inversify';
import * as sequelize from 'sequelize';
import { provide } from '../container/ioc';
import RedisManger from '../microServices/RedisManager';
import MysqlManager from '../microServices/MysqlManager';

@provide('BaseRepository')
export default abstract class BaseRepository {
    protected sqlManager: sequelize.Sequelize;
    constructor(
        @inject('RedisManger') protected redisManger: RedisManger,
        @inject('MysqlManager') private mysqlManager: MysqlManager) {
        this.mysqlManager.init();
        this.sqlManager = this.mysqlManager.Instance();
    }
}
