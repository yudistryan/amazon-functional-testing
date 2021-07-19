module.exports = {
    url: shared.page.electronic,

    elements: {
        tvv: by.xpath("//span[contains(text(),'Television & Video')]"),
        tv: by.xpath("//span[@class='a-size-base a-color-base'][normalize-space()='Televisions']"),
        u32: by.xpath("//li[@id='p_n_size_browse-bin/1232879011']//i[@class='a-icon a-icon-checkbox']"),
        sortBtn: by.xpath("//span[@class='a-button-inner']"),
        lowHigh: by.xpath("//a[normalize-space()='Price: Low to High']"),
        m2017: by.xpath("//li[@id='p_n_feature_nine_browse-bin/16591230011']//i[@class='a-icon a-icon-checkbox']"),
        maxprice: by.xpath("//input[@id='high-price']"),
        submit: by.xpath("//input[@class='a-button-input']")
    },

    performTvv: function () {
        var selector = page.filter.elements.tvv;
        return driver.findElement(selector).click();
    },

    performTv: function (){
        var selector = page.filter.elements.tv;
        return driver.findElement(selector).click();
    },

    performU32: function (){
        var selector = page.filter.elements.u32;
        return driver.findElement(selector).click();
    },

    performSort: function (){
        var btn = page.filter.elements.sortBtn;
        var lowhigh = page.filter.elements.lowHigh;
        driver.findElement(btn).click();
        return driver.findElement(lowhigh).click();
    },

    performM17: function (){
        var m17 = page.filter.elements.m2017;
        return driver.findElement(m17).click();
    },

    performLess150: function (){
        var l150 = page.filter.elements.maxprice;
        var submit = page.filter.elements.submit;
        driver.findElement(l150).click();
        driver.findElement(l150).sendKeys(shared.keyword.max_price);
        return driver.findElement(submit).click();
    }


}