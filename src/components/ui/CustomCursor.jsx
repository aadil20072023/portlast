import { useCursor } from '../../hooks';

const CustomCursor = () => {
  const { dotRef, ringRef, hovered } = useCursor();

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;
