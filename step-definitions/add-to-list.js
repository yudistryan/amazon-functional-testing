module.exports = function () {
    this.Given(/^I enter Amazon website$/, function () {
            helpers.loadPage(shared.page.home)        
        });

    this.Given(/^I search for N item in electronics category$/, function ( ) {
            driver.then(function(){
                page.top.performCtg();
                page.top.performFill();
                page.top.performSubmit();
            })
        });  
    
    this.Given(/^I click the television and video subcategory$/, function () {
            return driver.findElements(by.xpath(shared.element.selectedElec))
                .then(function(elements){
                    expect(elements.length).to.equal(1);
                    page.filter.performTvv();
                })
        });

    this.Given(/^I click the television subsubcategory$/, function () {
            return driver.findElements(by.xpath(shared.element.selectedTV))
                .then(function(elements){
                    expect(elements.length).to.equal(1);
                    page.filter.performTv();
                })
        });

    this.Given(/^I click low to high for the price sort$/, function () {
            driver.then(function(){
                page.filter.performSort();
            })
        
        });
    
    this.Given(/^I click under 32 inches for the screen size filter$/, function ( ) {
            driver.manage().setTimeouts({implicit:10000});
            driver.then(function(){
                page.filter.performU32();
            })
    
        });
    
    this.Given(/^I click for 2017 model$/, function ( ) {
            driver.then(function(){
                page.filter.performM17();
            })
        });

    this.Given(/^I need product for less than 150 bucks$/, function () {
            return driver.wait(until.elementLocated(By.xpath(shared.element.maxprice)), 5000).then(function(){
                page.filter.performLess150();
            })
        });

    this.Given(/^I click the first product from the search result$/, function () {
            return driver.findElements(by.xpath(shared.element.noResult))
                .then(function(elements){
                    expect(elements.length).to.equal(0);
                    page.first.performFirst();
                })
        });
        
    this.Given(/^I click add to list$/, function () {
            driver.then(function() {
                page.addList.performAdd();
            })
        });

    this.Given(/^Website want me to sign in$/, function () {
            return driver.findElements(by.xpath(shared.element.signin))
                .then(function(elements){
                    expect(elements.length).to.equal(1);
                })
        });

    this.Given(/^I enter random username$/, function () {
            driver.then(function() {
                page.signIn.performFillEmail();
            })
        });

    this.When(/^I enter random password$/, function () {
            driver.then(function() {
                page.signIn.performFillPass();
            })
        });

    this.Then(/^I click submit$/, function () {
            driver.then(function() {
                page.signIn.performSubmit();
            })
        });
}

// use this coommand to test per feature "test": "node ./node_modules/selenium-cucumber-js/index.js -f features/add-to-list.feature",