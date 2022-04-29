const create = {
    name: { presence: { allowEmpty: false, type: "string" } },
    year: { presence: { allowEmpty: true, type: "number" } },
    albumName: { presence: { allowEmpty: true, type: "string" } },
    bandName: { presence: { allowEmpty: true, type: "string" } },
    genre: { presence: { allowEmpty: true, type: "string" } },
};

const update = {
    id: { presence: { allowEmpty: true, type: "string" } },
    name: { presence: { allowEmpty: true, type: "string" } },
    year: { presence: { allowEmpty: true, type: "number" } },
    albumName: { presence: { allowEmpty: true, type: "string" } },
    bandName: { presence: { allowEmpty: true, type: "string" } },
    genre: { presence: { allowEmpty: true, type: "string" } },
};

const get = {
    filter: { presence: { allowEmpty: false, type: "string" } },
    value: { presence: { allowEmpty: false, type: "string" | "number" } },
};

const deleteBy = {
    id: { presence: { allowEmpty: true, type: "string" } },
};


module.exports = {
    update,
    create,
    get,
    deleteBy,
};