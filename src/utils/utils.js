const { StatusCodes } = require('http-status-codes');
const { v4: uuidv4 } = require('uuid');

const Constants = require('./constants');

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
    }
};

module.exports = Utils;