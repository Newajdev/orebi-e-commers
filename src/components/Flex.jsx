

const Flex = ({children, style}) => {
    return (
        <div className={`flex items-center ${style}`}>
            {children}
        </div>
    );
};

export default Flex;