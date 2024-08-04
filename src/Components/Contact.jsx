import React from 'react'
import { Interests } from '../Containers/Interests'
import { ContactForm } from '../Containers/ContactForm'

export const Contact = () => {
  return (
    <div className=' flex md:flex-row flex-col rounded-md text-center m-5 md:mt-26 bg-[#dccfed]' id='Contact'>
      <Interests/>
      <ContactForm/>
    </div>
  )
}
