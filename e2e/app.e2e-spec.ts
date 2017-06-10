import { ProjectMillWebPage } from './app.po';

describe('project-mill-web App', () => {
  let page: ProjectMillWebPage;

  beforeEach(() => {
    page = new ProjectMillWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
