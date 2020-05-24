import React, { useState, useEffect } from 'react'

function Parent() {

    const [items, itemsSet] = useState([
        { id: 142, name: `hassan`, age: 12 },
        { id: 156, name: `ali`, age: 8 },
        { id: 187, name: `mustafa`, age: 1212 }
    ])

    const [chosenItem, chosenItemSet] = useState(142)

    const clicked = (chosenItem) => chosenItemSet(parseInt(chosenItem)) // ID!

    return (
        <React.Fragment>

            {/* <br/>Chosen item is {chosenItem} */}

            <table>
                <thead>
                    <th>Select</th>
                    <th>Display</th>
                </thead>
                <tr>
                    <td>
                        <Grab clicked={clicked} data={items.map(item => { return ({ name: item.name, id: item.id }) })} />
                    </td>
                    <td>
                        <DisplaySingular item={items.filter(item => item.id === chosenItem)[0] || { id: -1, name: ``, age: `` }} />
                    </td>
                </tr>
            </table>


        </React.Fragment>
    )
}

const DisplaySingular = ({ item }) => {

    useEffect(() => console.log(item), [])

    return (<React.Fragment>
        <h1>Name</h1>
        <h2>{item.name}</h2>
        <h1>Age</h1>
        <h2>{item.age}</h2>
    </React.Fragment>)
}

const Grab = ({ data, clicked }) => {

    // const clicked = (e)=>returnss(e.target.value)
    // const clicked = (e)=>console.log(e.target.value)
    const clicked2 = (e) => clicked(e.target.value)

    return (

        <React.Fragment>
            {data.map(item => 
                <React.Fragment>
                    <Item item={item} clicked={clicked2} />
                    <br/>
                </React.Fragment>

                )}
        </React.Fragment>
    )
}

const Item = ({ item, clicked }) => <button onClick={clicked} value={item.id}>{item.name}</button>

export default Parent
