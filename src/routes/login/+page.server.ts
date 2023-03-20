import type { Actions } from './$types';
import { fail } from '@sveltejs/kit'
import { z } from 'zod';
import { validateForm } from '$lib/server/utils/formValidation';


const loginSchema = z.object({
  username: z.string().min(3).max(15),
  password: z.string().min(3),
})

export const actions = {
  login: async ( { request }) => {

    // const data = Object.fromEntries(await request.formData());

    const { formData, errors } = await validateForm(await request.formData(), loginSchema)

    if (errors) {
      return fail(400, {
        data: formData,
        errors: errors.fieldErrors,
      })
    }
  }
} satisfies Actions;