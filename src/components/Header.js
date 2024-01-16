import netflixgpt from './netflixgpt.png';

const Header = () => {
  return (
    <div className='absolute w-[100%] px-8 py-4 bg-gradient-to-b from-[#131313] z-10'>
      <img src={netflixgpt} alt='logo' className='w-52 h-16 mx-[10px] ' />
    </div>
  );
};

export default Header;
