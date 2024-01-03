import MarkBook from "../MarkBook/MarkBook";

const Bookmark = ({bookmark, markrad}) => {
    // const {title}=bookmark;
    // const stringConvart = parseInt(markrad)
   
    return (
        <div className="w-1/3">
            <h1> Total Time:{markrad}</h1>
            <hr />
            {
                bookmark.map(marbook=><MarkBook MarkBook={stringConvart}></MarkBook>)
            }
            
        </div>
    );
};

export default Bookmark;