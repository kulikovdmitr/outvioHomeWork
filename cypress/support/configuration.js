export function getTestApiHost() {

    const TEST_API_HOST = 'http://localhost:3001'

    if (!Cypress.env('api-host')) {
        return TEST_API_HOST
    } else {
        return Cypress.env('api-host')
    }

}

export function getTestHost() {

    const TEST_HOST = 'http://localhost:3000'

    if (!Cypress.env('host')) {
        return TEST_HOST
    } else {
        return Cypress.env('host')
    }

}