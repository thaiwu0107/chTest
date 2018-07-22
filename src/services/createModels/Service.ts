import * as _ from 'lodash';
import 'reflect-metadata';
import { inject, provide } from '../../container/ioc';
import BaseService from '../../models/BaseService';
import { LibsExceptions } from '../../models/LibsExceptions';
import Repository from './Repository';

@provide('CreateService')
export default class Service extends BaseService {
    constructor(
        @inject('CreateRepository') private repository: Repository) { super(); }

    public async create(): Promise<any> {
        return this.repository.checkDB()
            .then(() => {
                return this.repository.createUserTable();
            })
            .then(() => {
                return this.repository.createPostTable();
            })
            .then(() => {
                return this.repository.createLikeTable();
            })
            .then(() => {
                return {
                    message: 'ok'
                };
            })
            .catch((err) => {
                throw new LibsExceptions(9001, err.message);
            });
    }
}
