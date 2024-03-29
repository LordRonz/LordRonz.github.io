import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconContext } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiGitlab, SiHackerrank, SiLeetcode, SiLinkedin, SiStackoverflow } from 'react-icons/si';

const mail = 'christopher.19072@mhs.its.ac.id';

const socials = [
  {
    label: 'GitHub',
    link: 'https://lr-link.vercel.app/github',
    icon: <SiGithub className='text-primary-50 transition-all duration-300 hover:text-primary-300' title='GitHub' />,
  },
  {
    label: 'GitLab',
    link: 'https://lr-link.vercel.app/gitlab',
    icon: <SiGitlab className='text-primary-50 transition-all duration-300 hover:text-primary-300' title='GitLab' />,
  },
  {
    label: 'Hackerrank',
    link: 'https://lr-link.vercel.app/hackerrank',
    icon: <SiHackerrank className='text-primary-50 transition-all duration-300 hover:text-primary-300' title='Hackerrank' />,
  },
  {
    label: 'LeetCode',
    link: 'https://lr-link.vercel.app/leetcode',
    icon: <SiLeetcode className='text-primary-50 transition-all duration-300 hover:text-primary-300' title='LeetCode' />,
  },
  {
    label: 'LinkedIn',
    link: 'https://lr-link.vercel.app/linkedin',
    icon: <SiLinkedin className='text-primary-50 transition-all duration-300 hover:text-primary-300' title='LinkedIn' />,
  },
  {
    label: 'Stack Overflow',
    link: 'https://lr-link.vercel.app/stackoverflow',
    icon: (
      <SiStackoverflow
        className='text-primary-50 transition-all duration-300 hover:text-primary-300'
        title='StackOverflow'
      />
    ),
  },
] as const;

const Contact = (): JSX.Element => {
  const [copyStatus, setCopyStatus] = useState<string>('Click to copy');

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' spacing={3} id='contact'>
      {socials.map(({ label, link, icon }) => (
        <Grid item key={label}>
          <Link href={link} target='_blank' rel='noopener' aria-label={label}>
            <IconContext.Provider value={{ size: '2em', style: { cursor: 'pointer' } }}>{icon}</IconContext.Provider>
          </Link>
        </Grid>
      ))}
      <Grid item>
        <Tippy
          animation='scale-subtle'
          interactive
          hideOnClick={false}
          content={
            <span className='inline-flex flex-col items-center p-2 bg-dark rounded-md shadow-md border-thin'>
              {copyStatus}
              <span className='inline-block font-bold text-primary-300'>{mail}</span>
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
                  <FiMail className='text-primary-50 transition-all duration-300 hover:text-primary-300' title='e-mail' />
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
