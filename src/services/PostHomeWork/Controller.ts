import 'reflect-metadata';
import * as express from "express";
import * as _ from 'lodash';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { inject, provideNamed } from '../../container/ioc';
import BaseController from '../../models/BaseController';
import BaseResponse from '../../models/BaseResponse';
import Service from './Service';

@controller('/post')
export default class PosteController extends BaseController {
    constructor(
        @inject('PostService') private service: Service) { super(); }

    @httpPost('/')
    public async create(@request() req: express.Request, @response() res: express.Response) {
        try {
            const userID = req.body.reqData.userId;
            if (_.isUndefined(userID)) {
                res.status(400).json({ error: '必須要有userID' });
                throw { error: '必須要有userID' };
            } else {
                const rep = new BaseResponse(await this.service.createPost(userID));
                return rep;
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
            throw err;
        }
    }
}
