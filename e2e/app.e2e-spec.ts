import { Angular2App2Page } from './app.po';

describe('angular2-app2 App', () => {
  let page: Angular2App2Page;

  beforeEach(() => {
    page = new Angular2App2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
