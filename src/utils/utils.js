const { StatusCodes } = require('http-status-codes');
const MusicsRepository = require('../port/musics_repository');

const Constants = require('./Constants');

const Utils = {
    responseStatus(data) {
        switch (data) {
            case undefined:
            case null:
                return StatusCodes.OK;
            case Constants.ErrorValidation.name:
                return StatusCodes.BAD_REQUEST;
            case Constants.ErrorDuplicate.name:
                return StatusCodes.CONFLICT;
            case Constants.ErrorNotFound.name:
                return StatusCodes.NOT_FOUND;
            default:
                if (typeof data === "object") return StatusCodes.OK;
                else return StatusCodes.INTERNAL_SERVER_ERROR;
        }
    },

    async getID() {
        const allElements = await MusicsRepository.list();
        return allElements.length
    }
};

module.exports = Utils;