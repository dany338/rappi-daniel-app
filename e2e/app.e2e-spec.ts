import { RappiDanielAppPage } from './app.po';

describe('rappi-daniel-app App', function() {
  let page: RappiDanielAppPage;

  beforeEach(() => {
    page = new RappiDanielAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
