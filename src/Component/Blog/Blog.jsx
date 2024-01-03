import { HiDocumentAdd } from "react-icons/hi";


const Blog = ({blog, clickHandelBookmark, clickMarkRead}) => {
    const {cover,author_img,reading_time, author, posted_date, title,hashtags}=blog;
    return (
        <div className="mt-5 border p-7 bg-yellow-500 rounded-2xl space-y-3">
            <img className="rounded-2xl" src={cover} alt="" />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
              <img className="w-[50px] mt-3" src={author_img} alt="" />
              
              <div className="ml-3 font-bold" >
                <p>{author}</p>
                <p>{posted_date}</p>
              </div>
              </div>
             <div className="flex items-center">
             <p>{reading_time} min read </p>
              <button onClick={()=>clickHandelBookmark(blog)}><HiDocumentAdd className="text-2xl ml-1"></HiDocumentAdd></button>
             </div>
             
              

            </div>
            <h1 className="text-2xl font-bold">{title}</h1>

            {
        hashtags.map(hash=><span><a href="">#{hashtags}</a></span>)
            } <br />
            <button onClick={()=>clickMarkRead(reading_time)} className="text-purple-800 underline font-bold text-[15px]">Mark is red</button>
            
        </div>
    );
};

export default Blog;