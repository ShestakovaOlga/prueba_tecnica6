import React, { useState } from "react"
import { render } from "react-dom"
import { UserCard } from "./src/UserCard"


function App() {
    return <div>
        <UserCard />
    </div>
}

render(<App></App>, document.querySelector(`#app`))