import {
  SpaceProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
  ColorProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';

export interface DivProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    ColorProps,
    PositionProps {}
export interface RowColProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    FlexboxProps,
    ColorProps,
    PositionProps {}
export interface TextProps extends SpaceProps, ColorProps, TypographyProps {}
