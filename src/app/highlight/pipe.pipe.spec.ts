import { PipePipe } from './pipe.pipe';

describe('PipePipe', () => {
  it('create an instance', () => {
    const pipe = new PipePipe();
    expect(pipe).toBeTruthy();
  });
});

// ng build --prod --base-href "https://Kingsly62.github.io/Github-Api/" 
// npx angular-cli-ghpages --dir=dist/Github-Api
