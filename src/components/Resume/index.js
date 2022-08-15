import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../../assets/Kevin_Long_Resume.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


const Resume = () => {

  return (
    <>
    <h2 className='section-title'>&lt; My Resume /&gt;</h2>
    <a href={pdf} download>
      <p className='section-sub-title'>&lt; Click to download my resume. /&gt;</p>
    </a>
    <section className='container shadow-lg'id='resume-container'>
      <div className='row' id='resume-row'> 
        <div className='col-12'>
          <div className='card' id='resume-card'>
            <div className='card-body'>  
              <Document file={pdf} className='pdf'>
                <Page pageNumber={1} /> 
              </Document>
              
            </div> 
          </div>
        </div>
        <div className='col-12'>
          <div className='card' id='resume-card'>
            <div className='card-body'> 
              <Document file={pdf} className='pdf'>
                <Page pageNumber={2} /> 
              </Document>
             </div>
          </div>
        </div>
      </div> 
    </section>
    </>
  );
};

export default Resume;