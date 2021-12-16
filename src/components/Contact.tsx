import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconContext } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiGitlab, SiLinkedin } from 'react-icons/si';

const mail = 'christopher.19072@mhs.its.ac.id';

const socials = [
  {
    label: 'GitHub',
    link: 'https://github.com/LordRonz',
    icon: <SiGithub className="text-lrtext-white transition-all duration-300 hover:text-lrred" />,
  },
  {
    label: 'GitLab',
    link: 'https://gitlab.com/lordronz',
    icon: <SiGitlab className="text-lrtext-white transition-all duration-300 hover:text-lrred" />,
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aaronchristopher69/',
    icon: <SiLinkedin className="text-lrtext-white transition-all duration-300 hover:text-lrred" />,
  },
];

const Contact = (): JSX.Element => {
  const [copyStatus, setCopyStatus] = useState('Click to copy');

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} id="contact">
      {socials.map(({ label, link, icon }) => (
        <Grid item key={label}>
          <Link href={link} target="_blank" rel="noopener" aria-label={label}>
            <IconContext.Provider value={{ size: '2em', style: { cursor: 'pointer' } }}>{icon}</IconContext.Provider>
          </Link>
        </Grid>
      ))}
      <Grid item>
        <Tippy
          animation="scale-subtle"
          interactive
          hideOnClick={false}
          content={
            <span className="inline-flex flex-col items-center p-2 bg-dark rounded-md shadow-md border-thin">
              {copyStatus}
              <span className="inline-block font-bold text-lrred">{mail}</span>
            </span>
          }
        >
          <div>
            <CopyToClipboard
              text={mail}
              onCopy={() => {
                setCopyStatus('Copied to clipboard 😳');
                setTimeout(() => setCopyStatus('Click to copy'), 1469);
              }}
            >
              <span>
                <IconContext.Provider value={{ size: '2.3em', style: { cursor: 'pointer' } }}>
                  <FiMail className="text-lrtext-white transition-all duration-300 hover:text-lrred" />
                </IconContext.Provider>
              </span>
            </CopyToClipboard>
          </div>
        </Tippy>
      </Grid>
    </Grid>
  );
};

export default Contact;
