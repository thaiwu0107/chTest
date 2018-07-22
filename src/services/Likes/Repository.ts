import 'reflect-metadata';
import { provide, inject } from '../../container/ioc';
import BaseRepository from '../../models/BaseRepository';
import Like from '../../models/orm/Like';

@provide('LikesRepository')
export default class Repository extends BaseRepository {
    @inject('Like') private like: Like;

    public async findPostAlllikes(postId: number): Promise<any> {
        return this.like.getDefine().findAll({
            where: {
                postId
            }
        });
    }
}
