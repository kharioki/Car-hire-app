import styled from 'styled-components';

const PromoTag = styled.span`
  background: ${props => props.theme.brown};
  transform: rotate(3deg);
  color: white;
  font-weight: 400;
  padding: 5px;
  line-height: 1;
  font-size: 1.5rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export default PromoTag;
