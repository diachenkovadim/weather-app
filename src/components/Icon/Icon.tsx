import { FC, SVGProps } from 'react';

import { ReactComponent as icon404 } from 'assets/ic_404.svg';

const ICONS = {
  icon404,
};

type TIconType = keyof typeof ICONS;

interface IIconProps extends SVGProps<SVGSVGElement> {
  type: TIconType;
}

export const Icon: FC<IIconProps> = (props) => {
  const { type, ...other } = props;
  const NewIcon = ICONS[type];
  return <NewIcon {...other} />;
};
