import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('Renders App component correctly', async () => {

  const { container } = render(
    <App/>
  );

  const main = container.querySelector('main');
  
  it('Should have a main tag', async () => {  
    expect(main).not.toBeNull();
  });

});