import { SatFrontendPage } from './app.po';

describe('sat-frontend App', function() {
  let page: SatFrontendPage;

  beforeEach(() => {
    page = new SatFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sf works!');
  });
});
