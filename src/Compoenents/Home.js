import BlogList from "./BlogList";
import useFetch from "./useFetch";

export const Home = (props) => {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {isLoading && <div> Loading.....</div>}
      {error && <div>{error} </div>}
      {/* if left side evaluate true then move to right side of logic and evaluate it */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
