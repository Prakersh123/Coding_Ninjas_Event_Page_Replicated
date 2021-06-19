import React,{useState,useEffect} from 'react'
import axios from 'axios';
// import uuid from 'react-uuid';
// import uuid from 'react-uuid'
 const SIDE_TAG_LIST = (props) => {

 
        // const call = ()=>{
        //     console.log("hi")
        // }
         // const [tag_list,setTag]=useState([]);
    const [Final, setFinal] = useState([]);
    // const[hel]=useState("")
    useEffect(()=>{
        async function gtdata (){
            // console.log("pp1p")

            const res = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
           console.log("ppp")
            const data = res.data.data.tags;
            const final_tag = await data.map((ele,index)=>{
                return (
                    // <>
                  <button type="button" key={index} style={{display:'block' ,marginTop:'0.3rem'}} onClick={(e)=>{
                      props.onSelect(e.target.firstChild.data);
                  }} className="btn btn-primary sidebt">{ele}</button>
                    //  </>
                )
            })
            setFinal([...final_tag])
        }
           gtdata(); 
           // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='side '>

        
            {Final}
        </div>
    )
}
export default SIDE_TAG_LIST;