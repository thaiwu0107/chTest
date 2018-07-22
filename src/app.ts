import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import './container/ioc-loader';
import * as cors from 'cors';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './container/ioc';
import { buildProviderModule } from 'inversify-binding-decorators';

container.load(buildProviderModule());
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);
// server.build().listen(3000);
console.log('Server started on port 3000 :)');
