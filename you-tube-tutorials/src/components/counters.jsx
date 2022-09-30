import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },

        ]
    };

    handleIncreament = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({
            counters
        })

    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters })
    };

    render() {
        return (
            <div>

                <button onClick={this.handleReset} className='btn btn-primary btn-sm m-2'>Reset</button>
                {
                    this.state.counters.map(
                        counter => (
                            <Counter
                                onDelete={this.handleDelete}
                                onIncreament={this.handleIncreament}
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