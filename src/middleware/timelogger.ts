import { Request, Response } from "express";
import { NextFunction } from "connect";


/**Package imports */
export const logTime = (req: Request, res : Response, next: NextFunction) => {
    console.log('time', Date.now());
    next();
}