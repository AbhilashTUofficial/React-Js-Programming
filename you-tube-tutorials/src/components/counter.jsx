import React, { Component } from 'react';
class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };
    //! props : the data which pass on to the component.
    //? value : this.props.value=0 this will through a error
    //? which means props cant be changed.
    //! state : the data which is local to the component.
    //? this.setState({value : 0}) this will change the value
    //? which means state is local and it can be updated.


    render() {

        return (
            <div>
                <span className={this.countBadgeClasses()}>{this.props.counter.value}</span>
                <button onClick={()=>this.props.onIncreament(this.props.counter)} className='btn btn-secondary btn-sm'>Increament</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>

        );
    }


    countBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? "warning" :  "primary";
        return classes;
    }
}

export default Counter;