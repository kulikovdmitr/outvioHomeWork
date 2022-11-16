const appFetch = require('./appFetch');

describe("Unit tests", () => {

    it('tests error with async/await', async () => {
        try {
            await appFetch.default();
        } catch (e) {
            expect(e).toEqual(new Error("Oops, an error happened."));
        }
    });
});
