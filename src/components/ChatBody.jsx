import React, { useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate'

function ChatBody({ chat }) {
   const aiStyle = 'bg-white bg-opacity-40 backdrop-blue-lg dropshadow-md mr-auto'

   const parent = useRef(null)
   const bottomRef = useRef(null)

   // Only for auto animations
   useEffect(() => {
      parent.current && autoAnimate(parent.current)
   }, [parent])

   // For scrolling bottom
   useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
   }, [chat])

   return (
      <div className='flex flex-col gap-4' ref={parent}>
         {chat.map((message, index) => {
            return (
               <div
                  key={index}
                  className={`border-[#999] border-2 break-words rounded-xl self-end px-3 py-3 max-w-[80%] ${
                     message.sender === 'ai' && aiStyle
                  }`}
               >
                  <pre className='whitespace-pre-wrap'>
                     <span>{message.message}</span>
                  </pre>
               </div>
            )
         })}

         <div ref={bottomRef} className='h-3'></div>
      </div>
   )
}

export default ChatBody
