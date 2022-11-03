import React from "react";

const LinkButton = props => {
    const {
        name,
        title,
        link,
        text,
        id,
        ref_id

    } = props

    const myStyles = ({

        myMargin: {
            marginBottom: "40px",
           
        },

        btnText: {
            fontFamily: "Monaco",
            margin: "10px",
            fontSize: "13px",
            color: "#F44FA",
            
        },
        btn: {
            
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 15px 20px 0 rgba(0, 0, 0, 0.1)",
            fontFamily: "Monaco",
            width: "100%",
            padding: "10px",
            fontSize:"18px",
            cursor: "pointer",
            backgroundColor: "white",
            border: "1px solid white",
            borderRaduis: "5px",
            color: "blue",
            linkHeight: "25px",
            fontWeight:"bold",
            textAlign: "center"

        },  
       


        text: {
            fontFamily: "Monaco",
            fontWeight: "bold",
            margin: "20px",
            fontSize: "14px",
            color: "black"
        }
    })

    return (
        <div style={myStyles.myMargin}>
            <h3 style={myStyles.btnText}>{title}</h3>
            <h1 style={myStyles.text}>{text}</h1>
            <a  href={link} ref_id={ref_id} class="btn btn"  id={id} target="blank" type="submit"  style={myStyles.btn}>
            {name}
            </a>
        </div>
    )
}

export default LinkButton