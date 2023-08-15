import type { PropsWithChildren } from 'react';

import { Header } from './_locals';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};
