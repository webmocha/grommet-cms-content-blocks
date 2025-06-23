import styled from 'styled-components';
import { spanStyles } from './styles';


const IconSpan = styled.span`
  ${({ color }) => spanStyles(color)}
`;

export default IconSpan;