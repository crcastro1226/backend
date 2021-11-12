import { Router } from 'express'
import { saveTheme, getThemes, updateTheme, deleteTheme } from '../../controllers/themes'
import { checkToken } from '../../helpers/jwt'

const router = Router()

router.route('/themes/save-theme').post(checkToken, saveTheme)
router.route('/themes').get(checkToken, getThemes)
router.route('/themes/update-theme/:id').put(checkToken, updateTheme)
router.route('/themes/delete-theme/:id').delete(checkToken, deleteTheme)

export default router;