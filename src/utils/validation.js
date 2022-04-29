const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./musics_validation');

const Validation = {
    create(data) {
        const validation = validate.validate(data.name, { presence: true });
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    }
};
module.exports = Validation;