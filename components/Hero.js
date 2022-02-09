import { RichText } from '@graphcms/rich-text-react-renderer';

export const Hero = ({ content }) => {
  const {header, subheader, media} = content;
  return (
    <section id='hero' className='text-center xl:h-90v hero relative -mb-10 p-3'>
      <div className='hero-body'>
        <h1 className='font-extrabold text-4xl xl:text-5xl leading-relaxed'>{ header }</h1>
        <div className='mb-12 font-normal text-lg'>
          <RichText content={ subheader.json } />
        </div>
        <div className="flip-card m-auto avatar">
          <div className="flip-card-inner">
            <div className="flip-card-front absolute">
              <img className='avatar border-2 border-gray-300 rounded-full m-auto block' alt={`${media[0].name}`} src={media[0].url}/>
            </div>
            <div className="flip-card-back absolute">
              <img className='avatar border-2 border-gray-300 rounded-full m-auto block' alt={`${media[2].name}`} src={media[2].url}/>
            </div>
          </div>
        </div>
      </div>

      <div className='h-max relative mt-12 xl:absolute w-full bottom-0'>
        <img className='hero-footer m-auto w-10/12 md:w-8/12 xl:w-5/12' alt={`${media[1].name}`} src={media[1].url}/>
      </div>
    </section>
  )
}
