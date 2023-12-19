import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import Accordion from './Accordion';

describe('Renders Accordion component correctly', async () => {

  const { container } = render(
    <div>
      <Accordion title="Title">
        <div>
          Content
        </div>
      </Accordion>
    </div>
  );

  const title = container.querySelector('.accordion-title');
  const content = container.querySelector('.accordion-content');
  
  it('Should have title and content', async () => {  
    expect(title).not.toBeNull();
    expect(content).not.toBeNull();
  });

  it('Click on title adds active class', async () => {      
    fireEvent.click(screen.getByText('Title'));
    const active = container.querySelector('.accordion.active');
    expect(active).not.toBeNull();
  });
});