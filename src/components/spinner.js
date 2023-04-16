import Image from 'next/image';

const Spinner = ({ show }) => {
  if (show) return <Image src='/loading.gif' width={30} height={30} />;
  return <></>;
};

export default Spinner;