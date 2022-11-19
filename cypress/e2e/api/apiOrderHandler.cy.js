import {getTestApiHost} from "../../support/configuration";

describe('Api tests', () => {

    it('GET /api/order', () => {
        cy.request(getTestApiHost() + '/api/order').as('todoRequest');
        cy.get('@todoRequest').then(body => {
            expect(body.status).to.eq(200);
        });
    });

    it('Correct request to create pizza with topping', () => {
        cy.request(getTestApiHost() + '/api/order').as('Request');
        cy.get('@Request').then(resp => {
            expect(resp.status).to.eq(200);
        }).then((resp) => {
            const orderId = resp.body.orderId
            cy.request({
                method: 'POST',
                url: getTestApiHost() + '/api/order',
                body: {
                    pizzas: {
                        size: "small",
                        toppings: ["cheese"]
                    },

                    orderId: orderId

                }
            }).then( ({ body }) => {
                expect(body['success']).to.eq(true)
            })
        })
    });

    it('Incorrect request to create pizza without pizza-data', () => {
    cy.request(getTestApiHost() + '/api/order').as('Request');
    cy.get('@Request').then(resp => {
        expect(resp.status).to.eq(200);
    }).then((resp) => {
        const orderId = resp.body.orderId
        cy.request({
            method: 'POST',
            url: getTestApiHost() + '/api/order',
            body: {
                orderId: orderId

            }
        }).then( ({ body }) => {
            expect(body['success']).to.eq(true)
        })
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