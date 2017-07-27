import { EnglishWordsMeaningPage } from './app.po';

describe('english-words-meaning App', () => {
  let page: EnglishWordsMeaningPage;

  beforeEach(() => {
    page = new EnglishWordsMeaningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
