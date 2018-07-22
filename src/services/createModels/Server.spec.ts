import { expect } from 'chai';
import { anything, instance, mock, reset, spy, when } from 'ts-mockito/lib/ts-mockito';
import Repository from './Repository';
import Service from './Service';

describe('CreateService', () => {
    let test: Service;
    let repository: Repository;
    let mockSelf: Service;
    let expectDone;
    const expected = (target?: any, message?: string) => {
        expectDone = true;
        return expect(target, message);
    };
    beforeEach(() => {
        expectDone = false;
        repository = mock(Repository);
        test = new Service(instance(repository));
        mockSelf = spy(test);
    });
    afterEach('這個方法有寫驗證但是沒有驗證到', () => {
        expect(expectDone).to.equal(true);
        reset(mockSelf);
        reset(repository);
    });
    describe('create()', () => {
        it('1.完整創建成功', async () => {
            // tslint:disable-next-line:no-null-keyword
            when(repository.checkDB()).thenReturn(Promise.resolve({} as any));
            when(repository.createUserTable()).thenReturn(Promise.resolve({} as any));
            when(repository.createPostTable()).thenReturn(Promise.resolve({} as any));
            when(repository.createLikeTable()).thenReturn(Promise.resolve({} as any));
            const repos = await test.create();
            expected(repos).to.deep.equal({ message: 'ok' });
        });
        it('2.createUserTable 失敗', async () => {
            when(repository.checkDB()).thenReturn(Promise.resolve({} as any));
            when(repository.createUserTable()).thenThrow(new Error('createUserTable'));
            when(repository.createPostTable()).thenReturn(Promise.resolve({} as any));
            when(repository.createLikeTable()).thenReturn(Promise.resolve({} as any));
            try {
                const repos = await test.create();
            } catch (error) {
                // console.log(error);
                expected(error.status).to.deep.equal(9001);
            }
        });
        it('3.createPostTable 失敗', async () => {
            when(repository.checkDB()).thenReturn(Promise.resolve({} as any));
            when(repository.createPostTable()).thenThrow(new Error('createPostTable'));
            when(repository.createUserTable()).thenReturn(Promise.resolve({} as any));
            when(repository.createLikeTable()).thenReturn(Promise.resolve({} as any));
            try {
                const repos = await test.create();
            } catch (error) {
                expected(error.status).to.deep.equal(9001);
            }
        });
        it('4.createLikeTable 失敗', async () => {
            when(repository.checkDB()).thenReturn(Promise.resolve({} as any));
            when(repository.createLikeTable()).thenThrow(new Error('createLikeTable'));
            when(repository.createPostTable()).thenReturn(Promise.resolve({} as any));
            when(repository.createUserTable()).thenReturn(Promise.resolve({} as any));
            try {
                const repos = await test.create();
            } catch (error) {
                expected(error.status).to.deep.equal(9001);
            }
        });
    });
});
