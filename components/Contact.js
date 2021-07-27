import { RichText } from '@graphcms/rich-text-react-renderer';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

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
            <LinkedInIcon /> 
          </a>
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.github.url}`} className=''>
            <GitHubIcon /> 
          </a>
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.instagram.url}`} className=''>
            <InstagramIcon /> 
          </a>
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.patreon.url}`} className=''>
            <PeopleAltIcon /> 
          </a>
        </div>
        <div>
          <a target='_blank' rel='noreferrer' href={`${socials.coffee.url}`} className=''>
            <LocalCafeIcon /> 
          </a>
        </div>
      </div>
    </section>
  )
}
