import styled from 'styled-components';

import Nav from './Nav';

const HeaderStyles = styled.header`
  height: 40px;
  width: 100%;
  background-color: '#282828';
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Nav />
    </HeaderStyles>
  );
}
