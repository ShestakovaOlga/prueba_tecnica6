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
        width: '50vw',
        height: '100vh',
        backgroundColor: '#BDC3C7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div style={{
            width: '30vw',
            minHeight: '80vh',
            padding: '20px 0 20px 0',
            backgroundColor: '#ECF0F1',
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div>
                <select onChange={e => {
                    const m = members.find((mem) => {
                        return mem.login == e.target.value
                    })
                    setSelect(m)
                }} style={{
                    width: '20vw',
                    height: '4vh',
                    outline: 'none'
                }} name="" id="">
                    {members.map((member) => {
                        return <option value={member.login}>{member.name}</option>
                    })}
                </select>
            </div>
            <div className="userСard">
                <img style={{
                    width: '25vw',
                    border: '1px solid red',
                }} src={select && select.img} alt="img" />
                <div className="part_of_name">
                    <p>{select && select.login}</p>
                    <p>{select && select.name}</p>
                    <p>{select && select.location}</p>
                </div>
                <div style={{
                    backgroundColor: '#45B39D ',
                    borderRadius: 5,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.5rem',
                    textAlign: 'center'
                }}>
                    <div style={{
                        padding: 25
                    }}>{select && select.repos}<br /> Repos</div>
                    <div style={{
                        padding: 25
                    }}>{select && select.followers}</div>
                    <div style={{
                        padding: 25
                    }}>{select && select.following}</div>
                </div>
            </div>
        </div>
    </div>
}