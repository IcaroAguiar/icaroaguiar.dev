import '@testing-library/jest-dom';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock framer-motion to skip animations in tests
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    ...jest.requireActual('framer-motion'),
    motion: {
      div: React.forwardRef(({ children, whileInView, initial, variants, transition, viewport, ...props }: any, ref: any) => 
        React.createElement('div', { ...props, ref }, children)
      ),
    },
    useReducedMotion: () => false,
  };
});
