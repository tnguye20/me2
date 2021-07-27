import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Nav = () => {
  return (
    <nav className='flex flex-row flex-wrap justify-end space-x-5 p-9 lg:px-9'>
      <div className=''>
        <AnchorLink href='#about'>About</AnchorLink>
      </div>
      <div className=''>
        <AnchorLink href='#experiences'>Experiences</AnchorLink>
      </div>
      <div className=''>
        <AnchorLink href='#projects'>Projects</AnchorLink>
      </div>
      <div className=''>
        <AnchorLink href='#contact'>Contact</AnchorLink>
      </div>
      <div className='mt-5 sm:mt-0 xl:animate-bounce'>
        <a className="border-2 bg-transparent text-goma-peach-3 hover:bg-goma-peach-1 hover:border-transparent hover:text-white border-red-300  py-3 px-5 rounded-lg shadow-md" target='_blank' rel='noreferrer' href='https://tnguye20.w3.uvm.edu/personal/ThangNguyen_Resume.pdf'>
          Resume
        </a>
      </div>
    </nav>
  )
}