import React from 'react'

function MainComponent() {
    return(
        <ul style={{listStyle:"none"}}>
            <li>
                <input type="checkbox" id="bike" value="Bike"/>
                <label for="bike"> I have a bike</label>
            </li>
            <li>
                <input type="checkbox" id="car" value="Car"/>
                <label for="car"> I have a car</label>
            </li>
            <li>
                <input type="checkbox" id="boat" value="Boat"/>
                <label for="boat"> I have a boat</label>
            </li>
        </ul>
    )
}

export default MainComponent;