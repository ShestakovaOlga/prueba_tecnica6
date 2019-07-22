import React, { useState, useEffect } from "react";



export function UserCard(props) {
    return <div style={{
        width: '30vw',
        height: '100vh',
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div className="selecList">
            <select name="" id=""></select>
        </div>
        <div className="userСard">
            <img style={{
                width: '25vw',
                height: '30vh',
                border: '1px solid red',
            }} src="" alt="img" />
            <div className="part_of_name">
                <p>nikname</p>
                <p>Nombre</p>
                <p>De donde es</p>
            </div>
            <div style={{
                backgroundColor: 'green',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.5rem',
                textAlign: 'center'
            }}>
                <div style={{
                    padding: 25
                }}>5 <br /> Repos</div>
                <div style={{
                    padding: 25
                }}>15 <br /> Followers</div>
                <div style={{
                    padding: 25
                }}>5 <br /> Following</div>
            </div>
        </div>

    </div>
}