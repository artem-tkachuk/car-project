import {Request, Response} from "express";

const getHomepage = (req: Request, res: Response) => {
    res.send(`Hello from the car project!`);
};

export default getHomepage;