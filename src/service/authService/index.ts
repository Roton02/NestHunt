import { FieldValues } from 'react-hook-form'

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    return res.json
  } catch (error) {
    console.log(error)
  }
}
