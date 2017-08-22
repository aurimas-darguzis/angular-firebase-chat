import { AngularFirebaseChatPage } from './app.po';

describe('angular-firebase-chat App', () => {
  let page: AngularFirebaseChatPage;

  beforeEach(() => {
    page = new AngularFirebaseChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
