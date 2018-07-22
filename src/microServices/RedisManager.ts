import * as Redis from 'ioredis';
import * as _ from 'lodash';
import 'reflect-metadata';
import { provide } from '../container/ioc';

@provide('RedisManger')
export default class RedisManger {
    // 這次考試沒有要用到先遮蔽
    protected redis = {} as any;
    // new Redis('redis://h:pcdd8e5327bca3986bb6149fb6bc58104e388b8d1c8ca295cb4cabfaf0407b4b1@ec2-52-5-128-246.compute-1.amazonaws.com:36069');
    constructor() {
        const changePromis: any = this.redis;
        changePromis.Promise = global.Promise;
    }
    public async set(k: string, v: any, ex?: number) {
        if (_.isUndefined(ex)) {
            return this.redis.set(k, v);
        } else {
            await this.redis.set(k, v);
            return this.redis.expire(k, ex);
        }
    }
    public async get(k: string) {
        return this.redis.get(k);
    }
    public async incr(k: string) {
        return this.redis.incr(k);
    }
}
