import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconContext } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import style from './Contact.module.css';

const github = 'https://github.com/LordRonz';
const mail = 'christopher.19072@mhs.its.ac.id';
const linkedin = 'https://www.linkedin.com/in/aaronchristopher69/';

const Contact = (): JSX.Element => {
  const [copyStatus, setCopyStatus] = useState('Click to copy');

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} id="contact">
      <Grid item>
        <Link href={github} target="_blank" rel="noopener" aria-label="Twitter">
          <IconContext.Provider value={{ size: '2em', style: { cursor: 'ne-resize' } }}>
            <SiGithub className={style.socialIcon} />
          </IconContext.Provider>
        </Link>
      </Grid>
      <Grid item>
        <Link href={linkedin} target="_blank" rel="noopener" aria-label="Twitter">
          <IconContext.Provider value={{ size: '2em', style: { cursor: 'ne-resize' } }}>
            <SiLinkedin className={style.socialIcon} />
          </IconContext.Provider>
        </Link>
      </Grid>
      <Grid item>
        <Tippy
          animation="scale-subtle"
          interactive
          hideOnClick={false}
          content={(
            <span className="inline-flex flex-col items-center p-2 bg-dark rounded-md shadow-md border-thin">
              { copyStatus }
              <span className="inline-block font-bold" style={{ color: '#eb2754' }}>
                { mail }
              </span>
            </span>
        )}
        >
          <div>
            <CopyToClipboard
              text={mail}
              onCopy={() => {
                setCopyStatus('Copied to clipboard 😳');
                setTimeout(
                  () => setCopyStatus('Click to copy'),
                  1469,
                );
              }}
            >
              <span>
                <IconContext.Provider value={{ size: '2.3em', style: { cursor: 'pointer' } }}>
                  <FiMail className={style.socialIcon} />
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
