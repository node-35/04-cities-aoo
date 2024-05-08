const catchError = require('../utils/catchError');
const Country = require('../models/Country');
const User = require('../models/User');
const City = require('../models/City');
const Continent = require('../models/Continent');

const getAll = catchError(async(req, res) => {
    const countries = await Country.findAll({ include: [Continent, User, City]});
    return res.json(countries);
});

const create = catchError(async(req, res) => {
    const { name, currency, language, flagUrl, continentId } = req.body;
    const country = await Country.create({
        name: name,
        currency,
        language,
        flagUrl,
        continentId,
    });
    return res.status(201).json(country);
});

const getOne = catchError(async(req, res) => {
    const {id} = req.params;
    const country = await Country.findByPk(id, { include: [User, City] });
    if (country === null) return res.status(404).json({ message: "Pais no encontrado" });
    return res.json(country);
});

const remove = catchError(async(req, res) => {
    const {id} = req.params;
    await Country.destroy({ where: { id: id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { name, currency, language, flagUrl, continentId } = req.body;
    const country = await Country.update({
        name: name,
        currency: currency,
        language,
        flagUrl,
        continentId
    }, { where: { id: id }, returning: true });
    return res.json(country[1][0]); 
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}