import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Rings
      height="100"
      width="100"
      color="#4AABFF"
      radius="6"
      wrapperStyle={{ margin: '0 auto' }}
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

export default Loader;
