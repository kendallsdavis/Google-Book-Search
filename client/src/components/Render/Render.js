import React from 'react'
import './Render.css'

function Renderbooks(props) {
  return (
    <div className="containerbook">
      <div className="row header">
        <div className="col-9 info">
          <h5><strong>{props.title}</strong></h5>
          <p>{props.author}</p>
        </div>
        <div className="col-3 buttons">
          {props.option === "save" ? 
            <button 
              className="btn btn-success"
              author={props.author}
              title={props.title}
              description={props.description}
              image={props.image}
              onClick={props.saveBook}
              >Save
            </button> 
          : ""}
          {props.option === "delete" ? 
            <button 
              className="btn btn-warning"
              id={props.id}
              onClick={props.deleteBook}
              >Delete
            </button>
          : ""}
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-12 foot">
          {/* <img className="image" alt={props.title} src={props.image}></img> */}
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  )
}


export default Renderbooks