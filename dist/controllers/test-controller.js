"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testAdd = (req, res, next) => {
    let title = req.body.title;
    let body = req.body.body;
    let response = {
        title: title,
        body: body
    };
    return res.status(200).json({
        message: response
    });
};
exports.default = { testAdd };
