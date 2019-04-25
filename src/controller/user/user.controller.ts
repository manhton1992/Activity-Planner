import { Request, Response } from "express";
import requestPromise = require("request-promise");

export const getAllUser = async (req: Request, res: Response) => {
    const options: requestPromise.Options = {
        method : 'GET',
        uri: 'https://jsonplaceholder.typicode.com/users',
        json: true,
    };

    const users = await requestPromise(options);
    const changedUsers = [];
    for(const user of users){
        changedUsers.push({
            name: user.name,
            email: user.email
        });

    }
    res.send({
        status: 'ok',
        data: changedUsers
    });
}