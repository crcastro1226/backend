import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

const SECRET = process.env.SECRET_TK


export const checkToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.get("authorization");
    if (token) {
        token = token.slice(7);
        verify(token, `${SECRET}`, (error: any, decoded: any) => {
            if (error) {
                res.status(401).json({
                    success: false,
                    message: "Invalid token"
                })
            } else {
                if (decoded.result.role === "Admin") {
                    next();
                } else {
                    res.status(400).json({
                        success: false,
                        message: "No es un usuario autorizado"
                    })
                }
            }
        })
    } else {
        res.status(401).json({
            success: false,
            message: "No es un usuario autorizado"
        })
    }
}
