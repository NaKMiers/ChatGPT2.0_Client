import React, { useState } from 'react'

function ChatInput({ sendMessage, loading }) {
   const [value, setValue] = useState('')

   const handleSubmit = () => {
      if (value.trim() === '') return

      sendMessage({ sender: 'user', message: value })
      setValue('')
   }

   return (
      <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative'>
         {loading ? (
            <img className='w-8 m-auto' src='./loader.gif' alt='loading' />
         ) : (
            <>
               <textarea
                  className='border-0 px-4 bg-transparent outline-none w-11/12'
                  rows={1}
                  value={value}
                  type='text'
                  onChange={e => setValue(e.target.value)}
                  onKeyDown={e => {
                     e.keyCode === 13 && !e.shiftKey && handleSubmit()
                  }}
               />

               <img
                  onClick={handleSubmit}
                  className='absolute top-4 right-3 hover:cursor-pointer hover:scale-125 ease-in duration-100'
                  width={20}
                  src='./send.png'
                  alt='send'
               />
            </>
         )}
      </div>
   )
}

export default ChatInput
