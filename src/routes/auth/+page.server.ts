import { validateForm } from '$lib/server/utils/formValidation';
import { z } from 'zod';
import {error, fail, redirect } from '@sveltejs/kit'

const registerSchema = z.object({
  username: z.string().min(3).max(15),
  password: z.string().min(3),
  email: z.string().email(),
}).required()

const loginSchema = z.object({
  username: z.string().min(3).max(15),
  password: z.string().min(3),
}).required()

export const actions = {
  register: async ({ request }) => {
    const { formData, errors } = await validateForm(await request.formData(), registerSchema)

    if (errors) {
      console.log(formData)
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors,
      })
    }
  },
  login: async ({ request }) => {
    const { formData, errors } = await validateForm(await request.formData(), loginSchema)
    
    if (errors) {
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors,
      })
    }
  }
}