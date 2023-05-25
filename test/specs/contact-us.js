describe('webdriveruniversity - contact us page', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
    });

    it('valid submission - submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html');
        const firstName = await $('//*[@name="first_name"]');
        const lastName = await $('//*[@name="last_name"]');
        const emailAddress = await $('//*[@name="email"]');
        const message = await $('//*[@name="message"]');
        const submitButton = await $('//input[@value="SUBMIT"]');

        await firstName.setValue("Paulo");
        await lastName.setValue("Bugarim");
        await emailAddress.setValue("pbugarim@gmail.com");
        await message.setValue("Olá, enfermeira!");
        await submitButton.click();

        const successfulSubmissionHeader = $('#contact_reply > h1');
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');
    });

    it('invalid submission - dont submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html');

        const firstName = await $('//*[@name="first_name"]');
        await firstName.setValue("Henrique");

        const lastName = await $('//*[@name="last_name"]');
        await lastName.setValue("Martins");

        const message = await $('//*[@name="message"]');
        await message.setValue("Hello world!");

        const submitButton = await $('//input[@value="SUBMIT"]');
        await submitButton.click();

        const successfulSubmissionHeader = $('body');
        await expect(successfulSubmissionHeader).toHaveTextContaining(['Error: all fields are required', 'Error: Invalid email address']);

    });
});