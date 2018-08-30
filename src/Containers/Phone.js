import React from 'react';
import {connect} from 'react-redux';
import {fetchPhoneById,addPhoneToBasket} from '../actions/Phones';
import {getPhonesById} from '../selectors/Phones';
import R from 'ramda';
import BasketCart  from './BasketCart';
import {Link} from 'react-router';


class Phone extends React.Component{

    componentDidMount = () => this.props.fetchPhoneById(this.props.params.id);

    renderFields = ()=>{
        const {phone} = this.props;
        const columnFields = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone);
        // console.log("columnFields ", columnFields);
        return columnFields.map(([key,value])=>{
            return(
                <div className='column' key={key}>
                    <div className='ab-details-title'>
                        <p> { key } </p>
                    </div>
                    <div className='ab-details-info'>
                        <p> { value } </p>
                    </div>
                </div>
            );
           
        });
    };

    renderContent = ()=>{
        const {phone} = this.props;
        return(
            <div>
                <div className='thumbnail'>
                    <div className="col-md-6">
                        <img className='img-thumbnail'
                            src={phone.image}
                            alt={phone.name}
                        />

                    </div>
                    <div className="col-md-6">
                        {this.renderFields()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>
                        ${phone.price}
                    </h4>
                    <h4>
                        {phone.name}
                    </h4>
                    <p>
                        {phone.description}
                    </p>
                </div>
            </div>
        );
    };

    renderSideBar = ()=>{
        
        const {phone,addPhoneToBasket} = this.props;
        return(
            <div>
               <div>
                    <p className ='lead'> Quick Shop</p>
                    <BasketCart />
                    <div className='form-group'>
                        <h1>{phone.name}</h1>
                        <h2>{phone.price}</h2>
                    </div>
               </div>
               <Link to="/"
                    className="btn btn-info btn-block">
                    Back to Store
                </Link>
                <button type="button"
                        className="btn btn-success btn-block"
                        onClick={()=>addPhoneToBasket(phone.id)}>
                    Add To Cart
                </button>
            </div>
        );
    };

    render(){
        // console.log(this.props.phone);
        const {phone} = this.props;
        return(
            <div className='view-container'>
                <div className='container'>
                    <div className='col-md-9'>
                        {phone && this.renderContent()}
                    </div>
                    <div className='col-md-3'>
                        {phone && this.renderSideBar()}
                    </div>
                </div>
            </div>
        );
    }
}

// export default Phone;
const mapDispatchtoProps = (dispatch)=>({
    fetchPhoneById: (id)=>{dispatch(fetchPhoneById(id))},
    addPhoneToBasket: (id)=>{dispatch(addPhoneToBasket(id))}
});

const mapStateToProps = (state)=>({
    phone: getPhonesById(state,state.PhonePage.id)
});

export default connect(mapStateToProps,mapDispatchtoProps)(Phone);