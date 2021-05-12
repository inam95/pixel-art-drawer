import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '80vw',
    height: '50vh',
    outline: '2px solid black'
  },
  cell: {
    cursor: 'pointer',
    border: '2px solid black',
    background: '#fff',
    transition: 'all 100ms linear',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
});
