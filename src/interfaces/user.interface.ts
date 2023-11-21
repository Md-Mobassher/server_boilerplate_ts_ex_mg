interface IUser {
  name: string
  age: number
  email: string
  photo?: string
  contactNo: string
  role: 'user' | 'admin'
  userStatus: 'active' | 'inactive'
}

export default IUser
