import { Request, Response } from 'express'
import { userService } from '../services/user.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await userService.createUserIntoDb(userData)

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)

    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
    })
  }
}

export const userController = {
  createUser,
}
