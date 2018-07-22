import 'reflect-metadata';
import { provide, inject } from '../../container/ioc';
import BaseRepository from '../../models/BaseRepository';
import User from '../../models/orm/User';
import Post from '../../models/orm/Post';

@provide('PostRepository')
export default class Repository extends BaseRepository {
    @inject('User') private user: User;
    @inject('Post') private post: Post;

    public async createPost(userID: number): Promise<any> {
        return this.post.getDefine().create({
            userId: userID,
            likes: 0
        }).then(() => {
            return this.post.getDefine().findAll();
        }).catch((err) => {
            throw err;
        });
    }

    public async addUserPosts(userID: number): Promise<any> {
        const user = await this.user.getDefine().findAll({
            where: {
                userID
            }
        }) as any;
        return this.user.getDefine().update({
            posts: user[0].posts + 1
        }, { where: { userID } });
    }

    public async checkUser(userID: number): Promise<any> {
        return this.user.getDefine().findAll({
            where: {
                userID
            }
        });
    }
}
