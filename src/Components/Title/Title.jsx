
const Title = ({ text }) => {
    return (

        <div className="flex items-center space-x-2">
        {/* Skewed Red Parallelogram */}
        <div
            className="bg-[#db2411] flex-shrink-0"
            style={{
                width: '15px',
                height: '22px',
                transform: 'skew(-30deg)',
            }}
        ></div>

        {/* Text */}
        <span className="text-[#db2411] font-semibold mt-1 leading-[1]">
            {text}
        </span>
    </div>
    );
};

export default Title;