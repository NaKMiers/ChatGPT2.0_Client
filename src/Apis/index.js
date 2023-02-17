export const fetchResponse = async chat => {
   try {
      // after depoloyment you should change the fetch URL below
      const response = await fetch('https://chatgpt20server.vercel.app/', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            message: chat.map(message => message.message).join(' \n '),
            // message: chat[chat.length - 1].message,
         }),
      })
      const data = await response.json()
      return data
   } catch (err) {
      console.log(err)
   }
}
