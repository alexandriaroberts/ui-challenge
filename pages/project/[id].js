/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx } from 'theme-ui';
import { useProject } from '../../hooks/queries';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Themed } from 'theme-ui';
export default function Project() {
  const router = useRouter();
  const projectId = router?.query?.id ?? '';

  const { data: project, error } = useProject(projectId);

  // This is a project that should be rendered
  console.log('project: ', project);

  return (
    <main
      sx={{
        margin: '0 auto',
        maxWidth: '1440px',
      }}
    >
      <div
        sx={{
          margin: '88px 103px 0px 101px',
          '@media screen and (max-width: 1024px)': {
            margin: '76px 41px 100px 41px',
          },
          '@media screen and (max-width: 768px)': {
            margin: '36px 21px 50px 21px',
          },
        }}
      >
        {project ? (
          <>
            <Themed.h1
              sx={{
                margin: '0 0 65px 0',
                '@media screen and (max-width: 768px)': {
                  margin: '0 0 33px 0',
                },
              }}
            >
              Individual project page
            </Themed.h1>
            <div
              sx={{
                objectFit: 'cover',
                height: '304px',
                margin: '0 0 38px 0px',
              }}
            >
              <Themed.img
                src={`https://ipfs.io/ipfs/${project.image}`}
                alt={project.name}
                sx={{
                  borderRadius: '8px',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div
              className='project-info'
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 0.5fr',
                gridGap: 110,
                '@media screen and (max-width: 1024px)': {
                  gridGap: 50,
                },
                '@media screen and (max-width: 768px)': {
                  gridTemplateColumns: '1fr ',
                  gridGap: '5px',
                },
              }}
            >
              <div className='project-description'>
                <h2
                  sx={{
                    fontFamily: 'heading',
                    fontStyle: 'normal',
                    fontSize: '24px',
                    letterSpacing: '-0.8px',
                    fontWeight: 'bold',
                    margin: '0 0 24px 0',
                    '@media screen and (max-width: 1024px)': {
                      fontSize: '18px',
                    },
                  }}
                >
                  Project Description
                </h2>
                <p
                  sx={{
                    margin: 0,
                    fontFamily: 'heading',
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '32px',
                    color: '#1B2124',
                  }}
                >
                  {project.description}
                </p>
              </div>
              <div className='project-creation-details'>
                <Themed.p>
                  Created At
                  <span
                    sx={{
                      color: 'primary',
                      '@media screen and (max-width: 768px)': {
                        marginLeft: '30px',
                      },
                    }}
                  >
                    19 November 2021
                  </span>
                </Themed.p>
                <Themed.p>
                  Owner{' '}
                  <span
                    sx={{
                      color: 'primary',
                      '@media screen and (max-width: 768px)': {
                        marginLeft: '30px',
                      },
                    }}
                  >
                    Erika Truscott
                  </span>
                </Themed.p>
              </div>
            </div>
            <button
              sx={{
                background: 'rgba(111, 76, 255, 0.64)',
                borderRadius: '4px',
                fontFamily: 'heading',
                fontStyle: 'normal',
                fontWeight: 'heading',
                fontSize: '14px',
                lineHeight: '20px',
                outline: 'none',
                border: 'none',
                letterSpacing: '0.4px',
                color: 'rgba(255, 255, 255, 0.88)',
                padding: '14px 32px',
                marginTop: '38px',
                marginBottom: '14rem',

                '&:hover': {
                  color: '#FFF',
                  background: '#6F4CFF',
                  cursor: 'pointer',
                  transition: '0.3s ease-in',
                },
              }}
            >
              Upvote
            </button>
          </>
        ) : null}
      </div>
    </main>
  );
}
