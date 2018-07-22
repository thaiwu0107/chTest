import { LibsExceptions } from './../../models/LibsExceptions';
import * as _ from 'lodash';
import 'reflect-metadata';
import { inject, provide } from '../../container/ioc';
import BaseService from '../../models/BaseService';
import Repository from './Repository';

@provide('PostService')
export default class Service extends BaseService {
    constructor(
        @inject('PostRepository') private repository: Repository) { super(); }

    public async createPost(userID: number): Promise<any> {
        const checkUserId = await this.repository.checkUser(userID);
        if (_.isEmpty(checkUserId)) {
            throw new LibsExceptions(9001, 'no this user');
        } else {
            const post = await this.repository.createPost(userID);
            await this.repository.addUserPosts(userID);
            return post;
        }
    }
}
