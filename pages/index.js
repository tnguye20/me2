import {
  Meta,
  Hero,
  Nav,
  About,
  Experiences,
  Projects,
  Contact,
  Footer
} from '../components';

import {
  getSkills,
  getProjects,
  getParagraphs,
  getSocials,
  getMetas,
  getResume
} from '../lib/cms';

export default function Index({skills, projects, paragraphs, socials, metas, resume}) {
  return (
    <>
      <Meta meta={metas[0]}/>
      <Nav resume={resume}/>
      <Hero content={paragraphs['hero']}/>
      <About content={paragraphs['about']}/>
      <Experiences skills={skills}/>
      <Projects projects={projects} content={paragraphs['projects']}/>
      <Contact content={paragraphs['contact']} socials={socials}/>
      <Footer />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  try {
    const [skills, projects, paragraphs, socials, metas, resume] = await Promise.all([
      getSkills({ preview }),
      getProjects({ preview }),
      getParagraphs({preview}),
      getSocials({preview}),
      getMetas({preview}),
      getResume({preview})
    ]);

    const paragraphsDict = {};
    paragraphs.forEach((p) => paragraphsDict[p.name] = p);
    const socialsDict = {};
    socials.forEach((s) => socialsDict[s.name] = s);

    return {
        props: {
        skills,
        projects,
        paragraphs: paragraphsDict,
        socials: socialsDict,
        metas,
        resume
      },
      revalidate: 10
    };
  }
  catch(e) {
    console.log(e);
    return {
        props: {
        skills: [],
        projects: [],
        paragraphs: {},
        socials: {},
        metas: [],
        resume: "https://tnguye20.w3.uvm.edu/personal/ThangNguyen_Resume.pdf"
      }
    };
  }
}
