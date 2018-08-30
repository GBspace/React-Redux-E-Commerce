import React from 'react';
import {SideBar} from './SideBar';


const Layout = ({children})=>{
    return (
        <div className="view-container">
            <div className="container">   
                <div className="row">
                    <div className="col-md-3">
                        <SideBar/>
                    </div>
                    <div className="col-md-9">
                        {children}
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Layout;