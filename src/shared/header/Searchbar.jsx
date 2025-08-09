import { HiMenuAlt4 } from "react-icons/hi";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import NavList from '../../components/NavList'
import { useEffect, useRef, useState } from "react";
import PrimeBtn from "../../components/PrimeBtn";
import SecondaryBtn from "../../components/SecondaryBtn";


const Searchbar = () => {
    const [catvisible, setCatVisible] = useState(false)
    const [Profilevisible, setProfileVisible] = useState(false)
    const [cartvisible, setCartVisible] = useState(false)
    const catRef = useRef(null)
    const cartRef = useRef(null)
    const profileRef = useRef(null)

    useEffect(() => {
        const henleClickOutside = (e) => {
            if (catRef.current && !catRef.current.contains(e.target)) {
                setCatVisible(false)
            }
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                setCartVisible(false)
            }
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileVisible(false)
            }

        }
        document.addEventListener('mousedown', henleClickOutside);
        return () => {
            document.removeEventListener("mousedown", henleClickOutside);
        };
    }, [])

    return (
        <div className="bg-Prime py-7 border-y-2">
            <Container>
                <Flex>
                    <div className="w-3/12 relative">
                        <div onClick={() => setCatVisible(!catvisible)} className="hover:cursor-pointer">
                            <Flex style={'gap-2'}>
                                <HiMenuAlt4 className="text-2xl" />
                                <p className="text-sm">Shop by Category</p>
                            </Flex>
                        </div>

                        {
                            catvisible &&
                            <div ref={catRef} className={`absolute bg-black text-lightGray w-[263px] mt-2 shadow-xl`}>
                                <ul>
                                    <NavList style={'py-4 px-6 border-b-2 border-lightGray hover:text-white hover:font-normal hover:pl-8 duration-300'} title={'Accesories'}></NavList>
                                    <NavList style={'py-4 px-6 border-b-2 border-lightGray hover:text-white hover:font-normal hover:pl-8 duration-300'} title={'Furniture'}></NavList>
                                    <NavList style={'py-4 px-6 border-b-2 border-lightGray hover:text-white hover:font-normal hover:pl-8 duration-300'} title={'Electronics'}></NavList>
                                    <NavList style={'py-4 px-6 border-b-2 border-lightGray hover:text-white hover:font-normal hover:pl-8 duration-300'} title={'Clothes'}></NavList>
                                    <NavList style={'py-4 px-6 border-b-2 border-lightGray hover:text-white hover:font-normal hover:pl-8 duration-300'} title={'Bags'}></NavList>
                                    <NavList style={'py-4 px-6 border-b-2 border-lightGray hover:text-white hover:font-normal hover:pl-8 duration-300'} title={'Home appliances'}></NavList>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="w-5/12 border relative">
                        <input name="search" type="text" className="w-full py-4 pl-6 pr-14 border-0" placeholder="Search Products" />
                        <FaSearch className="absolute top-1/2 right-6 -translate-y-1/2" />
                    </div>
                    <div className="w-4/12 flex justify-end gap-6 text-2xl">
                        <div className="relative">
                            <div onClick={() => setProfileVisible(!Profilevisible)}>
                                <Flex>
                                    <FaUser />
                                    <TiArrowSortedDown />
                                </Flex>
                            </div>

                            {
                                Profilevisible && <div ref={profileRef} className={`absolute right-0 border w-[200px] mt-2 shadow-xl `}>
                                    <ul>
                                        <NavList style={'text-center bg-black text-base font-bold border-b-2 py-4 border-lightGray text-white hover:font-bold hover:bg-white duration-500'} title={'My Account'}></NavList>
                                        <NavList style={'text-center bg-black text-base font-bold py-4 border-lightGray text-white hover:font-bold hover:bg-white duration-500'} title={'Log Out'}></NavList>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="relative">
                            <div onClick={() => setCartVisible(!cartvisible)}>
                                <FaShoppingCart />
                            </div>

                            {
                                cartvisible && <div ref={cartRef} className={`absolute right-0 bg-Prime border w-[360px] mt-2 shadow-xl `}>
                                    <div className="p-6">
                                        sdfsdfsf
                                    </div>
                                    <div className="p-6  bg-white ">
                                        <p>Sub-Total: <span className="font-bold">$44.00</span></p>
                                        <Flex style={'gap-5 justify-center mt-4'}>
                                            <SecondaryBtn title={'View Cart'}></SecondaryBtn>
                                            <PrimeBtn title={'Checkout'}></PrimeBtn>
                                        </Flex>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default Searchbar;