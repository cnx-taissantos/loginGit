/// <reference types="cypress" />

describe('login git', () => {

    beforeEach(() => {
        cy.visit('https://github.com/');

    })
    
    it('login with sucess', () => {

        cy.contains('Sign in').click({force:true})
        cy.get('#login_field').type('testecom')
        cy.get('#password').type('teste')
        cy.get('input[type=submit]').click()
        //cy.get('[data-hotkey="g p"]').click({ force: true })//
        cy.get('[href="/new"]').click({force:true})
        cy.get('#repository_name').type('automationBYteste2')
        cy.get('.btn-primary').click()
        cy.get('#settings-tab').click()
        cy.contains('Delete this repository').click({force:true})
        cy.get('.Box-body > form > p > .form-control').click({force:true})
        cy.get('.Box-body > form > p > .form-control').type('tais533/automationBYteste2')
        cy.get('.Box-body > form > .btn-danger').click()

        cy.get(':nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a').click()
        cy.get('#settings-tab').click()
        cy.contains('Delete this repository').click({force:true})
        cy.get('.Box-body > form > p > .form-control').click({force:true})
        cy.get('.Box-body > form > p > .form-control').type('tais533/automationsbjsss')
        cy.get('.Box-body > form > .btn-danger').click()

        cy.get(':nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a').click()
        cy.get('#settings-tab').click()
        cy.contains('Delete this repository').click({force:true})
        cy.get('.Box-body > form > p > .form-control').click({force:true})
        cy.get('.Box-body > form > p > .form-control').type('tais533/automationsbjss')
        cy.get('.Box-body > form > .btn-danger').click()
        
        cy.get(':nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a').click()
        cy.get('#settings-tab').click()
        cy.contains('Delete this repository').click({force:true})
        cy.get('.Box-body > form > p > .form-control').click({force:true})
        cy.get('.Box-body > form > p > .form-control').type('tais533/automationsbjs')
        cy.get('.Box-body > form > .btn-danger').click()

        cy.get(':nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a').click()
        cy.get('#settings-tab').click()
        cy.contains('Delete this repository').click({force:true})
        cy.get('.Box-body > form > p > .form-control').click({force:true})
        cy.get('.Box-body > form > p > .form-control').type('tais533/automationss')
        cy.get('.Box-body > form > .btn-danger').click()

        cy.get(':nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a').click()
        cy.get('#settings-tab').click()
        cy.contains('Delete this repository').click({force:true})
        cy.get('.Box-body > form > p > .form-control').click({force:true})
        cy.get('.Box-body > form > p > .form-control').type('tais533/automations')
        cy.get('.Box-body > form > .btn-danger').click() 

       /* cy.getCookie('user_session').should('not.be.empty')*/
        
        
    })
   /* it('Create new repository', () => {

        cy.contains('btn btn-sm btn-primary').click({force:true})
        cy.get('repository[name]').type('automation test')
        cy.get('data-view-component[type=submit]').click()
        

       // cy.getCookie('user_session').should('not.be.empty')//
        
        
    })*/
    
}); 


