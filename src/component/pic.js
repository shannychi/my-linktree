import React from 'react'

const ProfilePic = props => {
    const {
        name,
        picture,
        alt,
        id
    } = props 

    const myStyles = ({
        title: {
            fontFamily: "Monaco",
            fontWeight: "bold",
            marginTop: "45px",
            fontSize: "25px",
            color: "white",
        },
        pic: {
            maxHeight: "185px",
            borderRadius: "200px",
            margin: "15px"
        }
    })

    return (
        <div>
            <h1 style={myStyles.title}>{name}</h1>
            <img style={myStyles.pic} id={id} alt={alt} src={picture} />
        </div>
    )
}

export default ProfilePic