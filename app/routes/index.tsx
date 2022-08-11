import * as React from 'react';
import { useGlobal } from '@app/hooks';

import Welcome from '@app/screens/Welcome';
import Home from '@app/screens/Home';

function Routes() {
  const { user } = useGlobal();

  return user ? <Home /> : <Welcome />;
}

export default Routes;
