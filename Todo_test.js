Feature('Todo');

Scenario('test something',async ({ I }) => {
    I.amOnPage('https://amazon.ca');
    
    I.fillField('field-keywords', 'Barack ');
    I.pressKey('Enter');
    I.clickLink('#search > div.s-desktop-width-max.s-opposite-dir h2');

   pause();

});
