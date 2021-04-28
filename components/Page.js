import styled from 'styled-components';

import Header from './Header';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
