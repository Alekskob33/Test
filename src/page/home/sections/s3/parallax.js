let i = 0;

export const parallax = (targetElem, container, { x, y }) => {
  if (!targetElem || !container) return;
  const calcPosition = ({ x, y }) => {
    const ratio = 0.05;

    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const targetX = (deltaX * ratio).toFixed(1);
    const targetY = (deltaY * ratio).toFixed(1);

    return { elemX: targetX, elemY: targetY };
  };

  const updatePosition = ({ x, y }) => {
    const { elemX, elemY } = calcPosition({ x, y });

    targetElem.style.setProperty('--x', `${elemX}px`);
    targetElem.style.setProperty('--y', `${elemY}px`);
  };

  updatePosition({ x, y });
};
