import type { TextProps } from './interface';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

export const Span = styled.span<TextProps>`
  ${space}
  ${color}
  ${typography}
`;
