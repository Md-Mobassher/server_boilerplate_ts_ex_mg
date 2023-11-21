import IUser from '../interfaces/user.interface'
import Users from '../models/user.model'

const createUserIntoDb = async (userData: IUser): Promise<IUser> => {
  const result = await Users.create(userData)

  return result
}

export const userService = {
  createUserIntoDb,
}
