import { NgReactiveFormPage } from './app.po';

describe('ng-reactive-form App', () => {
  let page: NgReactiveFormPage;

  beforeEach(() => {
    page = new NgReactiveFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
