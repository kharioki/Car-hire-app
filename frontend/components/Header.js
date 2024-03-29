import Router from 'next/router';
import NProgress from 'nprogress';
import Link from 'next/link';
import styled from 'styled-components';

import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 3rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-2deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.brown};
    color: white;
    text-transform: capitalize;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 5px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Rent-my-car</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">Search</div>
  </StyledHeader>
);

export default Header;
