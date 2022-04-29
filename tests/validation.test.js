const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        name: "test name",
        year: 2022
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        year: 2022
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});