import { Request, Response, NextFunction } from "express";

export const wrapAsync = (func: Function) => {
    return function (request: Request, response: Response, next: NextFunction){
        func(request, response, next).catch(next);
    }
}

export const globalErrorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(500).send({error, message: error.message});
};