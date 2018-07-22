import * as _ from 'lodash';
import 'reflect-metadata';
import { inject, provide } from '../../container/ioc';
import BaseService from '../../models/BaseService';
import { LibsExceptions } from '../../models/LibsExceptions';
import Repository from './Repository';

@provide('UserService')
export default class Service extends BaseService {
    constructor(
        @inject('UserRepository') private repository: Repository) { super(); }

    public async createUser(): Promise<any> {
        return this.repository.createUser();
    }
}
