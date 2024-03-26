import styles from './usermanagement.module.css';

/* eslint-disable-next-line */
export interface UsermanagementProps {}

export function Usermanagement(props: UsermanagementProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Usermanagement!</h1>
    </div>
  );
}

export default Usermanagement;
