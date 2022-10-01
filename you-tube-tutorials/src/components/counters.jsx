import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


    render() {

        //? this.props to {object} "Object destructuring"

        const {onReset, counters, onDelete, onIncreament}=this.props;


        return (
            <div>

                <button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
                {
                    counters.map(
                        counter => (
                            <Counter
                                onDelete={onDelete}
                                onIncreament={onIncreament}
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