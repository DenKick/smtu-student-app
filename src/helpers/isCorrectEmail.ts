const emailRegex = /^\S+@\S+\.\S+$/

const isCorrectEmail = (email: string) => {
  return emailRegex.test(email)
}

export default isCorrectEmail
