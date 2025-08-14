import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordium = ({item, open, setOpen,}) => {
    const {id, title,  details} = item
    const [rotet, setRotet] = useState(false)
    
    const isOpen = open === id;

    const hendleAccourdim =()=>{  
        setRotet(true)
        setTimeout(()=>{
            setOpen(isOpen ? null : id)
            setRotet(false)
        }, 100)
    }
    
    return (

        <div onClick={hendleAccourdim} className="w-1/2  py-6 border-y">
            <input type="radio" name="accordim" checked={isOpen} readOnly className="hidden"  />
            <div  className="flex items-center justify-between">
                <h3 className="text-base font-bold">{title}</h3>
                {
                    isOpen ? <FaMinus className={`inline-block transition-transform duration-500 ${rotet ? 'rotate-[360deg]' : ''}`} /> : <FaPlus className={`inline-block transition-transform duration-300 ${rotet ? 'rotate-[360deg]' : ''}`} /> 
                }
            </div>
            <div className={` ${isOpen ? '' : 'hidden duration-300'}`}>
                <hr className="my-4" />
                <p className="text-lightGray">{details}
                </p>
            </div>

        </div>
    );
};

export default Accordium;