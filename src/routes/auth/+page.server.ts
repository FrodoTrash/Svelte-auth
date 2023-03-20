import type { Actions } from '@sveltejs/kit';

import { validateForm } from '$lib/server/utils/formValidation';
import { z } from 'zod';
import { fail } from '@sveltejs/kit'

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
  login: async ({ request }) => {

    // const data = Object.fromEntries(await request.formData());

    const { errors } = await validateForm(await request.formData(), loginSchema)

    if (errors) {
      console.log(errors)
      return fail(400, {
        errors: errors.fieldErrors,
      })
    }
    console.log("SUCCESS")
  },
  register: async ({ request }) => {
    const { errors } = await validateForm(await request.formData(), registerSchema)

    if (errors) {
      console.log(errors)
      return fail(400, {
        errors: errors.fieldErrors,
      })
    }
    console.log("SUCCESS")
  }
} satisfies Actions;