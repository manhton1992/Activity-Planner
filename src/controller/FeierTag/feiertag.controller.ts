import { Request, Response } from "express";
import requestPromise = require("request-promise");

export const getAllFeierTags = async (req: Request, res: Response) => {
    const options: requestPromise.Options = {
        method : 'GET',
        uri: 'https://ferien-api.de/api/v1/holidays',
        json: true,
    };

    const feierTags = await requestPromise(options);
    const changedFeierTags = [];
    for(const feiertag of feierTags){
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
}