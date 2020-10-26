import React, {Component} from 'react'

class Navigation extends Component{
    render(){
        return(
            <div className='buttons-box'>
                <button className='change-button' onClick={this.props.decrease}>&lt; Previous</button>
                <div className='edit-card-buttons-box'>
                    <button className='edit-buttons'>Edit</button>
                    <button className='edit-buttons'>Delete</button>
                    <button className='edit-buttons'>New</button>
                </div>
                <button className='change-button' onClick={this.props.increase}> Next &gt;</button>
            </div>
        )
    }
}
export default Navigation