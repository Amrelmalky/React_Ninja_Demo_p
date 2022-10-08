import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

// Need to re-use our custom hook//

/* 1) useFetch is our custom hook which return 3 value.... 
  {data which is fetched from given Url, error, isLoading }

  2) we pass the target url to our custom hook useFetach(http://localhost:8000/blogs/"+id)
  http://localhost:8000/blogs  is the our data endpoint/resource
  id : it is id given by useParams  which linked in BlogList <Link to= {blog.id}> also

  bolgDetials component
  =====================
  blog title 
  blog author name 
  blog body
  So when we clicked on any blog route path is  "/blogs/:id" which drive us to blog with that id 

*/
const BolgDetials = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  // function to handel delete bolg by id 
  /*
  1) using fetch (1st arg 'EndPoint' , 2nd arg).
     2nd arg{
     Method : in this case 'DELETE'
     }
  */
  const deleteHandler = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    });
    // change the direction after deleting data using useHistory histoy is object
    history.push("/");
  };

  return (
    <div className="blog-detials">
      {isLoading && <div> Loading.... </div>}
      {error && <div> error </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <div>{blog.body}</div>
          <button onClick={deleteHandler}> delete </button>
        </article>
      )}
    </div>
  );
};

export default BolgDetials;
