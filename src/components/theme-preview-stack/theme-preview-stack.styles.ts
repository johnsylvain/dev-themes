import { css } from 'emotion';

export default {
  stack: css({
    position: 'relative',
    minHeight: 500
  }),

  stackItem: css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    transition: `0.3s ease`,
    transformOrigin: 'bottom center'
  }),

  stackItemPositions: [
    css({
      opacity: 1,
      transform: 'scale(1) translateY(0px)',
      zIndex: 1000
    }),
    css({
      opacity: 0.66,
      transform: 'scale(0.9) translateY(10px)',
      zIndex: 900
    }),
    css({
      opacity: 0.33,
      transform: 'scale(0.8) translateY(20px)',
      zIndex: 800
    }),
    css({
      opacity: 0,
      transform: 'scale(0.8) translateY(20px)',
      zIndex: 700
    })
  ]
};