import React from 'react';
import image from '../assests/news.jpg'

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="d-inline-block mx-3 my-3">
      <div className="card bg-dark text-light  p-3 " style={{ maxWidth: "345px" }}>
        <img src={src?src:image} style={{height:"170px",width:"300px"}} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"News not found please search anything"}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default Newsitem;
