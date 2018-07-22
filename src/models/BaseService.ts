import 'reflect-metadata';
import { provide } from '../container/ioc';

@provide('BaseService')
export default abstract class BaseService {
}
