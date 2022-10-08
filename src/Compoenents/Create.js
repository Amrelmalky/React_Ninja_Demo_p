import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
  //control title input and initial value is empty string
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory()

  // chnage state of title
  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  // change state of blogbody
  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  // change state of author
  const SelectAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const SubmitHandler = (e) => {
    // 1)we apply this to prevent re-loading page
    e.preventDefault();
    // 2)using the collected data from user inputs put it in object this object called blog
    // 3)Later we will POST that object to db in json server
    const blog = { title, body, author };
    setIsPending(true);

    // Post A request to the JSON server

    /*      How POST request to server : 
        1) using fetch method  fetch (1st arg , 2nd arg{})
        2) pass 1st argument => our EndPoint / Resoruces..
        3) pass in the 2nd argumnet an object {}= >

        4) Object ↓
        {
          method:'POST',
          headers:{"content-type" : "application/json"}, → tell to server that type of the sending data is json
          body : JSON.stringify(data which  is object) → the actuall data will sending with tis request after 
          change type from oject into json string bu using JSON.stringify(data)
        }

        5) above is Asynchronous and it returns a promise we can take  it and use then method
            which fires a function when above process is completed 
        */

    fetch("http://localhost:8000/blogs", {
      method: "POST", //
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("data has been added");
      setIsPending(false);
      history.push(`/`)
    });

    setTitle("");
    setBody("");
    setAuthor("");
  };

  return (
    <div className="create">
      <h2> Add A New Bolg ...</h2>

      <form onSubmit={SubmitHandler}>
        <label>Blog Title : </label>
        <input
          value={title}
          type="text"
          required
          onChange={changeTitleHandler}
        />

        <label>Blog Body : </label>
        <textarea value={body} required onChange={bodyChangeHandler}></textarea>

        <label>Blog Author : </label>

        <select onChange={SelectAuthorHandler} value={author}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled> Adding Blog... </button>}
      </form>
    </div>
  );
};

export default Create;
