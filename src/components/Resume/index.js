import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../../assets/Kevin_Long_Resume.pdf'


const Resume = () => {

  return (
    <>
    <a href={pdf} download>
      <h2 className='section-title'>&lt; My Resume /&gt;</h2>
    </a>
    <p className='section-title'>&lt; click above to download /&gt;</p>
    <section className='container shadow-lg'>
      <div className='row'> 
        <div className='col-12'>
          <div className='card shadow-lg'>
            <div className='card-body'> 
              <Document file={pdf} className='pdf'>
                <Page pageNumber={1} /> 
              </Document>
             </div>
          </div>  
        </div>
        <div className='col-12'>
           <div className='card shadow-lg'>
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