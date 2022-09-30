import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


    render() {
        return (
            <div>

                <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
                {
                    this.props.counters.map(
                        counter => (
                            <Counter
                                onDelete={this.props.onDelete}
                                onIncreament={this.props.onIncreament}
                                counter={counter}
                                key={counter.id}
                            // The key can be only accessed by react internally.
                            />))
                }

            </div>
        );
    }
}

export default Counters;