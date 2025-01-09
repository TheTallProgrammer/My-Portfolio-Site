import { createContext } from 'react';
const SCROLL_OFFSET = 80;

const ScrollContext = createContext({
  scrollToAbout: () => {}, // default empty function
});

export default ScrollContext;