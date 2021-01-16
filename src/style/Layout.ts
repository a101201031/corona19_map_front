import type { DivProps, RowColProps } from 'style/interface';
import styled from 'styled-components';
import { border, color, flexbox, layout, position, space } from 'styled-system';

export const Div = styled.div<DivProps>`
  ${space}
  ${layout}
  ${border}
  ${color}
  ${position}
`;

export const Row = styled.div<RowColProps>`
  display: flex;
  flex-direction: row;
  ${space}
  ${layout}
  ${border}
  ${flexbox}
  ${color}
  ${position}
`;

export const Col = styled.div<RowColProps>`
  display: flex;
  flex-direction: column;
  ${space}
  ${layout}
  ${border}
  ${flexbox}
  ${color}
  ${position}
`;
