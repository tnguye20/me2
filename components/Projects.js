import { RichText } from '@graphcms/rich-text-react-renderer';
 import {
  AiFillGithub,
 } from 'react-icons/ai';
 import {
  MdOpenInNew
 } from 'react-icons/md';

export const Projects = ({ projects, content }) => {
  const {header, subheader} = content;
  return (
    <section id='projects' className='text-center relative my-11 px-11 lg:px-64 md:mt-44'>
      <h1 className='font-extrabold text-5xl leading-relaxed'>{ header }</h1>
      <div className='mb-12 text-lg xl:mx-72 font-normal'>
        <RichText content={ subheader.json } />
      </div>

      <div className=''>
        {
          projects.map((project, index) => {
            const { name, url, description, mission, git, image, tech } = project;
            return (
              <div key={index} className={
                (
                  index % 2
                  ? 'xl:flex-row-reverse xl:text-left'
                  : 'xl:flex-row xl:text-right'
                )
                + ' flex flex-col-reverse mb-12 space-x-3 xl:space-x-0'
              }>
                <div className='flex-grow relative'>
                  <a target='_blank' rel='noreferrer' href={url} className=''>
                    <img src={image.url} className='h-full w-full block shadow-xl rounded-md object-cover' alt={name} />
                    <div className='absolute bg-goma-peach-1 w-full h-full top-0 opacity-10 hover:opacity-0'></div>
                  </a>
                </div>

                <div className='relative'>
                  <h3 className='font-semibold text-md leading-relaxed text-goma-peach-1'>Featured Project</h3>
                  <h2 className='font-extrabold text-2xl leading-relaxed'>
                    <a target='_blank' rel='noreferrer' href={url} className=''>
                      {name}
                    </a>
                  </h2>
                  <p className='font-extralight text-xs sm:text-sm'>{mission}</p>
                  <div className={
                    (
                      index % 2
                      ? 'xl:-mr-24'
                      : 'xl:-ml-24'
                    )
                    + ' bg-goma-peach-2 shadow-2xl rounded-lg p-5 sm:p-11'
                  }>
                    <p>{description}</p>
                    <div>
                      {
                        tech.map((t, index) => {
                          const _t = t.replace("__", ".").replace("_", " ");
                          return <span key={index} className='p-1 font-light text-sm inline-block'>{_t}</span>
                        })
                      }
                    </div>

                    <br />

                    <div>
                      <span className='float-left text-2xl pr-2'>
                        <a target='_blank' rel='noreferrer' href={git} className=''>
                          <AiFillGithub />
                        </a>
                      </span>
                      &nbsp;&nbsp;
                      <span className='float-left text-2xl pr-2'>
                        <a target='_blank' rel='noreferrer' href={url} className=''>
                          <MdOpenInNew />
                        </a>
                      </span>
                    </div>
                  </div>

                  <br />
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
