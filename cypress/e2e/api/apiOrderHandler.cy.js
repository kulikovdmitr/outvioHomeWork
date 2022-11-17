import {getTestApiHost} from "../../support/configuration";

describe('Api tests', () => {

    it('GET /api/order', () => {
        cy.request(getTestApiHost() + '/api/order').as('todoRequest');
        cy.get('@todoRequest').then(body => {
            expect(body.status).to.eq(200);
        });
    });

    it('Correct request to create pizza with topping', () => {
        cy.request({
            method: 'POST',
            url: getTestApiHost() + '/api/order',
            body: {
                pizzas: {
                    size: "small",
                    toppings: ["cheese"]
                },

                orderId: "7767b480-101f-40db-bf60-fd5d16c3df71"

            }
            }).then( ({ body }) => {
                expect(body['success']).to.eq(true)
            })
    });

    it('Incorrect request to create pizza without pizza-data', () => {
        cy.request({
            method: 'POST',
            url: getTestApiHost() + '/api/order',
            body: {

                orderId: "7767b480-101f-40db-bf60-fd5d16c3df71"

            }
            //Logically, such an order should not be created, but right now this request is returned as successful.
            // After fixing the code, you will need to support the test
        }).then( ({ body }) => {
            expect(body['success']).to.eq(true)
        })
    });

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