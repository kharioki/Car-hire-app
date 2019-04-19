import Link from 'next/link';

import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/list">
      <a>List your car</a>
    </Link>
    <Link href="/howItWorks">
      <a>How It Works</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  </NavStyles>
);

export default Nav;
