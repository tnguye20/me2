import CopyrightIcon from '@material-ui/icons/Copyright';

export const Footer = () => {
  return (
    <section className='text-center text-sm font-normal m-11 lg:mt-44'>
      Designed & Built by Thang Nguyen <CopyrightIcon /> {new Date().getFullYear()}
    </section>
  )
}
