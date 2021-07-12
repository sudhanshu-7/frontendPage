import React from 'react'
import './Benifits.css'
import Card from './UIComponents/Card'
const Benifits = () => {
    return (
        <div className="benifits">
            <h1>Partner Benefits</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisl tellus. Cras efficitur ullamcorper felis, id pulvinar orci convallis sed. Etiam eget porttitor sapien, eget aliquam ipsum. Nulla facilisi. In viverra tellus in aliquet sollicitudin. Donec libero ante, varius sit amet placerat quis, dapibus sed nisi. Duis aliquam suscipit diam, at sagittis libero condimentum eget. </p>
            <div className="card-align">
                <Card subHeading= {"Benifit 1"} text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisl tellus. Cras efficitur ullamcorper felis, id pulvinar orci convallis sed. Etiam eget porttitor sapien, eget aliquam ipsum. Nulla facilisi. In viverra tellus in aliquet sollicitudin. Donec libero ante, varius sit amet placerat quis, dapibus sed nisi. Duis aliquam suscipit diam, at sagittis libero condimentum eget.'}></Card>
                <Card subHeading= {"Benifit 2"} text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisl tellus. Cras efficitur ullamcorper felis, id pulvinar orci convallis sed. Etiam eget porttitor sapien, eget aliquam ipsum. Nulla facilisi. In viverra tellus in aliquet sollicitudin. Donec libero ante, varius sit amet placerat quis, dapibus sed nisi. Duis aliquam suscipit diam, at sagittis libero condimentum eget.'}></Card>
                <Card subHeading= {"Benifit 3"} text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nisl tellus. Cras efficitur ullamcorper felis, id pulvinar orci convallis sed. Etiam eget porttitor sapien, eget aliquam ipsum. Nulla facilisi. In viverra tellus in aliquet sollicitudin. Donec libero ante, varius sit amet placerat quis, dapibus sed nisi. Duis aliquam suscipit diam, at sagittis libero condimentum eget.'}></Card>
            </div>
        </div>
    )
}

export default Benifits
