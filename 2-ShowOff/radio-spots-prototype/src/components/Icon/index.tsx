import * as React from 'react';
import { ReactComponent as P1 } from '../../assets/icons/p1.svg';
import { ReactComponent as P2 } from '../../assets/icons/p2.svg';
import { ReactComponent as P3 } from '../../assets/icons/p3.svg';
import { ReactComponent as P4 } from '../../assets/icons/p4.svg';
import { ReactComponent as P6Beat } from '../../assets/icons/p6beat.svg';
import { ReactComponent as SpecialRadio } from '../../assets/icons/special-radio.svg';
import { FunctionComponent, SVGProps } from "react";

type Icons = {
  [key: string]: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const icons: Icons = {
  p1: P1,
  p2: P2,
  p3: P3,
  p4: P4,
  p6beat: P6Beat,
  'special-radio': SpecialRadio
};

interface ComponentProps {
  name: string;
}

const Icon: React.FC <ComponentProps> = (props) => {
  const { name } = props;
  const SVGComponent = icons[name];

  return SVGComponent ? <SVGComponent /> : <SpecialRadio />;
};

export default Icon;