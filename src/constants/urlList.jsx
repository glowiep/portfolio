import * as React from 'react';
import { FaGithub, FaDev, FaLinkedin } from 'react-icons/fa';
import { GrDocumentDownload } from "react-icons/gr";

export const urlList = {
  author: {
    name: 'Muhammad Ahmad',
    accounts: [
      {
        url: 'https://github.com/glowiep',
        label: 'GitHub',
        type: 'gray',
        icon: <FaGithub size="2em"/>
      },
      {
        url: 'https://linkedin.com/in/glowiep',
        label: 'LinkedIn',
        type: 'linkedin',
        icon: <FaLinkedin size="2em"/>
      },
      {
        url: 'https://dev.to/glowiep',
        label: 'DEV.to Articles',
        type: 'gray',
        icon: <FaDev size="2em"/>
      },
      {
        url: 'https://bit.ly/gloria_lim',  
        // url: '../../../../../../public/1_GL_Resume.pdf',
        label: 'Resume',
        type: 'gray',
        icon: <GrDocumentDownload size="2em"/>
      },
      
    ]
  }
};