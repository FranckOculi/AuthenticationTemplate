import bcrypt from 'bcryptjs'

export const hashPassword = (password: string) => {
	const hashed = bcrypt.hashSync(password, 5) as string
	return hashed
}
