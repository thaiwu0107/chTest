import 'reflect-metadata';
import * as express from "express";
import * as _ from 'lodash';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { inject, provideNamed } from '../../container/ioc';
import BaseController from '../../models/BaseController';
import BaseResponse from '../../models/BaseResponse';
import Service from './Service';

@controller('/posts')
export default class PostsController extends BaseController {
    constructor(
        @inject('PostsService') private service: Service) { super(); }

    @httpGet('/:userId')
    public async findPostAlllikes(@requestParam("userId") userId: number, @response() res: express.Response) {
        try {
            if (_.isUndefined(userId)) {
                res.status(400).json({ error: '必須要有userId' });
                throw { error: '必須要有userId' };
            } else {
                const rep = new BaseResponse(await this.service.findUserAllPosts(userId));
                return rep;
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
            throw err;
        }
    }
}
