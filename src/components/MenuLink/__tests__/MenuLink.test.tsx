import { render } from '@testing-library/react';

import { ActiveSectionProvider } from '@/contexts/ActiveSection';

import MenuLink from '../MenuLink';

describe('MenuLink', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ActiveSectionProvider initialActiveSection="Home">
        <MenuLink href="#href" label="label" />
      </ActiveSectionProvider>,
    );

    expect(container).toBeInTheDocument();
  });
});
