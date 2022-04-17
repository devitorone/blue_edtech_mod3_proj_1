const charService = require('../services/char.service');

const findCharController = (req,res)=>{
    const allChar = charService.findCharService();
    res.send(allChar);
};

const findCharByIdController = (req,res)=>{
    const idParam = req.params.id;
    const chosenChar = charService.findCharService(idParam);
    res.send(chosenChar);
};

module.exports = {
    findCharController,
    findCharByIdController,
};
