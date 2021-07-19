module.exports = {
    url: "",

    elements: {
        email: by.xpath("//input[@id='ap_email']"),
        emailSubmit: by.xpath("//input[@id='continue']"),
        pass: by.xpath("//input[@id='ap_password']"),
        passSubmit: by.xpath("//input[@id='signInSubmit']")
    },

    performFillEmail: function () {
        var email = page.signIn.elements.email;
        var submit = page.signIn.elements.emailSubmit;
        driver.findElement(email).click();
        driver.findElement(email).sendKeys(shared.keyword.email);
        return driver.findElement(submit).click();
    },

    performFillPass: function (){
        var pass = page.signIn.elements.pass;
        driver.findElement(pass).click();
        return driver.findElement(pass).sendKeys(shared.keyword.email);
    },

    performSubmit: function (){
        var submit = page.signIn.elements.passSubmit;
        return driver.findElement(submit).click();
    }


}