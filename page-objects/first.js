module.exports = {
    url: shared.page.tv,

    elements: {
        firstProduct: by.xpath("//a[@class='a-link-normal a-text-normal']")
    },

    performFirst: function () {
        var selector = page.first.elements.firstProduct;
        return driver.findElement(selector).click();
    }


}