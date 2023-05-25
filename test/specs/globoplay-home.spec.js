describe('Login de usuário', async() => {
    beforeEach(async() => {
        await browser.maximizeWindow();
    });
    it('Clicar em login - usuário anônimo', async() => {
        await browser.url("https://globoplay.globo.com/");

        await browser.$("[class='user-picture-icon']").click;
        await browser.pause(1000);

        const userMenuButton = await $('[data-testid="desktop-menu-button"]');
        await userMenuButton.click();
        await browser.pause(1000);

        const enterButton = await $('//button[@class="gplay-button gplay-button--primary menu-header--anonymous__actions--action login"]');
        await enterButton.click();
        await browser.pause(1000);
    });

    it('Fazer login', async() => {
        const userLogin = await $('//input[@name="login"]');
        await userLogin.setValue("paulo.bugarim@g.globo")

        const passwordUser = await $('//input[@name="password"]');
        await passwordUser.setValue("Dayse@879344");
        await browser.pause(1000);

        const successfulSubmissionForm = $('//button[@id="login-button"]')
        await successfulSubmissionForm.click();
        await expect(successfulSubmissionForm).toHaveText('entrars')
    });
});
//a[@href="https://alf.globo.com/7049?url=https://globoplay.globo.com/"] - Entrar com operadora
//a[@href='https://vitrine.globo.com/assine/globoplay/?f_area=perfil&f_cpnt=cta&f_label=assinatura.assine_ja&url=https%3A%2F%2Fgloboplay.globo.com%2F&origemId=2299'] - Assine já