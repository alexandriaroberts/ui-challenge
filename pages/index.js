/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx } from 'theme-ui';
import { useProjects } from '../hooks/queries';
import { useRouter } from 'next/router';
import { Themed } from 'theme-ui';

import Cards from './Cards';

export default function Home() {
  const { data } = useProjects();

  // This is the list of projects to render on the page
  return (
    <div>
      <main sx={{ margin: '0 auto', maxWidth: '1440px' }}>
        <div
          sx={{
            margin: '0 90px',
            '@media screen and (max-width: 1024px)': {
              margin: '0 50px',
            },
            '@media screen and (max-width: 768px)': {
              margin: '0 11px',
            },
          }}
        >
          <Themed.h1
            sx={{
              marginTop: '76px',
              marginBottom: 0,
              '@media screen and (max-width: 768px)': {
                marginTop: '36px',
              },
            }}
          >
            NFT projects registry
          </Themed.h1>
          <p
            sx={{
              fontFamily: 'body',
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '-0.4px',
              fontWeight: 'normal',
              marginTop: 0,
              marginBottom: '33px',
              color: 'secondary',
            }}
          >
            157 Projects
          </p>
        </div>
        <Cards data={data} />
      </main>
    </div>
  );
}
