import { Request, Response } from 'express'
import Admin from '../../models/Admin';
import { genSaltSync, hashSync } from 'bcrypt'

export const saveAdmin = async (req: Request, res: Response) => {
    const {
        username,
        email,
        password,
        confirm_password
    } = req.body;
    const alreadyExist = await Admin.findOne({ email: req.body.email }).select('-password')

    if (!alreadyExist) {
        if (username === "") {
            res.status(400).json({
                success: false,
                message: 'El campo username no puede ir vacío'
            })
        } else if (email === "") {
            res.status(400).json({
                success: false,
                message: 'El campo email no puede ir vacío'
            })
        } if (password === "") {
            res.status(400).json({
                success: false,
                message: 'El campo password no puede ir vacío'
            })
        } if (password !== confirm_password) {
            res.status(400).json({
                success: false,
                message: 'Las contraseñas no coinciden'
            })
        } else {
            try {
                const salt = genSaltSync(10);
                req.body.password = hashSync(req.body.password, salt);
    
                const objectAdmin = {
                    ...req.body,
                    role: "Admin"
                }

                const admin = new Admin(objectAdmin);
                await admin.save();

                res.status(201).json({
                    success: true,
                    message: 'Admin registrado correctamente'
                })
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: 'Hubo un problema interno en el servidor!'
                })
            }
        }
    } else {
        res.status(400).json({
            success: false,
            message: 'Ya existe un admin con este correo electrónico'
        })
    }


}