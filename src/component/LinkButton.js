import React from "react";

const LinkButton = props => {
    const {
        name,
        title,
        link,
        logo
    } = props

    const myStyles = ({

        myMargin: {
            marginBottom: "20px"
        },

        btnText: {
            fontFamily: "Monaco",
            margin: "10px",
            fontSize: "15px",
            color: "white",
            
        },
        btn: {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 15px 20px 0 rgba(0, 0, 0, 0.1)",
            fontFamily: "Monaco",
            width: "15rem"
        }
    })

    return (
        <div style={myStyles.myMargin}>
            <h3 style={myStyles.btnText}>{title}</h3>
            <a  href={link}>
            <button style={myStyles.btn} color="blue" class="btn btn-danger btn-lg btn-block" target="blank" type="submit">{logo} {name}</button>
            </a>
        </div>
    )
}

export default LinkButton