import express from 'express'

import { UserControllers } from './user.controller'

const router = express.Router()
router.post(
  '/create-admin',

  UserControllers.createAdmin,
)

export const userRoutes = router
