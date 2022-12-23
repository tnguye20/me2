import { RichText } from '@graphcms/rich-text-react-renderer';

export const About = ({ content }) => {
  const {header, subheader} = content;
  return (
    <section id='about' className='bg-goma-peach-1 text-white about relative px-14 py-12 md:py-36 md:px-28'>
      <div className='xl:mx-72'>
        <h1 className='font-extrabold md:text-5xl text-2xl leading-relaxed text-center'>
          { header }
          </h1>
        <div className='mb-12 text-lg font-normal xl:px-32 text-justify'>
          <RichText content={ subheader.json } />
        </div>
      </div>
    </section>
  )
}
