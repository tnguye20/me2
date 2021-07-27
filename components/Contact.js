import { RichText } from '@graphcms/rich-text-react-renderer';

import { 
  FaPatreon,
 } from 'react-icons/fa';
 import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
 } from 'react-icons/ai';
 import {
  BiCoffeeTogo
 } from 'react-icons/bi';

export const Contact = ({ content, socials }) => {
  const {header, subheader} = content;
  return (
    <section id='contact' className='text-center relative my-11 px-11 lg:px-64 md:mt-44'>
      <h1 className='font-extrabold text-5xl leading-relaxed'>{ header }</h1>
      <div className='mb-12 text-lg xl:mx-72 font-normal'>
        <RichText content={ subheader.json } />
      </div>
      <div className='socials flex flex-row justify-center space-x-9'>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.linkedin.url}`} className=''>
            <AiFillLinkedin className="text-3xl"/> 
          </a>
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.github.url}`} className=''>
            <AiFillGithub className="text-3xl"/> 
          </a>
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.instagram.url}`} className=''>
            <AiOutlineInstagram className="text-3xl"/> 
          </a>
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.patreon.url}`} className=''>
            <FaPatreon className="text-3xl"/>
          </a>
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.coffee.url}`} className=''>
            <BiCoffeeTogo className="text-3xl"/> 
          </a>
        </div>
      </div>
    </section>
  )
}
