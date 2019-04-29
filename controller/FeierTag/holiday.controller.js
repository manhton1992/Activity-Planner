"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestPromise = require("request-promise");
exports.getAllHolidays = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const options = {
        method: 'GET',
        uri: 'https://ferien-api.de/api/v1/holidays',
        json: true,
    };
    const holidays = yield requestPromise(options);
    const changedHolidays = [];
    for (const holiday of holidays) {
        changedHolidays.push({
            name: holiday.name,
            slug: holiday.slug,
            year: holiday.year,
            start: holiday.start,
            end: holiday.end,
        });
    }
    res.send({
        status: 'ok',
        data: changedHolidays
    });
});
//# sourceMappingURL=holiday.controller.js.map