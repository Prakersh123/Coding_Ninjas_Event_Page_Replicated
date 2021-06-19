import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SIDE_TAG_LIST from './SIDE_TAG_LIST';
import uuid from 'react-uuid';


const SubB = () => {
  const [query_string, setquery_string] = useState({
    event_category: 'ALL_EVENTS',
    event_sub_category: 'Upcoming',
    tag_list: '',
    offset: 0
  })
  const [page_count, setPageCount] = useState('');
  const [Card, setCard] = useState([])
  const [Tags,setTags]=useState(['']);
 
 
  useEffect(() => {

    async function getData() {
      // console.log(1)
      const config = { params: query_string }
      const res = await axios.get("https://api.codingninjas.com/api/v3/events", config)
      var final =[]
      if(res.data.data.page_count===0){
         final = [<h1 key={uuid()} style={{marginTop:'2rem',textAlign:'center'}}>Not found any thing</h1>]
      }
      else{
      const arr = res.data.data.events;
       final = await arr.map((ele) => {
        return (
          // <div key={index} className="grid-item" >

          <div key={uuid()} className="card" style={{paddingBottom:'10px'}}>
  <img src={ele.cover_picture} alt="Avatar" style={{objectFit:'cover',width:'100%', height:'9rem' ,borderRadius:'5px'}} />
  <br/>
  <div className="container" style={{position:'relative'}}>
    <h5 style={{marginBottom:'1em'}}><b>{ele.name}</b></h5> 
    <div className="row" >
                   <div className='col-4' style={{ textAlign: 'left', color: 'gray' }}> Starts On</div>
                   <div className='col-4' style={{ textAlign: 'left', color: 'gray' }}> Entry Fee</div>
                   <div className='col-4' style={{ textAlign: 'left', color: 'gray' }}> Venue</div>


                 </div>

                 <div className="row">
                   <div style={{ textAlign: 'left', fontWeight: '500' }} className='col-4'> {new Date(1000 * ele.event_start_time).toDateString()}</div>
                   <div style={{ textAlign: 'left', fontWeight: '500' }} className='col-4'> {ele.fees === 0 ? 'Free' : `${ele.fees} ${ele.currency}`}</div>
                   <div style={{ textAlign: 'left', fontWeight: '500' }} className='col-4'> {ele.venue}</div>

                 </div>
                 <hr style={{color:'rgb(216, 206, 206)'}}/>
    <p>{ele.short_desc}</p>
    <br/>
    <br/>
    <br/>
  
    {/* <hr/>  */}
           
  </div>
            <hr  style={{position:'absolute', bottom:'0px' }} /> 
            <img alt="couldn't load"src="https://files.codingninjas.in/0000000000001272.png" style={{position:'absolute', bottom:'8px' ,right:'16px  ',width:'30%'}}/>
            </div>

        )
      })
    }
       setCard([...final])
      setPageCount(res.data.data.page_count)
      console.log(res);
    }


    getData();



  }, [query_string])

  const increment = () => {
    setquery_string((old) => {
      return {
        event_category: old.event_category,
        event_sub_category: old.event_sub_category,
        tag_list: old.tag_list,
        offset: old.offset + 20,

      }
    })
  }

  const decrement = () => {
    setquery_string((old) => {
      return {
        event_category: old.event_category,
        event_sub_category: old.event_sub_category,
        tag_list: old.tag_list,
        offset: old.offset - 20,

      }
    })
  }



  const update_sub = (e) => {
    console.log(e)
    setTags([]);
    setquery_string((old) => {
      return {

        event_category: old.event_category,
        event_sub_category: e.target.attributes.value.nodeValue,
        tag_list: '',
        offset: 0,
      }
    })
  }
  const update_main = (e) => {
    console.log(e)
    setTags([]);
    setquery_string((old) => {
      return {

        event_category: e.target.attributes.value.nodeValue,
        event_sub_category: 'Upcoming',
        tag_list: '',
        offset: 0,
      }
    })
    
  }
   
  
  const call_me=(e)=>{
    console.log(e)
    console.log(Tags)
      const arrr= Tags.filter((ele)=>{
        return ele===e;
      })
      
      if(arrr.length===0)
      {
        const a = Tags;
        a.push(e);
        setTags(a)
        const str = a.join();
        setquery_string((old)=>{
          return {

            event_category: old.event_category,
            event_sub_category: old.event_sub_category,
            tag_list: str,
            offset: 0,
          }
        })
      }
      else if(arrr.length===1)
      {
        console.log("mai else chala")
        const me= Tags.filter((ele)=>{
          return ele!==e
        })
        console.log("mai else ke bad chala")

        setTags([...me]) 

         console.log("hi",me) 
        const sr = me.join();
        setquery_string((old)=>{
          return {

            event_category: old.event_category,
            event_sub_category: old.event_sub_category,
            tag_list: sr,
            offset: 0,
          }
        })

      }
    
    // var dt= [...Tags];
    //     var str =e;
    //     console.log(dt);
    
        
    //     dt =  dt.filter((ele)=>{
    //       return ele===e;
    //      })
        
    //      if(dt.length===0)
    //     {
    //       setTags([...Tags,str])
    //       console.log("hi",Tags)
    //     }
        // else
        // {

        //   dt=[...Tags];
        //   dt= dt.filter((ele)=>{
        //     return ele!==e
        //   })
        //   setTags([...dt]);
        // }  
      
        console.log("arya",Tags)
    }
 
  return (
    <>

<div className="scrollmenu nav1">
  <span   value="ALL_EVENTS" active="true" onClick={update_main}>All Events</span>
  <span onClick={update_main} value="WEBINAR" >Webinars</span>
  <span onClick={update_main} value="CODING_EVENT">Coding Events</span>
  <span onClick={update_main} value="BOOTCAMP_EVENT">Bootcamp Events</span>
  <span onClick={update_main} value="WORKSHOP" >Workshop</span>
  
</div>

      
<div className="scrollmenu nav2">
  <span value="Upcoming" onClick={update_sub} >Upcoming</span>
  <span onClick={update_sub} value="Archived">Archived</span>
  <span  onClick={update_sub} value="All Time Favorites">All Time Favourite</span>
  
</div>

      
      {Card}

      <SIDE_TAG_LIST  onSelect={call_me} />
      {page_count?
      <nav aria-label="Page navigation example" className="last_button">
        <ul  className="pagination">

        {(parseInt(query_string.offset/20)+1)!==1?
                    <li  className="page-item"><button className="page-link" onClick={decrement}>◀️</button></li>:<li  className="page-item"><button disabled className="page-link" onClick={decrement}>◀️</button></li>  
          }         
         
          <li  className="page-item"><h6 style={{marginTop:'0.5rem ',marginLeft:'0.2rem',marginRight:'0.2rem'}} className="" >On Page </h6></li>

          <li   className="page-item"><span className="page-link" >{parseInt(query_string.offset/20)+1}</span></li>
        
          <li  className="page-item"><h6 style={{marginTop:'0.5rem ',marginLeft:'0.2rem',marginRight:'0.4rem'}} className="" > of </h6></li>

          <li  className="page-item"><h6 style={{marginTop:'0.5rem ',marginLeft:'0.2rem',marginRight:'0.4rem'}} className="" > {page_count} </h6></li>
          
      
          {(parseInt(query_string.offset/20)+1)!==page_count?
                    <li   className="page-item"><button className="page-link" onClick={increment}> ▶️ </button></li>:<li  className="page-item"><button disabled className="page-link" onClick={increment}>▶️</button></li>  
          }
        </ul>
      </nav>:null}

    </>
  )
}

export default SubB;