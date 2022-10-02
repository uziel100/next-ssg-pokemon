import { createTheme } from '@nextui-org/react';
import sharedTheme from './shared';

const darkTheme = createTheme({
  ...sharedTheme,
  type: 'dark'
});


export default darkTheme;