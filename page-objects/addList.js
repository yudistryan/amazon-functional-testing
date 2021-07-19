module.exports = {
    url: "",

    elements: {
        addBtn: by.xpath("//a[normalize-space()='Add to List']")
    },

    performAdd: function () {
        var selector = page.addList.elements.addBtn;
        return driver.findElement(selector).click();
    }


}