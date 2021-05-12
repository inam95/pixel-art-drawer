/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import useStyles from './Grid.styles';

const offCell = {
  on: false,
  color: '#000'
};

const Grid = ({ currentColor, cells, setCells }) => {
  const updateCell = (i, defaultState) => (e) => {
    e.preventDefault();
    setCells(
      cells.map((cell, cellIndex) => {
        if (cellIndex === i) {
          if (defaultState) return defaultState;
          return {
            color: currentColor,
            on: true
          };
        }
        return cell;
      })
    );
  };

  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {cells.map((cell, i) => (
        <div
          key={i}
          style={{ background: cell.on ? cell.color : '#fff' }}
          className={classes.cell}
          onClick={updateCell(i)}
          onContextMenu={updateCell(i, offCell)}
        />
      ))}
    </div>
  );
};

export default Grid;
