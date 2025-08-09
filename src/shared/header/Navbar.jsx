import Container from '../../components/Container'
import Flex from '../../components/Flex';
import Image from '../../components/Image';
import logo from '../../assets/Logo.jpg';
import NavList from '../../components/NavList'


const Navbar = () => {
    return (
        <div className='py-8'>
            <Container>
                <Flex>
                    <div className='w-2/6'>
                    <Flex>
                        <Image style={'w-[24px]'} Source={logo}></Image>
                        <h3 className='text-xl font-bold'>REBI</h3>
                    </Flex>
                    </div>
                    <div className='w-4/6 '>
                    <ul className='flex items-center gap-6'>
                        <NavList pathName={'/'} title={'home'}></NavList>
                        <NavList pathName={'/shop'}title={'Shop'}></NavList>
                        <NavList pathName={'/about'}title={'About'}></NavList>
                        <NavList pathName={'/contacts'}title={'Contacts'}></NavList>
                        <NavList pathName={'/journal'}title={'Journal'}></NavList>
                    </ul>
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default Navbar;