import type { Actions } from '@sveltejs/kit';

import { validateForm } from '$lib/server/utils/formValidation';
import { z } from 'zod';
import { fail } from '@sveltejs/kit'


const registerSchema = z.object({
  username: z.string().min(3).max(15),
  password: z.string().min(8),
  email: z.string().email(),
}).required()

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
}).required()


export const actions = {
  login: async ({ request, locals }) => {

    // validate user input
    const { data, errors } = await validateForm(await request.formData(), loginSchema)

    // display error 
    if (errors) {
      return fail(400, {
        errors: errors.fieldErrors,
      })
    }

    const authData = await locals.pb.collection('users').authWithPassword(
      data.username,
      data.password,
    );

    console.log("[!] User login")
  },
  register: async ({ request, locals }) => {
    // validate user input
    const { data, errors } = await validateForm(await request.formData(), registerSchema)
    // display error 
    if (errors) {
      return fail(400, {
        errors: errors.fieldErrors,
      })
    }
    // send data
    try {
      const newUser = await locals.pb.collection('users').create(JSON.stringify({
        ...data,
        passwordConfirm: data.password
      }));
      console.log("[!] User register")
    } catch (error: any) {
      console.log(error)
      return {
        apiError: error.message
      }
    }

  }
} satisfies Actions;