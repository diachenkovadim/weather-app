import { useToggle } from 'hooks/useToggle';

export const useHeaderState = () => {
  const [isOpenModalWindow, onToggleModalWindow] = useToggle();

  return { isOpenModalWindow, onToggleModalWindow };
};
