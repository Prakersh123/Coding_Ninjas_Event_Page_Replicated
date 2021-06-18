import React from 'react'
import Header from '../Header';
import CoverImage from '../CoverImage';
import SubA from '../SubA';

const CMain = () => {
    return (
        <>
             <Header/>
          
                <div className='' style={{ display:'flex' ,flexDirection:'column' }}>
                
                 <CoverImage/>   
                <SubA/>
                </div>
        </>
    )
}
export default CMain;