import * as mylib from '../src/module';

beforeEach(() => {
    console.log('beforeEach')
});

afterEach(() => {
    console.log('afterEach')
});

test('adds 1 + 2 to equal 3', () => {
    expect(mylib.sum(1, 2)).toBe(3);
});

describe('Scoped / Nested block', () => {
    
    beforeAll(() => console.log('2 - beforeAll'));
    
    afterAll(() => console.log('2 - afterAll'));

    beforeEach(() => console.log('2 - beforeEach'));
    
    afterEach(() => console.log('2 - afterEach'));
  
    test('', () => console.log('2 - test'));
});