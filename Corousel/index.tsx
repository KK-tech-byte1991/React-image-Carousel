import { Box, Button, Grid, IconButton } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import images from './images';
import './styles.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Corousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };
  const handleNext = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <Grid
      container
      xs={12}
      justifyContent="center"
      alignItems="center"
      direction="row"
    >
      <Grid item>
        <IconButton className="backButton" onClick={handlePrevious}>
          <ArrowBackIosIcon />
        </IconButton>
      </Grid>
      <Grid item justifyContent="center">
        <img className="imgBox" src={images[currentImage]} />
      </Grid>

      <Grid item>
        <IconButton className="nextButton" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
