const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/Constants');
const MusicsRepository = require('../src/port/musics_repository');

jest.mock('../src/port/musics_repository')

describe('Status', () => {
    describe('Status Ok', () => {
        it("Undefined", () => {
            const result = Utils.responseStatus(undefined);
            expect(result).toEqual(200);
        })

        it("Null", () => {
            const result = Utils.responseStatus(null);
            expect(result).toEqual(200);
        })

        it("defined", () => {
            const result = Utils.responseStatus({ name: "defined name" });
            expect(result).toEqual(200);
        })
    })

    test('Status Bad Request', () => {
        const result = Utils.responseStatus(Constants.ErrorValidation.name);
        expect(result).toEqual(400);

    });
    test('Status Conflict', () => {
        const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
        expect(result).toEqual(409);
    });

    test('Status Not Found', () => {
        const result = Utils.responseStatus(Constants.ErrorNotFound.name);
        expect(result).toEqual(404);
    });

    test('Status Not Found', () => {
        const result = Utils.responseStatus("Invalid data");
        expect(result).toEqual(500);
    });
});

test("getId", async() => {
    const list = [
        { "name": "music1", "year": 2022 }, { "name": "music2", "year": 2022 }
    ]

    MusicsRepository.list.mockResolvedValue(list);
    const result = await Utils.getID()
    expect(result).toEqual(list.length)
})