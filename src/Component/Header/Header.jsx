import img_profile from '../../assets/react.svg'
const Header = () => {
    return (
        <div className='flex justify-between border-b-4 py-3'>
            <h1 className='text-3xl font-bold'>Cafa section</h1>
            <img src={img_profile} alt="" />
            
        </div>
    );
};

export default Header;