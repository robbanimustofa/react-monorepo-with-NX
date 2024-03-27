import styles from './dashboard-table.module.css';

/* eslint-disable-next-line */
export interface DashboardTableProps { }

export function DashboardTable(props: DashboardTableProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DashboardTable!</h1>
    </div>
  );
}

export default DashboardTable;
