import { ElementType } from "react";

type IconProps = {
  icon: ElementType;
  /**
   * Cor de preenchimento do icone
   */
  fill?: string,
  /**
   * Tamanho do icone em pixels
   */
  size?: number,
  strokeWidth?: number,
  absoluteStrokeWidth?: boolean,
  color?: string,
  className?: string,
};

export default function Icon({ icon: Icon, ...rest }: IconProps) {
	return <Icon {...rest} />
}