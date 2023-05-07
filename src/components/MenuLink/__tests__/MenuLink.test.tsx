import { render } from '@testing-library/react';

import MenuLink from '../MenuLink';

describe('MenuLink', () => {
  it('should render correctly', () => {
    const { container } = render(<MenuLink href="#href" label="label" />);

    expect(container).toBeInTheDocument();
  });
});
