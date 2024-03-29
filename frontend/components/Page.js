import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  white: '#FFFFFF',
  brown: '#FF7B00',
  offWhite: '#EDEDED',
  maxWidth: '80vw',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
  /* display: grid; */
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

createGlobalStyle`
    @font-face {
      font-family: 'radnika_next';
      src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
    html {
      box-sizing: border-box;
      font-size: 10px;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      /* padding: 0;
      margin: 0; */
      font-size: 1.2rem;
      line-height: 2;
      font-family: 'radnika_next';
    }
    a {
      text-decoration: none;
      color: ${theme.black};
    }
  `;

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
