import React, {useState } from "react";

const Project = () => {
  const [projects] = useState([
    {
      title: 'Who Do?',
      src: 'Who_Do_login.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://who-do-austin.herokuapp.com/login',
      gitHref: 'https://github.com/truppeiner/who-do'
    },
    {
      title: 'Movies R Us',
      src: 'movies_r_us.gif',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://klong75.github.io/Movies-R-Us-KJ/',
      gitHref: 'https://github.com/KLong75/Movies-R-Us-KJ'
    },
    {
      title: 'Deep Thoughts',
      src: 'deep-thoughts-signup.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://kj-deep-thoughts.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/deep-thoughts'
    },
    {
      title: 'Budget Tracker',
      src: 'budget-tracker.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://kj-budget-tracker-pwa.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/budget-tracker-pwa'
    },
    {
      title: 'Work Day Scheduler',
      src: 'work-day-scheduler.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://klong75.github.io/daily-calendar/',
      gitHref: 'https://github.com/KLong75/daily-calendar'
    },
    {
      title: 'Note Taker',
      src: 'note-taker2.png',
      alt: 'screeenshot of app',
      description: '',
      appHref: 'https://note-taker-gnolvek.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/note-taker'
    },
  ])

  return (
    <section className='container shadow-lg' >
      <div className='row portfolio-row'>
       {projects.map((project) => (
        <>
          <div className='col-4'>
            <div className='card shadow-lg'>
              <h3 className='card-title'>{project.title}</h3>
              <div className='card-body '>
                <a 
                  href={project.appHref} 
                  target='_blank' 
                  rel='noreferrer' 
                  className=''>    
                    <img
                      className='card-img shadow'
                      src={require(`../../assets/${project.src}`)}
                      alt={project.alt} 
                    />
                </a>
                <p>{project.description}</p>
                <a 
                  href={project.gitHref} 
                  target='_blank' 
                  rel='noreferrer' 
                  className='git-icon'>
                    <span 
                      className='git-repo-label'>&lt; Check out the code on GitHub /&gt;
                    </span>
                    <img
                      className='rounded shadow git-icon'
                      src={require(`../../assets/GitHub-Mark-32px.png`)}
                      alt='GitHub icon' 
                    /> 
                </a>
              </div>
            </div>
          </div>
        </>
       ))}
      </div>
    </section>
  );
};

export default Project;