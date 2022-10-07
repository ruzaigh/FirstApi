"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const test_controller_1 = __importDefault(require("../controllers/test-controller"));
const router = express_1.default.Router();
router.post('/testing', test_controller_1.default.testAdd);
module.exports = router;
