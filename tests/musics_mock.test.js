const Musics = require('../src/application/musics_service');
const Constants = require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const MusicsRepository = require('../src/port/musics_repository');

jest.mock('../src/port/musics_repository');
jest.mock('../src/utils/utils');

describe("Create", () => {
    it('CREATE - Dado válido', async() => {
        const data = {
            name: "Nome Teste",
            year: 2022,
        }

        id = 1
        Utils.getID.mockResolvedValue(id)
        MusicsRepository.create.mockResolvedValue({...data, id });

        const result = await Musics.create(data);
        expect(result).toEqual({...data, id });
    })

    it('CREATE - Dado duplicado', async() => {
        const data = {
            name: "Nome Teste",
            year: 2022,
        }

        id = 1
        Utils.getID.mockResolvedValue(id)
        MusicsRepository.create.mockResolvedValue({ code: 11000 });

        const result = await Musics.create(data);
        expect(result).toEqual(Constants.ErrorDuplicate);
    })
})