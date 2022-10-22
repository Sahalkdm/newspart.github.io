import React , {useEffect, useState}from 'react'
import Card from '../Cards/Card'
import NewsPopup1 from '../News/NewsPopup1'
import './NewsCards.css'
function NewsCards() {
  const [details,setDetails]=useState([]);
  const [title,setTitle]=useState()
  const [body,setBody]=useState()
  const [a,setA]=useState(false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)    //data fetced for testing
     .then((response) => response.json())
     .then((actualData) => {
      const datas=actualData.slice(0,15)
      setDetails(datas)
     })
     .catch((err) => {
      console.log(err.message);
     });
   }, []);

   const ClickHandler =(title,body) =>{
    setA(true)
    setTitle(title)
    setBody(body)
    }

   const RemovePopup=()=>{
    setA(false);
  }
  return (
    <div className='newsCards'>
       {details.map((data)=>{
       return <Card title={data.title} body={data.body} key={data.id} onClickHandler={()=>ClickHandler(data.title,data.body)}/>
      }
       )}
       {a && <NewsPopup1  title={title} body={body} onConform={RemovePopup}/>}
    </div>
  )
}

export default NewsCards
