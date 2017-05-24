import { ModuloAngular2Page } from './app.po';

describe('modulo-angular2 App', () => {
  let page: ModuloAngular2Page;

  beforeEach(() => {
    page = new ModuloAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
