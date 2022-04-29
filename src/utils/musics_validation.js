const create = {
    name: { presence: { allowEmpty: false, type: "string" } },
    year: { presence: false, type: "number" },
    albumName: { presence: false, type: "string" },
    bandName: { presence: false, type: "string" },
    genre: { presence: false, type: "string" },
};

const update = {
    id: { presence: { allowEmpty: false, type: "number" } },
    name: { presence: false, type: "string" },
    year: { presence: false, type: "number" },
    albumName: { presence: false, type: "string" },
    bandName: { presence: false, type: "string" },
    genre: { presence: false, type: "string" },
};

const get = {
    filter: { presence: { allowEmpty: false, type: "string" } },
    value: { presence: { allowEmpty: false, type: "string" | "number" } },
};

const deleteBy = {
    id: { presence: { allowEmpty: true, type: "number" } },
};


module.exports = {
    update,
    create,
    get,
    deleteBy,
};