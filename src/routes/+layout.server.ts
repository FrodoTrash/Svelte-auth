// import type { LayoutServerLoad } from './$types';
// export const load: LayoutServerLoad = async (event) => {
//   return {
//     user: event.locals.user || undefined
//   };
// };

export const load = ({ locals }) => {

  return {
    user: locals.user || undefined,
  }
}

