import { render } from '@testing-library/react';

import DashboardTable from './dashboard-table';

describe('DashboardTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardTable />);
    expect(baseElement).toBeTruthy();
  });
});
