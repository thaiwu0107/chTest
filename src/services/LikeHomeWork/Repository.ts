import 'reflect-metadata';
import { provide, inject } from '../../container/ioc';
import BaseRepository from '../../models/BaseRepository';
import User from '../../models/orm/User';
import Post from '../../models/orm/Post';
import Like from '../../models/orm/Like';

@provide('LikeRepository')
export default class Repository extends BaseRepository {
    @inject('User') private user: User;
    @inject('Post') private post: Post;
    @inject('Like') private like: Like;

    public async createLike(postID: number, userID: number): Promise<any> {
        return this.like.getDefine().create({
            userId: userID, postId: postID
        }).then(() => {
            return this.post.getDefine().findAll();
        }).catch((err) => {
            throw err;
        });
    }

    public async addUserLikes(userID: number): Promise<any> {
        const user = await this.user.getDefine().findAll({
            where: {
                userID
            }
        }) as any;
        return this.user.getDefine().update({
            posts: user[0].likes + 1
        }, { where: { userID } });
    }

    public async addPostLikes(postID: number): Promise<any> {
        const post = await this.post.getDefine().findAll({
            where: {
                postID
            }
        }) as any;
        return this.post.getDefine().update({
            likes: post[0].likes + 1
        }, { where: { postID } });
    }

    public async checkUser(userID: number): Promise<any> {
        return this.user.getDefine().findAll({
            where: {
                userID
            }
        });
    }

    public async checkPost(postID: number): Promise<any> {
        return this.post.getDefine().findAll({
            where: {
                postID
            }
        });
    }
}
