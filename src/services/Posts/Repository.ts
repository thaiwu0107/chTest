import 'reflect-metadata';
import { provide, inject } from '../../container/ioc';
import BaseRepository from '../../models/BaseRepository';
import Post from '../../models/orm/Post';

@provide('PostsRepository')
export default class Repository extends BaseRepository {
    @inject('Post') private post: Post;

    public async findUserAllPosts(userId: number): Promise<any> {
        return this.post.getDefine().findAll({
            where: {
                userId
            }
        });
    }
}
