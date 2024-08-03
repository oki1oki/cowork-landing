export const baseAnimation = (x: number, y: number) => ({
  hidden: {
    x,
    y,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
});

export const scaleAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
