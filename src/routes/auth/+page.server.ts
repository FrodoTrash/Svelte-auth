import type { Actions } from '@sveltejs/kit';

import { validateForm } from '$lib/server/utils/formValidation';
import { z } from 'zod';
import { fail } from '@sveltejs/kit'
import { signIn } from '@auth/sveltekit/client';

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

    // validate user input
    const { data, errors } = await validateForm(await request.formData(), loginSchema)

    // display error 
    if (errors) {
      return fail(400, {
        errors: errors.fieldErrors,
      })
    }
    console.log(data)
    await signIn('credentials',{
      username: data.username,
      password: data.password
      // callbackUrl: '/', //to what page will it return
      // redirect: false, // if redirecting to nuxt-auth generated page
    })

    console.log("/login")
  },
  register: async ({ request }) => {
    const { errors } = await validateForm(await request.formData(), registerSchema)

    if (errors) {
      console.log(errors)
      return fail(400, {
        errors: errors.fieldErrors,
      })
    }
    console.log("/register")
  }
} satisfies Actions;