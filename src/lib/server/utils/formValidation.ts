export const validateForm = async (formData: any, schema: any) => {
  const body = Object.fromEntries(formData)

  try {
    const data = schema.parse(body)
    console.log(data)
    return {
      formData: data,
      errors: null
    }
  } catch (error: any) {
    const errors = error.flatten()
    console.log(errors)
    return {
      formData: body,
      errors
    }
  }
}