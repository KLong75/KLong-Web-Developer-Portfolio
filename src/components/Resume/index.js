import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../../assets/Kevin_Long_Resume.pdf'


const Resume = () => {

  return (
    
    <section>
      <Document file={pdf}>
        <Page pageNumber={1} />
      </Document>
    </section>
    
  );
};

export default Resume;