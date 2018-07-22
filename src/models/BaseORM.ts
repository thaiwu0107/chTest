import 'reflect-metadata';

import { inject } from 'inversify';
import * as Sequelize from 'sequelize';
import { provide } from '../container/ioc';
import MysqlManager from '../microServices/MysqlManager';

@provide('BaseORM')
export default abstract class BaseORM {
    protected abstract setupDefine();
    public abstract getDefine(): Sequelize.Model<{}, {}>;
    protected define: Sequelize.Model<{}, {}>;
    constructor(@inject('MysqlManager') protected mysqlManager: MysqlManager) {
        this.mysqlManager.init();
        this.setupDefine();
    }
}
