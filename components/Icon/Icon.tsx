import React from "react";
import { VariantProps, CSS } from "stitches.config";
import { StyledIcon } from "components/Icon/Icon.styled";
import { Add, Audio, Close, Image, Video } from "components/Icons";

/**
 * Define SVG subelement <title>
 */
type TitleShape = {
  children: React.ReactChild;
};

const Title: React.FC<TitleShape> = ({ children }) => {
  return <title>{children}</title>;
};

/**
 * Define <svg>
 */

type IconShape = {
  children: React.ReactChild | React.ReactChild[];
};
interface IconComposition {
  Add: React.FC<any>;
  Audio: React.FC;
  Close: React.FC;
  Image: React.FC;
  Title: React.FC<TitleShape>;
  Video: React.FC;
}

type VariantComponentProps = React.SVGAttributes<SVGElement>;
type IconVariants = VariantProps<typeof StyledIcon>;
type IconProps = VariantComponentProps &
  IconVariants & { css?: CSS } & IconShape;

const Icon: React.FC<IconProps> & IconComposition = (props) => {
  return (
    <StyledIcon
      {...props}
      data-testid="icon-svg"
      role="img"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </StyledIcon>
  );
};

/**
 * Title
 */
Icon.Title = Title;

/**
 * Path
 */
Icon.Add = Add;
Icon.Audio = Audio;
Icon.Close = Close;
Icon.Image = Image;
Icon.Video = Video;

export { Icon };
