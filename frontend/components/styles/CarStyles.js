import styled from 'styled-components';

const Car = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  p {
    line-height: 1;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 1rem;
    font-size: 1.2rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightgrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightgrey};
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
    a {
      text-decoration: none;
      font-size: 12px;
      font-weight: 500;
    }
    button {
      font-weight: 500;
      text-transform: capitalize;
      font-size: 1.2rem;
    }
  }
`;

export default Car;
