import 'reflect-metadata';
import * as express from "express";
import * as _ from 'lodash';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { inject, provideNamed } from '../../container/ioc';
import BaseController from '../../models/BaseController';
import BaseResponse from '../../models/BaseResponse';
import Service from './Service';

@controller('/like')
export default class LikeController extends BaseController {
    constructor(
        @inject('LikeService') private service: Service) { super(); }

    @httpPost('/')
    public async create(@request() req: express.Request, @response() res: express.Response) {
        try {
            const postID = req.body.reqData.postId;
            if (_.isUndefined(postID)) {
                res.status(400).json({ error: '必須要有postID' });
                throw { error: '必須要有postID' };
            } else {
                const rep = new BaseResponse(await this.service.createLike(postID));
                return rep;
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
            throw err;
        }
    }
}
