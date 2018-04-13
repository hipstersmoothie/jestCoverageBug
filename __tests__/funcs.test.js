import * as funcs from '../src/hasFunctions'

test('foo', () => {
    expect(funcs.foo()).toEqual('foo')
});

test('bar', () => {
    expect(funcs.bar()).toEqual('bar')

});

test('baz', () => {
    expect(funcs.baz()).toEqual('baz')
});
