import React, { Component } from 'react';
import Countdown from 'react-countdown';

class CountD extends Component {
    render() {
        return (
            <Countdown date={Date.now() + 8640000000} />
        );
    }
}
export default CountD;