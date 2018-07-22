import 'reflect-metadata';
import { provide, inject } from '../../container/ioc';
import BaseRepository from '../../models/BaseRepository';
import User from '../../models/orm/User';

@provide('UserRepository')
export default class Repository extends BaseRepository {
    @inject('User') private user: User;

    public async createUser(): Promise<any> {
        return this.user.getDefine().create({
            posts: 0,
            likes: 0
        }).then(() => {
            return this.user.getDefine().findAll();
        }).catch((err) => {
            throw err;
        });
    }
}
