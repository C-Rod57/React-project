import Accordion from 'react-bootstrap/Accordion'
import React, { Component } from 'react'

class Tab extends Component {
    render() {
        return (
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>My favorite Quote</Accordion.Header>
                    <Accordion.Body>
                    “If you know the enemy and know yourself, 
                    you need not fear the result of a hundred battles. 
                    If you know yourself but not the enemy, for every victory 
                    gained you will also suffer a defeat. If you know neither 
                    the enemy nor yourself, you will succumb in every battle.”
                    ― Sun Tzu, The Art of War
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>My favorite Joke</Accordion.Header>
                    <Accordion.Body>
                        How do you make Holy Water?
                        - You boil the Hell out of it. :D
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}
export default Tab;
