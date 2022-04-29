const { MusicModel } = require('../infrastructure/database');
const filters = { _id: 0, name: 1, year: 1, bandName: 1, genre: 1, albumName: 1, id: 1 }
const MusicRepository = {
    async create(data) {
        try {
            const model = new MusicModel(data);
            const { _id, __v, ...response } = (await model.save()).toObject()
            return response
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const options = { new: true };
            const filter = { id: data.id };
            const model = await MusicModel.findOneAndUpdate(filter, data, options).exec();
            if (model === null) return []
            const { _id, __v, ...response } = model.toObject()
            return response;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const object = await MusicModel.findOne({ id: data.id }, filters).exec();
            const result = await MusicModel.deleteOne({ id: data.id }).exec();
            return { object, deleted: result.acknowledged };
        } catch (error) {
            return error;
        }
    },

    async deleteAll(data) {
        try {
            const objects = await MusicModel.find({}, filters).exec()
            const result = await MusicModel.deleteMany().exec();
            return { objects, deleted: result.acknowledged, count: result.deletedCount };
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await MusicModel.find({}, filters).exec();
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
                    result = await MusicModel.findOne({ bandName: data.value }, filters).exec();
                    break;
                case "name":
                    result = await MusicModel.find({ name: data.value }, filters).exec();
                    break;
                case "genre":
                    result = await MusicModel.find({ genre: data.value }, filters).exec();
                    break;
                case "albumName":
                    result = await MusicModel.find({ albumName: data.value }, filters).exec();
                    break;
                case "year":
                    result = await MusicModel.find({ year: data.value }, filters).exec();
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