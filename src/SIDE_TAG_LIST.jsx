import React,{useState,useEffect} from 'react'
import axios from 'axios';
// import uuid from 'react-uuid'
 const SIDE_TAG_LIST = (props) => {

         // const [tag_list,setTag]=useState([]);
    const [Final, setFinal] = useState([]);
   
    useEffect(()=>{
        async function gtdata (){

            const res = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
        //    console.log()
            const data = res.data.data.tags;
            const final_tag = await data.map((ele,index)=>{
                return (
                    // <>
                  <button key={index} style={{display:'block' ,marginTop:'0.3rem'}}  className="btn btn-warning">{ele}</button>
                    //  </>
                )
            })
            setFinal([...final_tag])
        }
           gtdata(); 
    },[Final])

    return (
        <div className='side '>

        
            {Final}
        </div>
    )
}
export default SIDE_TAG_LIST;