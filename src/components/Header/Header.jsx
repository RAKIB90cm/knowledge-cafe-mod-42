import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h4 className='text-4xl font-bold'>Knowedge Cafe</h4>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;