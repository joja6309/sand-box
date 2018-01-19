import { NgCmdLinePage } from './app.po';

describe('ng-cmd-line App', function() {
  let page: NgCmdLinePage;

  beforeEach(() => {
    page = new NgCmdLinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
