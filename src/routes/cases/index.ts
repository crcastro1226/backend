import { Router } from 'express'
import { saveQuestion, asociateOptions, getQuestionWithOptions, createCase, getCase, getAllCases, updateQuestion, deleteQuestion, getCaseByTheme, responsesCase} from '../../controllers/cases'
import { checkToken } from '../../helpers/jwt'

const router = Router()

router.route('/cases/save-case').post(checkToken, createCase)
router.route('/cases/save-question').post(checkToken, saveQuestion)
router.route('/cases/edit-question').put(checkToken, updateQuestion)
router.route('/cases/delete-question/:id').delete(checkToken, deleteQuestion)
router.route('/cases/associate-options').post(checkToken, asociateOptions)
router.route('/cases/get-question-options/:question_id').get(checkToken, getQuestionWithOptions)
router.route('/cases/get-case/:case_id').get(checkToken, getCase)
router.route('/cases/get-case-by-theme/:theme_id').get(getCaseByTheme)
router.route('/cases/send-response').post(responsesCase)
router.route('/cases/get-cases').get(checkToken, getAllCases)

export default router;