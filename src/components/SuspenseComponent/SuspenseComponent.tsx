import { FC, Suspense } from 'react';

import { LoadingScreen } from '../LoadingScreen';

export const SuspenseComponent: FC<{ children: React.ReactNode }> = ({
  children,
}) => <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
