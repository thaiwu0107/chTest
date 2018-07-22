import { LibsExceptions } from './../../models/LibsExceptions';
import * as _ from 'lodash';
import 'reflect-metadata';
import { inject, provide } from '../../container/ioc';
import BaseService from '../../models/BaseService';
import Repository from './Repository';

@provide('LikeService')
export default class Service extends BaseService {
    constructor(
        @inject('LikeRepository') private repository: Repository) { super(); }

    public async createLike(postID: number): Promise<any> {
        const checkId = await this.repository.checkPost(postID);
        if (_.isEmpty(checkId)) {
            throw new LibsExceptions(9001, 'no this post');
        } else {
            const post = await this.repository.createLike(postID, checkId[0].userId);
            await this.repository.addUserLikes(checkId[0].userId);
            await this.repository.addPostLikes(postID);
            return post;
        }
    }
}
