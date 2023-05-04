import { render } from '@testing-library/react';

import Text from '../Text';

describe('Text', () => {
  it('should render correctly', () => {
    const { container } = render(<Text />);

    expect(container).toBeInTheDocument();
  });
});
