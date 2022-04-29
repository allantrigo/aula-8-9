const { MusicModel } = require('../infrastructure/database');

const MusicRepository = {
    async create(data) {
        try {
            const model = new MusicModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            let update = {}
            if (data.name) update["name"] = data.name
            if (data.name) update["year"] = data.year
            if (data.album) {
                let album = {}
                if (data.album.name) album["name"] = data.album.name
                if (data.album.year) album["year"] = data.album.year
                update["album"] = album
            }
            if (data.band) {
                let band = {}
                if (data.band.name) band["name"] = data.band.name
                if (data.band.genre) band["genre"] = data.band.genre
                update["band"] = band
            }
            const options = { new: true };
            const filter = { id: data.id };
            const result = await MusicModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const object = await MusicModel.findOne({ id: data.id }).exec();
            const result = await MusicModel.deleteOne({ id: data.id }).exec();
            return { object, deleted: result.acknowledged };
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await MusicModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByFilter(data) {
        try {
            let result
            switch (data.filter) {
                case "bandName":
                    result = await MusicModel.findOne({ bandName: data.value }).exec();
                    break;
                case "name":
                    result = await MusicModel.find({ name: data.value }).exec();
                    break;
                case "genre":
                    result = await MusicModel.find({ genre: data.value }).exec();
                    break;
                case "albumName":
                    result = await MusicModel.find({ albumName: data.value }).exec();
                    break;
                case "year":
                    result = await MusicModel.find({ year: data.value }).exec();
                    break;
                default:
                    result = "Filter does not exist"
            }
            return result;
        } catch (e) {
            return e;
        }
    },
};

module.exports = MusicRepository;