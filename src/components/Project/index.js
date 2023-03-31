import React, {useState } from "react";

import { FaGithub } from 'react-icons/fa';


const Project = () => {
  const [projects] = useState([
    { 
      title: 'Sam Hahn Travel',
      src: 'sht_home_desktop.png',
      alt: 'screenshot of app',
      description: 'Fully responsive web application for Sam Hahn Travel. PWA with offline functionality. Users can browse the site for information about Sam Hahn Travel and the services they offer. Users can also contact Sam Hahn Travel via the contact form.',
      technologies: 'React, Material UI, JavaScript, HTML, CSS',
      appHref:'https://klong75.github.io/sam-hahn-travel',
      gitHref:'https://github.com/KLong75/sam-hahn-travel',
    },
    { 
      title: 'Vain Mainstream',
      src: 'vainmain-radio.png',
      alt: 'screenshot of app',
      description: 'A web application for musician Vain Mainstream, promoting his latest tour and album. Users can listen to and download album tracks and watch videos from the tour. This single page React application is an installable progressive web app with offline functionality.',
      technologies: 'React, Material UI, JavaScript, HTML, CSS',
      appHref:'https://vainmainstream.com/',
      gitHref:'https://github.com/KLong75/vain-mainstream',
    },
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
      title: 'Movies R Us',
      src: 'movies_r_us.gif',
      alt: 'screeenshot of app',
      description: "Allows a user to search titles by genre across all major subscription streaming services. When a user has selected a title to watch 'Movies 'R Us' links directly to the title for viewing on the application of the streaming service on which the title is available.",
      technologies: 'JavaScript, HTML, CSS, Bulma',
      appHref: 'https://klong75.github.io/Movies-R-Us-KJ/',
      gitHref: 'https://github.com/KLong75/Movies-R-Us-KJ',
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
      title: 'Kevin Long | Full Stack Web Developer',
      src: 'web_dev_portfolio.png',
      alt: 'screenshot of app',
      description: 'A single page REACT application built to showcase and share my work as a developer.',
      technologies: 'React, Bootstrap, Email.js, React-icons, React-pdf, Better React-carousel, JavaScript, JSX, CSS',
      appHref:'https://kevinlong.dev',
      gitHref:'https://github.com/KLong75/klong-web-developer-portfolio',
    },
  ])

  return (
    <section className='container'id=''>
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
                  <h3 className='project-overlay-title'>&lt; {project.title} /&gt;</h3>
                  <p className='project-description'>{project.description}</p>
                  <p className='project-technologies'>Featuring: {project.technologies}</p>
                  <a 
                  href={project.appHref} 
                  target='_blank' 
                  rel='noreferrer' 
                  >   
                    <div className='project-link'>&lt; Deployed Application /&gt;</div>
                  </a>
                  <a 
                  href={project.gitHref} 
                  target='_blank' 
                  rel='noreferrer' 
                  >
                    <div className='project-link'>&lt; GitHub Repository <FaGithub id='git-project-icon' size={18} />  /&gt;
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