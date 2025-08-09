import { HiMenuAlt4 } from "react-icons/hi";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";


const Searchbar = () => {
    return (
        <div className="bg-Prime py-7">
            <Container>
                <Flex>
                    <div className="w-3/12">
                        <Flex style={'gap-2'}>
                            <HiMenuAlt4 className="text-2xl" />
                            <p className="text-sm">Shop by Category</p>
                        </Flex>
                    </div>
                    <div className="w-5/12 border relative">
                        <input name="search" type="text" className="w-full py-4 pl-6 border-0" placeholder="Search Products" />
                        <FaSearch className="absolute top-1/2 right-6 -translate-y-1/2" />
                    </div>
                    <div className="w-4/12 flex justify-end gap-6 text-2xl">
                        <Flex>
                            <FaUser />
                            <TiArrowSortedDown />
                        </Flex>
                        <FaShoppingCart />
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default Searchbar;