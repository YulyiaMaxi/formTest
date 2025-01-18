
describe('Тест формы', () => {
    it('Тест с вводом валидных значений', () => {

        cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template'); 
        cy.get('.input.textfield___c13e5c354deb256560e7').eq(0)
          .scrollIntoView()
          .should('be.visible'); 

        cy.get('.input.textfield___c13e5c354deb256560e7').eq(0)
          .type('Юлия');
        cy.get('.input.textfield___c13e5c354deb256560e7').eq(1)
          .type('yulia@mail.ru');
        cy.get('.input.textfield___c13e5c354deb256560e7').eq(2)
          .type('89166065820');

        cy.get('.title_bb675eac964120e07a92').contains('Заказ');

        cy.get('.input.textfield___c13e5c354deb256560e7').eq(2)
          .type('Где мой заказ?');

        cy.get('.button.button_fd25a2fb454e3f726adc.blue_f42ee3b7578def392092.fluid___b8ec6d1bc6ffd588c6ef')
          .click()
          .then(() => {
              cy.contains('Благодарим за обращение!') 
                .should('be.visible')
                .then(() => {
                    console.log('Форма успешно отправлена');
                });
          });
    });
});
    
