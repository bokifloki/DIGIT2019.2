import React, { Component } from 'react';
import './Events.css'
class Events extends Component {
  render() {
    return (
        <div>
            <h1 className="h1class">Events</h1>
            <div className="eventContainer">
                <div className="specificEvent">
                    <p>
                    test paragraph
                    </p>
                    <img alt="test">
                    </img>
                </div>
            </div>
        </div>
    );
}
}


export default Events;
