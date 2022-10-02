import { createTheme } from '@nextui-org/react';
import sharedTheme from './shared';

const lightTheme = createTheme({
  ...sharedTheme,
  type: 'light'
});


export default lightTheme;