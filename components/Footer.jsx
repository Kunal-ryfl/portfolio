import React from 'react'
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <div className='footer-container'>
        
      <div>
          <Button
            className="btn"
            href="https://www.linkedin.com/in/kunal-bhardwaj-b07b87217/"
          >
            <LinkedInIcon />
          </Button>
    
          <Button
            className="btn"
            color="error"
            href="mailto:kunalsharma070806@gmail.com"
          >
            <MailIcon />
          </Button>
    
          <Button
            className="btn"
            color="secondary"
            href="https://github.com/Kunal-ryfl"
          >
            <GitHubIcon />
          </Button>
    
        </div>
         <p> Developed by Kunal Bhardwaj {'©'} 2022 </p>
         <p> Happy Coding! </p>
        </div>
  )
}

export default Footer
