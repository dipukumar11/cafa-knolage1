

const MarkBook = ({MarkBook}) => {
    // console.log(MarkBook)
    const {title}= MarkBook;
    return (
        <div className="ml-10 border mt-2 p-3 rounded-lg bg-slate-400 text-white font-bold ">
            <h1>{title}</h1>
            
        </div>
    );
};

export default MarkBook;