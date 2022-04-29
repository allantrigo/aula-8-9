const Musics = require('../application/musics_service');
const Utils = require('../utils/utils');

const route = '/musics';

module.exports = (app) => {
    app.post(`${route}/create`, async(req, res) => {
        const response = await Musics.create(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.put(`${route}/update`, async(req, res) => {
        const response = await Musics.update(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.delete(`${route}/delete`, async(req, res) => {
        const response = await Musics.delete(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.get(`${route}/list`, async(req, res) => {
        const response = await Musics.list();
        res.status(Utils.responseStatus(response));
        res.json(response);
    });
    app.patch(`${route}/listMusic`, async(req, res) => {
        const response = await Musics.listByFilter(req.body);
        res.status(Utils.responseStatus(response));
        res.json(response || "Objeto não encontrado");
    });
};