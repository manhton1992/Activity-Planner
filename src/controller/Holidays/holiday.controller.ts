import { Request, Response } from "express";
import requestPromise = require("request-promise");

export const getAllHolidays = async (req: Request, res: Response) => {
    const options: requestPromise.Options = {
        method : 'GET',
        uri: 'https://ferien-api.de/api/v1/holidays',
        json: true,
    };

    const holidays = await requestPromise(options);
    const changedHolidays = [];
    for(const holiday of holidays){
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
}