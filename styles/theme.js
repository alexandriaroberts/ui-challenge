export const theme = {
  fonts: {
    body: 'Helvetica, sans-serif',
    heading: 'Arial, sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#1E252C',
    background: '#fff',
    primary: '#1E252C',
    secondary: 'rgba(9, 6, 16, 0.64);',
    tertiary: '#828282',
    cardHover: '#E5E5E5',
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    h1: {
      fontFamily: 'heading',
      fontStyle: 'normal',
      fontSize: '36px',
      lineHeight: '56px',
      letterSpacing: '-0.8px',
      fontWeight: 'bold',
      '@media screen and (max-width: 1024px)': {
        fontSize: '24px',
        lineHeight: '36px',
      },
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    p: {
      fontFamily: 'heading',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '32px',
      color: 'secondary',
      display: 'flex',
      justifyContent: 'space-between',
      margin: 0,
      '@media screen and (max-width: 768px)': {
        justifyContent: 'start',
      },
    },
  },
};
