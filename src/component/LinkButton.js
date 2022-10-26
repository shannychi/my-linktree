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
            marginBottom: "20px"
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
            width: "15rem",
            padding: "10px 10px",
            fontSize:"18px",
            cursor: "pointer",
            backgroundColor: "#fff",
            border: "none",
            borderRaduis: "5px",
            color: "blue"
            
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
            <a  href={link}>
            <button style={myStyles.btn} ref_id={ref_id} id={id} class="btn btn-danger btn-lg btn-block" target="blank" type="submit">{name}</button>
            </a>
        </div>
    )
}

export default LinkButton