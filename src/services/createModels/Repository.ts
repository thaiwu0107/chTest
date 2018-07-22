import 'reflect-metadata';
import { provide, inject } from '../../container/ioc';
import BaseRepository from '../../models/BaseRepository';
import User from '../../models/orm/User';
import Post from '../../models/orm/Post';
import Like from '../../models/orm/Like';

@provide('CreateRepository')
export default class Repository extends BaseRepository {
    @inject('User') private user: User;
    @inject('Post') private post: Post;
    @inject('Like') private like: Like;

    public async checkDB() {
        return this.sqlManager.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
                throw err;
            });
    }

    public async createUserTable() {
        return this.user.getDefine().sync({ force: true });
    }

    public async createPostTable() {
        return this.post.getDefine().sync({ force: true });
    }

    public async createLikeTable(): Promise<any> {
        return this.like.getDefine().sync({ force: true });
    }
}
