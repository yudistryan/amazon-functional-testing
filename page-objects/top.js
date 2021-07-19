module.exports = {
    url: shared.page.electronic,

    elements: {
        searchInput: by.xpath("//input[@id='twotabsearchtextbox']"),
        searchBtn: by.xpath("//input[@id='nav-search-submit-button']"),
        categories: by.xpath("//select[@id='searchDropdownBox']"),
        electronic: by.xpath("//option[@value='search-alias=electronics-intl-ship']")
    },

    performFill: function () {
        var selector = page.top.elements.searchInput;
        driver.findElement(selector).click();
        return driver.findElement(selector).sendKeys(shared.keyword.pro_name);
    },

    performCtg: function (){
        var ctg = page.top.elements.categories;
        var elec = page.top.elements.electronic;
        driver.findElement(ctg).click();
        return driver.findElement(elec).click();
    },

    performSubmit: function (){
        var selector = page.top.elements.searchBtn;
        return driver.findElement(selector).click();
    }


}