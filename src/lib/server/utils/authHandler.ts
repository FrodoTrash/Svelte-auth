// export const registerHandler = async (values: any) => {
//   try {
//     const user = await $fetch('/api/auth/register', {
//       method: 'POST',
//       body: values,
//     })
    
//     if ( user ) {
//       loginHandler(values)
//     }

//     // navigateTo('/', { external: true })
//     // return user // not sure if needed
//   } catch (error: any) {
//     return error.statusMessage
//   }
// }


// export const loginHandler = async (values: any) => {
//   const { error, url } = await signIn('credentials', { 
//     username: values.username,
//     password: values.password,
//     callbackUrl: '/', //to what page will it return
//     redirect: false, // if redirecting to nuxt-auth generated page
//   })

//   if (error) {
//     // API ERROR
//     return error
//   } else {
//     // url = callbackurl
//     return navigateTo(url, { external: true })
//   }
// }