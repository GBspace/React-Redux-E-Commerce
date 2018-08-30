import React from 'react';
import {connect} from 'react-redux';
import {searchPhone} from '../actions/Phones';

class Search extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            searchValue:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    };


    handleSubmit = (e)=>{
        
        e.preventDefault();
        this.props.searchPhone(this.state.searchValue);
    };

    onSearchInputChange = (e)=>{
        const searchValue = e.target.value;
        // console.log("Handling submit : ", searchValue);
        this.setState({
            searchValue
        });

    };

    render(){
        return(
            <div className="well blosd">
                <h3 className="lead"> 
                    Quick Shop 
                </h3>
                <div className="input-group">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.searchValue}    
                            onChange={this.onSearchInputChange}
                        />
                    </form>
                    <span className="input-group-btn">
                        <button className="btn btn-default">
                            <span className="glyphicon glyphicon-search" />
                        </button>
                    </span>
                </div>
            </div>
        );
    };
};

// export default Search;

const mapDispatchToProps = (dispatch)=>({
    searchPhone: (text)=>dispatch(searchPhone(text))
});

export default connect(undefined, mapDispatchToProps)(Search);