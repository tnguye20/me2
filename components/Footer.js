import {
  AiOutlineCopyrightCircle
} from 'react-icons/ai'

export const Footer = () => {
  return (
    <section className='text-center text-sm font-normal m-11 lg:mt-44'>
      Designed & Built by Thang Nguyen <span className='inline-block'><AiOutlineCopyrightCircle /></span> {new Date().getFullYear()}
    </section>
  )
}
