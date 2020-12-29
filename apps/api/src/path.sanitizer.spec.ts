import { sanitize } from './path.sanitizer';

describe('sanitize', () => {
  it('should throw then path is below root path', () => {
    expect(() => sanitize('/a/b/c', '../d')).toThrowError();
  });

  it('should return a resolved path', () => {
    expect(sanitize('/a/b/c', 'd/e/.././f')).toEqual('/a/b/c/d/f');
  });
});
