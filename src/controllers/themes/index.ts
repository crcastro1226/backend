import { Request, Response } from 'express'
import Theme from '../../models/Theme';

export const saveTheme = async (req: Request, res: Response) => {
    const {
        name,
        description
    } = req.body;
    if (!req.body.name || !req.body.description) {
        return res.status(400).json({
            success: false,
            message: 'Está tratando de enviar un objeto vacío'
        })
    }
    const alreadyExist = await Theme.findOne({ name: req.body.name })
    if (!alreadyExist) {
        if (name === '') {
            return res.status(400).json({
                success: false,
                message: 'El Tema debe tener un nombre'
            })
        } else if (description === '') {
            return res.status(400).json({
                success: false,
                message: 'El Tema debe tener una descripción'
            })
        } else {
            try {

                const theme = new Theme(req.body);
                await theme.save();

                return res.json({
                    success: true,
                    message: 'El Tema ha sido creado correctamente!'
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
            message: 'Ya existe un tema con este nombre!'
        })
    }
}

export const getThemes = async (req: Request, res: Response) => {
    const limit: any = req.query.limit;
    const page: any = req.query.page;

    const options = {
        limit,
        page
    };
    try {
        const themes = await Theme.paginate({}, options)
        return res.json(themes)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }
}

export const updateTheme = async (req: Request, res: Response) => {
    const id = req.params.id
    const {
        name,
        description
    } = req.body;

    if (name === '') {
        return res.status(400).json({
            success: false,
            message: 'No puede enviar el campo nombre vacío'
        })
    }
    if (description === '') {
        return res.status(400).json({
            success: false,
            message: 'No puede enviar el campo descripción vacío'
        })
    }
    try {
        await Theme.findByIdAndUpdate(id, {
            name,
            description
        })
        return res.json({
            success: true,
            message: 'El Tema ha sido editado correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }
}

export const deleteTheme = async (req: Request, res: Response) => {
    const themeId = req.params.id;

    try {
        const theme = await Theme.findById(themeId);

        if (theme) {
            const deletedTheme = await Theme.findByIdAndDelete(themeId)

            if (deletedTheme) {
                return res.json({
                    success: true,
                    message: 'El Tema ha sido eliminado correctamente'
                })
            } else {
                return res.status(400).json({
                    success: false,
                    message: 'Hubo un error al eliminar el tema'
                })
            }
        } else {
            return res.status(404).json({
                success: false,
                message: 'El Tema que intenta eliminar no existe'
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }
}
