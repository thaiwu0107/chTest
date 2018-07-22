import 'reflect-metadata';
import { Container, inject } from 'inversify';
import { autoProvide, fluentProvide, provide } from 'inversify-binding-decorators';


const container = new Container();
const provideNamed = (identifier, name) => {
    return fluentProvide(identifier)
        .inSingletonScope()
        .whenTargetNamed(name)
        .done(true);
};
export { container, autoProvide, provide, provideNamed, inject };
