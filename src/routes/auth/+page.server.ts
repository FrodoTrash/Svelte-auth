import { validateForm } from '$lib/server/utils/formValidation';
import { z } from 'zod';
import {error, fail, redirect } from '@sveltejs/kit'

const registerSchema = z.object({
  username: z.string().min(3).max(15),
  password: z.string().min(3),
  email: z.string().email(),
}).required()


export const actions = {
  default: async ({ request }) => {
    const { formData, errors } = await validateForm(await request.formData(), registerSchema)

    if (errors) {
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors,
      })
    }

    // try {
    //   const result = registerSchema.parse(formData)
    //   console.log(formData)
    // } catch (error: any) {
    //   const { fieldErrors: errors } = error.flatten()
    //   // console.log(errors)
    //   return { errors }
    // }
  }
}