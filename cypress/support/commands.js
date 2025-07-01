// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
//     cy.get('#firstName').type(data.firstName);
//     cy.get('#lastName').type(data.lastName);
//     cy.get('#email').type(data.email);
//     cy.get('#open-text-area').type(data.text);

//     cy.get('.button').click();
// });

Cypress.Commands.add(
    'fillMandatoryFieldsAndSubmit',
    (
        data = {
            firstName: 'Usuário',
            lastName: 'Padrão',
            email: 'user@padrao.com',
            text: 'Mensagem do usuário padrão Teste',
        }
    ) => {
        cy.get('#firstName').type(data.firstName);
        cy.get('#lastName').type(data.lastName);
        cy.get('#email').type(data.email);
        cy.get('#open-text-area').type(data.text);

        cy.contains('button', 'Enviar').click();
    }
);
