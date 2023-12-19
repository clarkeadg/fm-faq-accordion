import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import FAQ from './FAQ';

describe('Renders FAQ component correctly', async () => {

  const { container } = render(
    <FAQ/>
  );

  const title = container.querySelector('h1');
  
  it('Should have an h1 tag', async () => {  
    expect(title).not.toBeNull();
  });
});