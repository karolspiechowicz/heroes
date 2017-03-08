import { AngularExamplesMasterPage } from './app.po';

describe('angular-examples-master App', function() {
  let page: AngularExamplesMasterPage;

  beforeEach(() => {
    page = new AngularExamplesMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
