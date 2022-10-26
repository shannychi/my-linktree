import React from "react";

const Slack = props => {
  const{
  name,
  id
  }= props

  const style  = (
    {
        name: {
            display: "none",
            opacity: "none",
            zIndex:"-1"
        }
    }
  )

  

    return(
     <div style={style.name}>
        <h1 id={id}>{name}</h1>
     </div>
    )
}

export default Slack 