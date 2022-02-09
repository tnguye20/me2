export const Experiences = ({ skills }) => {
  return (
    <section id='experiences' className='text-center relative bg-white -mt-14 shadow-md rounded-md flex lg:flex-row flex-col w-90v md:w-70v m-auto'>
      {
        skills.map((skill, index) => {
          const { title, description, tech } = skill;
          return (
            <div key={index} className='flex-1 border border-gray-100 p-9 lg:p-11 hover:shadow-lg relative'>
              <h2 className='font-extrabold text-2xl leading-relaxed'>{ title }</h2>
              <p>
                {description}
              </p>
              <div className='tech-holder'>
                <h2 className='font-bold text-xl leading-relaxed text-goma-peach-3'>Techonologies I use:</h2>
                <p className='font-normal text-sm'>
                  { tech.join(', ') }
                </p>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
