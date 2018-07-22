import 'reflect-metadata';
import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { inject, provideNamed } from '../../container/ioc';
import BaseController from '../../models/BaseController';
import BaseResponse from '../../models/BaseResponse';
import Service from './Service';

@controller('/create')
export default class CreateController extends BaseController {
    constructor(
        @inject('CreateService') private service: Service) { super(); }

    @httpPost('/')
    public async create(@request() req: express.Request, @response() res: express.Response) {
        try {
            const rep = new BaseResponse(await this.service.create());
            return rep;
        } catch (err) {
            res.status(500).json({ error: err.message });
            throw err;
        }
    }
}
