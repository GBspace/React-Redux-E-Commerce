import React from 'react';
import {connect} from 'react-redux';
import {fetchPhones,fetchCategories} from '../actions/Phones';
import {getPhones} from '../selectors/Phones';
import {Link} from 'react-router';
import R from 'ramda';
import {loadMore,addPhoneToBasket} from '../actions/Phones';

class Phones extends React.Component{

    componentDidMount(){
        this.props.fetchPhones();
        this.props.fetchCategories();
    }

    renderPhone = (phone,index)=>{
        const {addPhoneToBasket} = this.props;
        const shortDesc = `${R.take(60,phone.description)}...`;
        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className="thumbnail">
                    <img className='img-thumbnail'
                        src={phone.image}
                        alt={phone.name}
                    />
                </div>
                <div className="caption">
                    <h4 className="pull-right">
                        ${phone.price}
                    </h4>
                    <h4>
                        <Link to={`./Phones/${phone.id}`}>
                            {phone.name}
                        </Link>
                    </h4>
                    <p> {shortDesc}</p>
                    <p className='itemButton'>
                        <button className="btn btn-primary"
                                onClick={()=>addPhoneToBasket(phone.id)}>
                            Buy Now
                        </button>
                        <Link to={`/Phones/${phone.id}`}
                            className="btn btn-default">
                            More Info
                        </Link>
                    </p>
                </div>
            </div>
        );
    };

    render(){
        const {phones,loadMore} = this.props;
        return(
        <div>
            <div className="books row">
                {phones.map((phone,index)=>{
                    return this.renderPhone(phone,index);
                })}
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="pull-right btn btn-primary"
                            onClick={loadMore}>
                        Load More
                    </button>
                </div>

            </div>
        </div>            
       
        )};
};

const mapDispatchToProps = (dispatch)=>({
    fetchPhones: ()=>dispatch(fetchPhones()),
    loadMore: ()=>dispatch(loadMore()),
    addPhoneToBasket: (id)=>dispatch(addPhoneToBasket(id)),
    fetchCategories: ()=>dispatch(fetchCategories())
});
//ownProps are available here because this component is defined directly on route.
//child componenets must include compose withRoutes
const mapStateToProps = (state,ownProps)=>({
    phones: getPhones(state,ownProps)
});

export default connect(mapStateToProps,mapDispatchToProps)(Phones);