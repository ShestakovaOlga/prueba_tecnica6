import React, { useState, useEffect } from "react";
import { GetUsers } from "../server";



export function UserCard(props) {
    const [select, setSelect] = useState(null);
    const [members, setMembers] = useState([]);
    useEffect(() => {
        GetUsers().then((res) => {
            setMembers(res)
            setSelect(res[0])
        })
    }, [])

    return <div style={{
        width: '80vw',
        height: '100vh',
        backgroundColor: '#BDC3C7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }}>
        <div>
            <div>
                <select onChange={e => {
                    const m = members.find((mem) => {
                        return mem.login == e.target.value
                    })
                    setSelect(m)
                }} style={{
                    width: '18vw',
                    height: '4vh',
                    outline: 'none',
                    marginLeft: 10,
                    marginBottom: 8,
                    borderStyle: "none",

                }} name="m_select" id="m_select">
                    {members.map((member) => {
                        return <option value={member.login}>{member.name}</option>
                    })}
                </select>
            </div>
            <div style={{
                width: '20vw',
                minHeight: '50vh',
                backgroundColor: '#ECF0F1',
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: `0px 0px 13px -1px gray`,
                overflow: 'hidden'

            }}>
                <img style={{
                    width: '20vw',
                }} src={select && select.img} alt="img" />


                <div style={{
                    marginLeft: 15,
                }}>
                    <p style={{
                        color: '#A6ACAF',
                        fontSize: '0.7rem'
                    }}>@{select && select.login}</p>
                    <h3 style={{
                        color: '#16A085',
                        fontSize: '2rem',
                        margin: 0,
                    }}>{select && select.name}</h3>
                    <p style={{

                        fontSize: '1rem'
                    }}>{select && select.location}</p>
                </div>

                <div style={{
                    backgroundColor: '#45B39D ',
                    backgroundImage: 'linear-gradient(#45B39D, #48C9B0)',
                    width: '20vw',
                    height: '15vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <div style={{
                        padding: 15,
                    }}> <span style={{
                        color: 'white',
                        fontSize: '3rem'
                    }}> {select && select.repos}</span> <br /> <span style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.8rem'
                    }}>Repos</span> </div>
                    <div style={{
                        padding: 15
                    }}><span style={{
                        color: 'white',
                        fontSize: '3rem'
                    }}>{select && select.followers}  </span> <br /> <span style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.8rem'
                    }}>Followers</span></div>
                    <div style={{
                        padding: 15
                    }}><span style={{
                        color: 'white',
                        fontSize: '3rem'
                    }}>{select && select.following}</span>  <br /> <span style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.8rem'
                    }}>Following</span></div>
                </div>

            </div>
        </div>
    </div>
}