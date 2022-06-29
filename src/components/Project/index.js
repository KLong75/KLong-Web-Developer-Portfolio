import React from "react";


const Project = (props) => {
  return (
    <section>
      <div className ="card shadow-lg p-3 mb-5 bg-success rounded px-md-2 mt-y mx-3">
        <div className="card-body text-success shadow-lg p-3 mb-5 bg-dark rounded">
          <h3 className="card-title text-center ">Who Do?</h3>
          <img src={require(`../../assets/Who_Do_login.png`)} className="" alt="screeenshot of app"/>
          <h5 className="card-title">Description:</h5>
          <p>"Who Do?" is a social media type application designed for residents of Austin, TX to discover and create events for themselves and others to attend throughout the Austin area. Users can sign up to make an account and log into the site where they can create events, browse events, and RSVP to events. "Who Do?" is a full stack application developed with HTML, CSS (with Bootstrap), JavaScript, Node.js, Bcrypt, Connect-Session-Sequelize, Dotenv, Express.js, Handlebars.js, Express-Session, MySQL2, Sequelize, and Typescript. This was a group project for which I contributed primarily to the back end with additional contributions to the front end functionality, views, and styles.</p>
          <a href="https://github.com/truppeiner/who-do" target="_blank" rel="noreferrer" className="text-success">  <h5 className="card-title">Link to GitHub Repository</h5></a>
          <a href="https://who-do-austin.herokuapp.com/login" target="_blank" rel="noreferrer" className="text-success">  <h5 className="card-title">Link to Deployed Application</h5></a>
        </div>
      </div>
    </section>
  );
};

export default Project;