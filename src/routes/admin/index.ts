import { Router } from 'express'
import { saveAdmin } from '../../controllers/admin'

const router = Router()

router.route('/admin/register').post(saveAdmin)

export default router;