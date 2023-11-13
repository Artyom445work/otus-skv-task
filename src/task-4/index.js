const createUser = (age) => {
	const user = {
		age
	}
	return user
}

const createAdmin = (user) => {
	const {...rest} = user
	const admin = {
		role: 'admin',
		...rest
	}
	return admin
}

const getAdminKeys = (admin) => {
	return Object.keys(admin)
}

module.exports = { createUser, createAdmin, getAdminKeys }