import { Router } from 'express'
import { login } from '../../controllers/auth'

const router = Router()

router.route('/auth/login').post(login)

export default router;