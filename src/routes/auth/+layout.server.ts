import { redirect } from "@sveltejs/kit"

// TODO: Is this really the best way to redirect users?
export const load = ({ locals }) => {
  if (locals.user) {
    throw redirect(303, "/")
  }
}