import React, { useState } from 'react'
import ChatBody from './components/ChatBody'
import ChatInput from './components/ChatInput'
import { useMutation } from 'react-query'
import { fetchResponse } from './Apis'

function App() {
   const [chat, setChat] = useState([])

   const mutation = useMutation({
      mutationFn: () => fetchResponse(chat),
      onSuccess: data => {
         console.log(data)
         setChat(prev => [...prev, { sender: 'ai', message: data.message.trim() }])
      },
   })

   const sendMessage = async message => {
      console.log('message: ', message)
      await Promise.resolve(setChat(prev => [...prev, { ...message, message: message.message.trim() }]))
      mutation.mutate()
   }

   return (
      <div className='bg-[#1A232E] h-screen py-6 px-12 relative sm:px-28 text-white overflow-hidden flex flex-col justify-between align-middle'>
         {/* Gradients */}
         <div className='gradient-01 z-0 absolute'></div>
         <div className='gradient-02 z-0 absolute'></div>

         {/* Header */}
         <header className='uppercase font-bold text-2xl text-center mb-3'>ChatGPT2.0</header>

         {/* Body */}
         <div className='h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center'>
            <ChatBody chat={chat} />
         </div>

         {/* Input */}
         <div className='w-full max-w-4xl min-w-[20rem] self-center'>
            <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
         </div>
      </div>
   )
}

export default App
