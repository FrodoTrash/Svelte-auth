import type { z } from "zod"

export const validateForm = async (formData: any, schema: z.Schema) => {
  const body = Object.fromEntries(formData)

  try {
    const data = schema.parse(body)
    return {
      formData: data,
      errors: null
    }
  } catch (error: any) {
    const errors = error.flatten()
    return {
      formData: body,
      errors
    }
  }
}