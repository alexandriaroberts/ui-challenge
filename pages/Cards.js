/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { useRouter } from 'next/router';
import { Themed } from 'theme-ui';

export default function Cards({ data }) {
  const router = useRouter();

  // This is the list of projects to render on the page
  const projects = data?.projects || [];
  return (
    <div>
      <main sx={{ margin: '0 auto', maxWidth: '1440px' }}>
        <section
          sx={{
            display: 'grid',
            gridGap: '30px',
            gridTemplateColumns: 'repeat(6, 180px)',
            margin: '0 111px 152px 99px',
            '@media screen and (max-width: 1439px)': {
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            },
            '@media screen and (max-width: 1024px)': {
              margin: '0 41px 100px 41px',
            },
            '@media screen and (max-width: 768px)': {
              margin: '0 21px 50px 21px',
            },
          }}
        >
          {projects
            ? projects.map((project) => {
                return (
                  <div key={project.id}>
                    <div
                      onClick={() => {
                        router.push({
                          pathname: '/project/[pid]',
                          query: { pid: project.id },
                        });
                      }}
                      sx={{
                        backgroundColor: 'background',
                        boxShadow: '0px 4px 24px rgba(30, 37, 44, 0.16)',
                        borderRadius: '4px',
                        position: 'relative',
                      }}
                    >
                      <div
                        sx={{
                          width: '100%',
                          height: '149px',
                        }}
                      >
                        <Themed.img
                          src={`https://ipfs.io/ipfs/${project.avatar}`}
                          alt={project.name}
                          sx={{
                            borderRadius: '4px 4px 0 0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <h3
                        sx={{
                          padding: '19px 0 24px 0',
                          textAlign: 'center',
                          fontFamily: 'heading',
                          fontSize: '16px',
                          fontWeight: 'heading',
                          lineHeight: '24px',
                          letterSpacing: '-0.5px',
                          color: 'tertiary',
                          margin: 0,
                        }}
                      >
                        {project.name}
                      </h3>
                      <div
                        sx={{
                          position: 'absolute',
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '100%',
                          width: '100%',
                          opacity: 0,
                          transition: '.5s ease',
                          backgroundColor: 'cardHover',
                          border: '8px solid rgba(255, 255, 255, 0.64)',
                          boxShadow: '0px 4px 24px rgba(30, 37, 44, 0.16)',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          '&:hover': {
                            opacity: 1,
                            cursor: 'pointer',
                          },
                        }}
                      >
                        <div className='text'>
                          <h3
                            sx={{
                              fontFamily: 'heading',
                              fontSize: '16px',
                              lineHeight: '24px',
                              fontWeight: 'heading',
                              letterSpacing: '-0.5px',
                              margin: 0,
                            }}
                          >
                            {project.name}
                          </h3>
                          <p
                            sx={{
                              fontFamily: 'heading',
                              fontSize: '14px',
                              lineHeight: '24px',
                              fontWeight: 'body',
                              letterSpacing: '-0.5px',
                              color: '#515B64',
                              marginTop: '10px',
                            }}
                          >
                            Creator: Liz Appleby <br />
                            22/01/2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </section>
      </main>
    </div>
  );
}
