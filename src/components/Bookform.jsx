import React, {Component} from 'react'

class Bookform extends Component {

    render() { 
        return ( 
            <div>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="itemName" placeholder="Add new book..."/>
                    <button type="submit" className="btn btn-default">Add</button>
                </form>
            </div>
         );
    }
}
export default Bookform;