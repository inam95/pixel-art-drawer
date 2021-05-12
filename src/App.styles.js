import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  colorSwatchContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  colorSwatch: {
    margin: '0.5rem',
    padding: '0',
    width: '25px',
    height: '25px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  },
  colorString: {
    marginTop: '20px',
    maxWidth: '50%',
    fontFamily: 'monospace',
    fontSize: '15px',
    wordWrap: 'break-word'
  }
});
