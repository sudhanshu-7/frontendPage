import React from 'react'
import './Working.css'
import Card from './UIComponents/Card'
const Working = () => {
    return (
        <div className="working">
        <h1>How It Works</h1>
        <div className="card-align">
            <Card subHeading = {"Register for Free"} text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisl tellus. Cras efficitur ullamcorper felis, id pulvinar orci convallis sed. Etiam eget porttitor sapien, eget aliquam ipsum. Nulla facilisi. In viverra tellus in aliquet sollicitudin. Donec libero ante, varius sit amet placerat quis, dapibus sed nisi. Duis aliquam suscipit diam, at sagittis libero condimentum eget.'}></Card>
            <Card subHeading = {"Get Discovered"} text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisl tellus. Cras efficitur ullamcorper felis, id pulvinar orci convallis sed. Etiam eget porttitor sapien, eget aliquam ipsum. Nulla facilisi. In viverra tellus in aliquet sollicitudin. Donec libero ante, varius sit amet placerat quis, dapibus sed nisi. Duis aliquam suscipit diam, at sagittis libero condimentum eget.'}></Card>
            <Card subHeading = {"Enhance Your Partnership"} text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisl tellus. Cras efficitur ullamcorper felis, id pulvinar orci convallis sed. Etiam eget porttitor sapien, eget aliquam ipsum. Nulla facilisi. In viverra tellus in aliquet sollicitudin. Donec libero ante, varius sit amet placerat quis, dapibus sed nisi. Duis aliquam suscipit diam, at sagittis libero condimentum eget.'}></Card>
            <Card subHeading = {"Get Support Anytime"} text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisl tellus. Cras efficitur ullamcorper felis, id pulvinar orci convallis sed. Etiam eget porttitor sapien, eget aliquam ipsum. Nulla facilisi. In viverra tellus in aliquet sollicitudin. Donec libero ante, varius sit amet placerat quis, dapibus sed nisi. Duis aliquam suscipit diam, at sagittis libero condimentum eget.'}></Card>
        </div>
    </div>
    )
}

export default Working
