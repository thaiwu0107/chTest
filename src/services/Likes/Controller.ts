import 'reflect-metadata';
import * as express from "express";
import * as _ from 'lodash';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { inject, provideNamed } from '../../container/ioc';
import BaseController from '../../models/BaseController';
import BaseResponse from '../../models/BaseResponse';
import Service from './Service';

@controller('/likes')
export default class LikesController extends BaseController {
    constructor(
        @inject('LikesService') private service: Service) { super(); }

    @httpGet('/:postId')
    public async findPostAlllikes(@requestParam("postId") postId: number, @response() res: express.Response) {
        try {
            if (_.isUndefined(postId)) {
                res.status(400).json({ error: '必須要有postID' });
                throw { error: '必須要有postID' };
            } else {
                const rep = new BaseResponse(await this.service.findPostAlllikes(postId));
                return rep;
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
            throw err;
        }
    }
}
