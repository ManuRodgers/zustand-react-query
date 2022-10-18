import { Box, Button, Slider, Typography } from '@mui/material';
import { NextPage } from 'next';
import { memo } from 'react';

import { useBearStore } from '@/stores/useBearStore';

const HomePage: NextPage = () => {
  const bears = useBearStore.useBears();
  const increase = useBearStore.useIncrease();
  const decrease = useBearStore.useDecrease();
  const increment = useBearStore.useIncrement();
  const removeAllBears = useBearStore.useRemoveAllBears();
  return (
    <Box>
      <Typography variant='h2' component='h4'>
        {bears}
      </Typography>
      <Slider
        defaultValue={30}
        className='text-teal-300'
        componentsProps={{ thumb: { className: 'rounded-sm' } }}
      />
      <Button
        onClick={() => {
          increase(5);
        }}
      >
        Increase
      </Button>
      <Button
        onClick={() => {
          decrease(5);
        }}
      >
        Decrease
      </Button>
      <Button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </Button>
      <Button onClick={removeAllBears}>Remove all</Button>
    </Box>
  );
};

export default memo(HomePage);
