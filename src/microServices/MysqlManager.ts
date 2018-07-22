import { LibsExceptions } from './../models/LibsExceptions';
import * as _ from 'lodash';
import 'reflect-metadata';
import * as sequelize from 'sequelize';
import { Dbconfig } from '../config/ConfigDatabase';
import { provide } from '../container/ioc';

@provide('MysqlManager')
export default class MysqlManager {
    private sequelize;
    private constructor() { }
    public init() {
        if (_.isUndefined(this.sequelize)) {
            this.sequelize = new sequelize(Dbconfig);
        }
    }
    public Instance() {
        if (!_.isUndefined(this.sequelize)) {
            return this.sequelize;
        } else {
            throw new LibsExceptions(9001, 'mysql not init');
        }
    }
}
