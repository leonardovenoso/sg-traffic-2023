import Image from 'next/image';
import styles from '@/styles/spinner.module.css';

const Spinner = ({ show }) => {
  if (show) return <Image src='/loading.gif' width={30} height={30} className={styles.spinner} alt='' />;
  return <></>;
};

export default Spinner;