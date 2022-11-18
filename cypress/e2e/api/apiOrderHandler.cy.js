import {getTestApiHost} from "../../support/configuration";

describe('Api tests', () => {

    it('GET /api/order', () => {
        cy.request(getTestApiHost() + '/api/order').as('todoRequest');
        cy.get('@todoRequest').then(body => {
            expect(body.status).to.eq(200);
        });
    });
    //
    //
    // it('Correct request to create pizza with topping', () => {
    //     cy.log('0000')
    //     cy.request({
    //         method: 'POST',
    //         url: getTestApiHost() + '/api/order',
    //         failOnStatusCode : false, //While ignoring the error, because I did not figure out how to work with the helper getOrderId()
    //         body: {
    //             pizzas: {
    //                 size: "small",
    //                 toppings: ["cheese"]
    //             },
    //
    //             // orderId: cy.getOrderId().body.orderId It doesn't work :(
    //
    //         }
    //         }).then( ({ body }) => {
    //             expect(body['success']).to.eq(true)
    //         })
    // });
    //
    // it('Incorrect request to create pizza without pizza-data', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: getTestApiHost() + '/api/order',
    //         failOnStatusCode : false, //It will be removed as soon as the problem with the order number receipt helper is solved
    //         body: {
    //
    //             orderId: "7e540994-2015-4358-8882-c57431f7d836"
    //
    //         }
    //         //Logically, such an order should not be created, but right now this request is returned as successful.
    //         // After fixing the code, you will need to support the test
    //     }).then( ({ body }) => {
    //         expect(body['success']).to.eq(true)
    //     })
    // });

    it('Incorrect request to create pizza without requestId', () => {
        cy.request({
            method: 'POST',
            url: getTestApiHost() + '/api/order',
            failOnStatusCode : false,
        }).then( ({ body }) => {
            expect(body['success']).to.eq(false)
            expect(body['error']).to.eq('INCORRECT_ORDER_ID')
        })
    });
});