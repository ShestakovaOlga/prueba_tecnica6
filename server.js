export async function GetUsers() {
    const result = await fetch('https://api.github.com/orgs/Adalab/members') //coger los datos de miembros
    const data = await result.json()
    let r = []
    for (let p of data) {
        const r1 = await fetch(p.url)
        const d = await r1.json()

        r.push({
            login: d.login,
            name: ,
            id: d.id,
            img: d.avatar_url,

        })

        return r
    }