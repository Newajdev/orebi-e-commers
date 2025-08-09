import Container from "../../components/Container";
import Flex from "../../components/Flex";
import NavList from '../../components/NavList'
import logo from '../../assets/Logo.jpg'
import Image from "../../components/Image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-Prime py-14">
            <Container>
                <div className="flex w-[100%]">
                    <div className="w-[10%]">
                        <p className="text-base font-bold">MENU</p>
                        <ul className="flex flex-col gap-y-2 mt-4">
                            <NavList pathName={'/'} title={'Home'}></NavList>
                            <NavList pathName={'/shop'} title={'Shop'}></NavList>
                            <NavList pathName={'/about'} title={'About'}></NavList>
                            <NavList pathName={'/contact'} title={'Contact'}></NavList>
                            <NavList pathName={'/journal'} title={'Journal'}></NavList>
                        </ul>
                    </div>
                    <div className="w-[10%]">
                        <p className="text-base font-bold">SHOP</p>
                        <ul className="flex flex-col gap-y-2 mt-4">
                            <NavList title={'Category 1'}></NavList>
                            <NavList title={'Category 2'}></NavList>
                            <NavList title={'Category 3'}></NavList>
                            <NavList title={'Category 4'}></NavList>
                            <NavList title={'Category 5'}></NavList>
                        </ul>
                    </div>
                    <div className="w-[12%]">
                        <p className="text-base font-bold">HELP</p>
                        <ul className="flex flex-col gap-y-2 mt-4">
                            <NavList title={'Privacy Policy'}></NavList>
                            <NavList title={'Terms & Conditions'}></NavList>
                            <NavList title={'Special E-shop'}></NavList>
                            <NavList title={'Shipping'}></NavList>
                            <NavList title={'Secure Payments'}></NavList>
                        </ul>
                    </div>
                    <div className="w-[33%]">
                        <p className="text-base font-bold">(052) 611-5711 <br /> company@domain.com</p>
                        <p className="text-sm text-lightGray mt-3">575 Crescent Ave. Quakertown, PA 18951</p>
                    </div>
                    <div className="w-[35%]">
                        <div className=''>
                            <Flex>
                                <Image style={'w-[44px]'} Source={logo}></Image>
                                <h3 className='text-5xl font-bold mt-0.5'>REBI</h3>
                            </Flex>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="mt-16">
                <Container>
                    <Flex>
                        <div className="w-[68%]">
                            <Flex style={'gap-4 text-2xl'}>
                                <FaFacebook />
                                <FaLinkedin />
                                <FaInstagram />
                            </Flex>

                        </div>
                        <p className="w-[35%] text-sm text-lightGray">2025 Orebi Minimal eCommerce Figma Template by Adveits</p>

                    </Flex>
                </Container>
            </div>
        </div>
    );
};

export default Footer;