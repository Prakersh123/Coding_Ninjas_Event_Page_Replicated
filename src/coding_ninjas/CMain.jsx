import React from 'react'
import Header from '../Header';
import CoverImage from '../CoverImage';
import SubA from '../SubA';
// import Footer from './Footer';
const CMain = () => {
    return (
        <>
             <Header/>
          
                <div  style={{ display:'flex' ,flexDirection:'column' }}>
                
                 <CoverImage/>   
                <SubA/>
                </div>
           
        </>
    )
}
export default CMain;