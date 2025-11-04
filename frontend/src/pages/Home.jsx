import { useEffect } from "react";
import { written } from "../API/API";
import BlogIcon from "../components/blogIcon";

function HomePage(){
    const {products, fetchBlogs} = written();
    useEffect(() => {
        fetchBlogs();

    },[fetchBlogs]);
    return(
<>

    <h1 className="text-center text-6xl font-bold mt-15">Welcome To SafeNote</h1>
    {products.map((blog) =>(
        
        <BlogIcon key={blog._id} blog={blog} />
    ))};







</>
)

}
export default HomePage;