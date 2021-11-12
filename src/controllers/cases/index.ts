import { Request, Response } from 'express'
import Theme from '../../models/Theme';
import Questions from '../../models/Questions';
import Options from '../../models/Options';
import Case from '../../models/Case';

export const saveQuestion = async (req: Request, res: Response): Promise<Response> => {
    const {
        theme_id,
        question,
        type_question
    } = req.body;
    try {
        const theme = await Theme.findById(theme_id)

        if (theme) {

            const questionObj = {
                question,
                type: type_question,
                category: theme.name,
                options: []
            }

            const qt = new Questions(questionObj)
            await qt.save()
            return res.json({
                success: true,
                message: 'Pregunta creada correctamente',
                question: qt
            })

        } else {
            return res.status(404).json({
                success: false,
                message: 'El Tema no existe'
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }
}

export const asociateOptions = async (req: Request, res: Response): Promise<Response> => {

    try {
        const question = await Questions.findById(req.body.question_id)
        if (question) {
            const option = new Options(req.body)
            await option.save();

            question.options = question.options.concat(option._id);
            await question.save();

            return res.json({
                success: true,
                message: `Se ha asignado la opción ${req.body.position} a la pregunta ${question.question}`,
                option
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'La pregunta no existe'
            })
        }
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }
}

export const createCase = async (req: Request, res: Response): Promise<Response> => {
    const {
        theme_id,
        questions,
        name,
        response
    } = req.body;
    try {
        const theme = await Theme.findById(theme_id)
        if (theme) {
            const caseI = new Case(req.body)
            await caseI.save()

            return res.json({
                success: true,
                message: 'Se ha creado el caso correctamente!',
                case: caseI
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'El Tema no existe'
            })
        }
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }
}

export const getQuestionWithOptions = async (req: Request, res: Response): Promise<Response> => {

    try {
        const question = await Questions.findById(req.params.question_id).populate('options')

        return res.json({
            success: true,
            response: question
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }

}

export const getCase = async (req: Request, res: Response): Promise<Response> => {

    try {
        const caseObg: any = await Case.findById(req.params.case_id).populate('questions')

        const questions = caseObg?.questions.map(((question: any) => question))
        if (caseObg.questions) {
            const question = await Questions.find({ _id: questions.map(((question: any) => question._id)) }).populate('options')
            caseObg.questions = question
        }

        return res.json({
            success: true,
            response: caseObg
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }

}

export const getAllCases = async (req: Request, res: Response) => {
    const limit: any = req.query.limit || 10;
    const page: any = req.query.page || 1;
    try {
        const total_cases = await Case.countDocuments()
        const total_pages = Math.ceil(total_cases / limit);

        await Case.find().skip((page - 1) * limit).limit(limit).exec((err, doc) => {
            if (err) { res.status(500).json(err); return; };
            return res.json({
                success: true,
                page: page,
                total_cases,
                total_pages,
                cases: doc
            })
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Hubo un problema interno en el servidor!'
        })
    }
}

