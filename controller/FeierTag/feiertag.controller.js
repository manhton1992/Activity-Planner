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
exports.getAllFeierTags = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const options = {
        method: 'GET',
        uri: 'https://ferien-api.de/api/v1/holidays',
        json: true,
    };
    const feierTags = yield requestPromise(options);
    const changedFeierTags = [];
    for (const feiertag of feierTags) {
        changedFeierTags.push({
            name: feiertag.name,
            slug: feiertag.slug,
            year: feiertag.year,
            start: feiertag.start,
            end: feiertag.end,
        });
    }
    res.send({
        status: 'ok',
        data: changedFeierTags
    });
});
//# sourceMappingURL=feiertag.controller.js.map