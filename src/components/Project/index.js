import React, {useState } from "react";

import { FaGithub } from 'react-icons/fa';



const Project = () => {
  const [projects] = useState([
    { 
      title: 'MUSICOLOGY',
      src: 'musicology-gif.gif',
      alt: 'screenshot of app',
      description: '',
      appHref:'https://musicology-umekev.herokuapp.com/',
      gitHref:'https://github.com/KLong75/musician-networking-app',
    },
    {
      title: 'Who Do?',
      src: 'Who_Do_login.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://who-do-austin.herokuapp.com/login',
      gitHref: 'https://github.com/truppeiner/who-do',
    },
    {
      title: 'Movies R Us',
      src: 'movies_r_us.gif',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://klong75.github.io/Movies-R-Us-KJ/',
      gitHref: 'https://github.com/KLong75/Movies-R-Us-KJ',
    },
    {
      title: 'Deep Thoughts',
      src: 'deep-thoughts-signup.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://kj-deep-thoughts.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/deep-thoughts',
    },
    {
      title: 'Budget Tracker',
      src: 'budget-tracker.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://kj-budget-tracker-pwa.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/budget-tracker-pwa',
    },
    {
      title: 'Work Day Scheduler',
      src: 'work-day-scheduler.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://klong75.github.io/daily-calendar/',
      gitHref: 'https://github.com/KLong75/daily-calendar',
    },
    {
      title: 'Note Taker',
      src: 'note-taker2.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://note-taker-gnolvek.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/note-taker',
    },
  ])

  return (
    <section className='container shadow-lg'>
      <div className='row' id='portfolio-row'>
        {projects.map((project) => (
          <div className='col-4' key={project.title}>
            <div className='card shadow-lg' id='project-card'>
              <div  className='card-body shadow'>
                <h3 
                  id='project-title'
                  className=''
                >
                  {project.title}
                </h3>
                <a 
                  href={project.appHref} 
                  target='_blank' 
                  rel='noreferrer' 
                >  
                <img
                  id='project-img'
                  className='card-img shadow'
                  src={require(`../../assets/${project.src}`)}
                  alt={project.alt} 
                />
                </a>
                {/* <p>{project.description}</p> */}
                <a 
                  href={project.gitHref} 
                  target='_blank' 
                  rel='noreferrer' 
                >
                  <span id='git-repo-label'>&lt; Check out the code on GitHub. <FaGithub id='git-project-icon' size={18} />  /&gt;
                  </span>    
                </a>
              </div>
            </div>
          </div>  
       ))}
      </div>
    </section>
  );
};

export default Project;