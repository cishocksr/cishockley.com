import { RoughNotation } from 'react-rough-notation';

export const RainbowHighlight = ({ children }) => {
  const animationDuration = Math.floor(30 * children.length);
  return (
    <RoughNotation
      type=''
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
    >
      {children}
    </RoughNotation>
  );
};
