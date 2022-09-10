import { createTheme } from '@mui/material';

import { isBrowser } from '@/utils/createEmotionCache';

let rootElement = null;
if (isBrowser) {
  rootElement = document.getElementById('__next');
}
// All `Portal`-related components need to have the the main app wrapper element as a container
// so that the are in the subtree under the element used in the `important` option of the Tailwind's config.
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

export default theme;
