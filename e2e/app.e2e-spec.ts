import { HappyworkPage } from './app.po';

describe('happywork App', function() {
  let page: HappyworkPage;

  beforeEach(() => {
    page = new HappyworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
