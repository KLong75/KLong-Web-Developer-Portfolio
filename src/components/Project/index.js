import React, {useState } from "react";

import { FaGithub } from 'react-icons/fa';


const Project = () => {
  const [projects] = useState([
    { 
      title: 'MUSICOLOGY',
      src: 'musicology-gif.gif',
      alt: 'screenshot of app',
      description: 'A networking app for musicians. Users can sign up, create a profile describing their musical abilities and interests, make posts on the bulletin board, respond to posts made by other users, and connect with other musicians for creative and business purposes.',
      technologies: 'MongoDB, Express, React, Node.js, GraphQL, Mongoose, Bootstrap, Material UI, bcrypt, Apollo, React router, JSON web tokens, JavaScript, JSX, CSS',
      appHref:'https://musicology-umekev.herokuapp.com/',
      gitHref:'https://github.com/KLong75/musician-networking-app',
    },
    {
      title: 'Who Do?',
      src: 'Who_Do_login.png',
      alt: 'screeenshot of app',
      description: 'An event sharing social media type application. Registered users can create and share events in the Austin area, discover events posted by other users, and RSVP to events they are interested in.',
      technologies: 'MySQL, Handlebars, Express.js, Node.js, bcrypt, Javascript, HTML, CSS',
      appHref: 'https://who-do-austin.herokuapp.com/login',
      gitHref: 'https://github.com/truppeiner/who-do',
    },
    {
      title: 'Movies R Us',
      src: 'movies_r_us.gif',
      alt: 'screeenshot of app',
      description: "Allows a user to search titles by genre across all major subscription streaming services. When a user has selected a title to watch 'Movies 'R Us' links directly to the title for viewing on the application of the streaming service on which the title is available.",
      technologies: 'JavaScript, HTML, CSS, Bulma',
      appHref: 'https://klong75.github.io/Movies-R-Us-KJ/',
      gitHref: 'https://github.com/KLong75/Movies-R-Us-KJ',
    },
    {
      title: 'Deep Thoughts',
      src: 'deep-thoughts-signup.png',
      alt: 'screeenshot of app',
      description: 'A MERN stack social media type application. Users can sign up to create an account . Once registered users can log in, post their "thoughts", read and respond to "thoughts" posted by other users, and become "friends" with other users.',
      technologies: 'MongoDB, Express, React, Node.js, GraphQL, Mongoose, Apollo, bcrypt, JSON web tokens, React router, JavaScript, JSX, CSS',
      appHref: 'https://kj-deep-thoughts.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/deep-thoughts',
    },
    { 
      title: 'Kevin Long | Full Stack Web Developer',
      src: 'web_dev_portfolio.png',
      alt: 'screenshot of app',
      description: 'A single page REACT application built to showcase and share my work as a developer.',
      technologies: 'React, Bootstrap, Email.js, React-icons, React-pdf, Better React-carousel, JavaScript, JSX, CSS',
      appHref:'https://klong75.github.io/klong-web-developer-portfolio/',
      gitHref:'https://github.com/KLong75/klong-web-developer-portfolio',
    },
    {
      title: 'Budget Tracker',
      src: 'budget-tracker.png',
      alt: 'screeenshot of app',
      description: 'A downloadable Progressive Web Application with offline functionality that allows a user to track deposits and expenses.',
      technologies: ' Express.js, MongoDB, Mongoose, IndexedDB, JavaScript, HTML, CSS',
      appHref: 'https://kj-budget-tracker-pwa.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/budget-tracker-pwa',
    },
    {
      title: 'Work Day Scheduler',
      src: 'work-day-scheduler.png',
      alt: 'screeenshot of app',
      description: 'Simple scheduling app allows users to save events for each hour of the business day.',
      technologies: 'Jquery, Moment JS, Javascript, HTML, CSS',
      appHref: 'https://klong75.github.io/daily-calendar/',
      gitHref: 'https://github.com/KLong75/daily-calendar',
    },
    {
      title: 'Note Taker',
      src: 'note-taker2.png',
      alt: 'screeenshot of app',
      description: 'Note Taker is an Express.js note taking app that allows the user to quickly write and save notes so they can keep track of tasks and other important information. Notes can be deleted when they are no longer needed.',
      technologies: 'Express.js, Node.js, JavaScript, HTML, CSS',
      appHref: 'https://note-taker-gnolvek.herokuapp.com/',
      gitHref: 'https://github.com/KLong75/note-taker',
    },
  ])

  return (
    <section className='container shadow-lg'id=''>
      <div className='row' id='portfolio-row'>
        {projects.map((project) => (
          <div className='col-lg-4 col-md-6 col-sm-12' id='individual-project' key={project.title}>
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
                <div className='project-img-overlay'>
                  <div className='project-overlay-title'>&lt; {project.title} / &gt;</div>
                  <div className='project-description'>{project.description}</div>
                  <p className='project-technologies'>Featuring: {project.technologies}</p>
                  <a 
                  href={project.appHref} 
                  target='_blank' 
                  rel='noreferrer' 
                  >   
                    <div>&lt; Deployed Application /&gt;</div>
                  </a>
                  <a 
                  href={project.gitHref} 
                  target='_blank' 
                  rel='noreferrer' 
                  >
                    <div id=''>&lt; GitHub Repository <FaGithub id='git-project-icon' size={18} />  /&gt;
                    </div>    
                  </a>
                </div>
                
                {/* <p className=''>{project.description}</p> */}
                {/* <a 
                  href={project.gitHref} 
                  target='_blank' 
                  rel='noreferrer' 
                >
                  <div id='git-repo-label'>&lt; Check out the code on GitHub. <FaGithub id='git-project-icon' size={18} />  /&gt;
                  </div>
                </a> */}
              </div>
            </div>
          </div>  
       ))}
      </div>
    </section>
  );
};

export default Project;