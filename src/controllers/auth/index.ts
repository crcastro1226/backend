import { Request, Response } from 'express'
import Admin from '../../models/Admin';
import { compareSync } from 'bcrypt'
import { sign } from 'jsonwebtoken';
const SECRET = process.env.SECRET_TK


export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;    

    if (email === "") {
        return res.status(400).json({
            success: false,
            message: 'Por favor ingrese un correo electrónico'
        });
    } else {
        if (password === "") {
            return res.status(400).json({
                success: false,
                message: 'Por favor ingrese una contraseña'
            });
        }
    }

    const user = await Admin.findOne({ "email": email })

    try {
        if (user) {
            const result = compareSync(password, user.password);

            if (result) {
                user.password = '';
                const jsontoken = sign({ result: user }, `${SECRET}`, {
                    expiresIn: "1h",
                });

                return res.json({
                    success: true,
                    token: jsontoken,
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: 'Usuario o contraseña incorrectos'
                });
            }
        } else {
            return res.status(400).json({
                success: false,
                message: 'Usuario o contraseña incorrectos',
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }
}