import { AngularTeslaRangeCalculatorPage } from './app.po';

describe('angular-tesla-range-calculator App', function() {
  let page: AngularTeslaRangeCalculatorPage;

  beforeEach(() => {
    page = new AngularTeslaRangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
