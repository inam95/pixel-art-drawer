/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useMemo, useState } from 'react';

import ColorPicker from './components/ColorPicker';
import Grid from './components/Grid';

import useStyles from './App.styles';

const offCell = {
  on: false,
  color: '#000000'
};

const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);

  const [currentColor, setCurrentColor] = useState('#568C58');
  const classes = useStyles();

  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color))
    ],
    [cells]
  );

  const colorString = useMemo(
    () => cells.map((cell) => cell.color.replace('#', '')).join(','),
    [cells]
  );

  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color, i) => (
          <div
            key={i}
            className={classes.colorSwatch}
            onClick={() => setCurrentColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <p className={classes.colorString}>{colorString}</p>
    </div>
  );
}

export default App;
