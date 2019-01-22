import {foo, bar} from './foo.css';

it('should return the key as a string', () => {
    expect(foo).toBe('foo');
});

it('should support dot notation', () => {
    expect(bar).toBe('bar');
});
