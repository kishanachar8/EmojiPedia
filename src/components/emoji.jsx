import { useEffect,useState } from "react";
import '../css/emoji.css'
const Emoji = () => {
    let [value, setvalue] = useState([]);
    useEffect(()=>{
        let fetchData = async()=>{
            let response= await fetch('http://localhost:1000/emojis')
            let data = await response.json();
            console.log(data);
            setvalue(data)
        }
        fetchData();
    },[])
    let handleRemove= (emoji)=>{
        setvalue(value.filter((x)=>x.emoji!==emoji));
    }
    return ( 
        <div className="emoji">
            {value.map((data)=>(
                <div className="box">
                    <h1 style={{fontSize:"50px",marginBottom:"50px"}}>{data.emoji}</h1>
                    <h1><u><b>Description:</b></u> {data.description}</h1>
                    <h1><u><b>Category:</b></u> {data.category}</h1>
                    <h1><u><b>Aliases:</b></u> {data.aliases}</h1>
                    <button onClick={()=>handleRemove(data.emoji)}>Remove</button>
                </div>
            ))}
        </div>
     );
}
 
export default Emoji;
