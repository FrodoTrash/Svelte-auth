import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit'
import { z } from 'zod';
import { validateForm } from '$lib/server/utils/formValidation';

const loginSchema = z.object({
  username: z.string().min(3).max(15),
  password: z.string(),
}).required()

export const actions = {
  login: async ( { request }) => {

    // const data = Object.fromEntries(await request.formData());

    const { errors } = await validateForm(await request.formData(), loginSchema)

    if (errors) {
      console.log(errors)
      return fail(400, {
        errors: errors.fieldErrors,
      })
    }
    console.log("SUCCESS")
  }
} satisfies Actions;