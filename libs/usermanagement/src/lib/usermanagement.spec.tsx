import { render } from '@testing-library/react';

import Usermanagement from './usermanagement';

describe('Usermanagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Usermanagement />);
    expect(baseElement).toBeTruthy();
  });
});
