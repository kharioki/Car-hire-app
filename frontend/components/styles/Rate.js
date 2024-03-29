import styled from 'styled-components';

const Rate = styled.h6`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${props => props.theme.brown};
    display: inline;
    line-height: 1.3;
    font-size: 2rem;
    text-align: center;
    text-decoration: none;
    color: white;
    padding: 0 1rem;
  }
`;

export default Rate;
