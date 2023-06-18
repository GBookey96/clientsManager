import express, { Request, Response, NextFunction } from "express";


const router = express.Router(); // Capital R

// GET http://localhost:3001/api/____________
router.get("/^______________^", async (request: Request, response: Response, next: NextFunction) => {
    try {

    }
    catch (err: any) {
        next(err);
    }
});

export default router;
