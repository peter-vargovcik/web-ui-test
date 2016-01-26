/**
 * Created by PeterVargovcik on 25/01/2016.
 */
casper.start('index.html', function () {
    this.test.assertExists('input[name=name]');
    this.capture('FirstPage.png');
})
casper.then(function () {
    this.fill('form', {
        'name': 'scream'
    }, true);
    this.capture('FirstPageWithTextInForm.png');
})
/*
casper.then(function () {
    this.click('#trigger');
    this.capture('trigger.png');
})
*/
casper.then(function () {
    this.test.assertSelectorHasText('h1', 'The H1');
    this.capture('EchoPage.png');
})
casper.run(function () {
    this.test.done();
})