import { LibsExceptions } from './../../models/LibsExceptions';
import * as _ from 'lodash';
import 'reflect-metadata';
import { inject, provide } from '../../container/ioc';
import BaseService from '../../models/BaseService';
import Repository from './Repository';

@provide('PostsService')
export default class Service extends BaseService {
    constructor(
        @inject('PostsRepository') private repository: Repository) { super(); }

    public async findUserAllPosts(userId: number): Promise<any> {
        return this.repository.findUserAllPosts(userId);
    }
}
