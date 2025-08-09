import Container from '../../components/Container'
import Flex from '../../components/Flex';
import Image from '../../components/Image';
import logo from '../../assets/Logo.jpg';
import NavList from '../../components/NavList'
import { useState } from 'react';


const Navbar = () => {
    const [MakeActive, setMakeActive] = useState(false)
    return (
        <div className='py-8'>
            <Container>
                <Flex>
                    <div className='w-4/12'>
                        <Flex>
                            <Image style={'w-[24px]'} Source={logo}></Image>
                            <h3 className='text-xl font-bold'>REBI</h3>
                        </Flex>
                    </div>
                    <div className='w-6/12 '>
                        <ul className='flex items-center gap-6'>
                            <NavList pathName={'/'} title={'home'}></NavList>
                            <NavList pathName={'/shop'} title={'Shop'}></NavList>
                            <NavList pathName={'/about'} title={'About'}></NavList>
                            <NavList pathName={'/contacts'} title={'Contacts'}></NavList>
                            <NavList pathName={'/journal'} title={'Journal'}></NavList>
                        </ul>
                    </div>
                    <div className='w-2/12'>
                        <div className='my-2'>
                            <Flex style={'gap-3 justify-end'}>
                                <p onClick={()=>setMakeActive(!MakeActive)} className={`${ MakeActive && 'font-bold bg-black px-2 py-1 text-white rounded-lg'} hover:cursor-pointer duration-200`}>EN</p>
                                <p onClick={()=>setMakeActive(!MakeActive)} className={`${ !MakeActive && 'font-bold bg-black px-2 py-1 text-white rounded-lg'} hover:cursor-pointer duration-200`}>RU</p>
                            </Flex>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default Navbar;