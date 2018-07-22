import { LibsExceptions } from './../../models/LibsExceptions';
import * as _ from 'lodash';
import 'reflect-metadata';
import { inject, provide } from '../../container/ioc';
import BaseService from '../../models/BaseService';
import Repository from './Repository';

@provide('LikesService')
export default class Service extends BaseService {
    constructor(
        @inject('LikesRepository') private repository: Repository) { super(); }

    public async findPostAlllikes(postId: number): Promise<any> {
        return this.repository.findPostAlllikes(postId);
    }
}
