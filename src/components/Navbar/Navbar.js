const Navbar = ({ onExpand }) => {
    return (
        <nav className="
        flex w-full justify-between items-center space-x-1 p-3
        bg-gradient-to-r from-indigo-800 to-indigo-400 text-white
        transition-all duration-300 ease-in-out group"
        >
            <button onClick={onExpand} className=" backdrop-blur-md rounded-lg font-mono font-semibold p-2">
                The React Movies List
            </button>
            <div className="flex justify-end space-x-2 bg-white/40 backdrop-blur-sm rounded-3xl p-2">

            </div>
        </nav>
    );
};

export default Navbar;