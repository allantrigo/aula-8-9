const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/Constants');
const MusicsRepository = require('../port/musics_repository');
const Constraints = require('../utils/musics_validation');
const Validation = require('../utils/validation');

const Musics = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            const response = await MusicsRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MusicsRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MusicsRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByFilter(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MusicsRepository.getByFilter(data);
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await MusicsRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },

    async deleteAll() {
        try {
            const response = await MusicsRepository.deleteAll();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Musics;