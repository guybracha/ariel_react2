import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
export default function VipInfo() {

    const[info, setInfo] = useState({});
    const params = useParams();
    const [load, setLoad] = useState(false);
    const nav = useNavigate();

    useEffect( ()=>{
        doApi();
    },[params])


    const doApi = async() =>{
        const url = "http://fs1.co.il/bus/vip_big.php";
        try{
            setLoad(true);
            setInfo({});
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            const item = data.find(item => item.rank == params["rank"]);
            setInfo(item);
            setLoad(false);
        } catch(error){
            console.log(error);
        }
    }


  return (
    <div className='container'>
        {load && <h3>Loading...</h3>}
        { info.name &&
        <article>
            <h2>Info About: {info.personName}</h2>
            <img src={info.person.squareImage} className='col-4' alt="vip" />
            <div>Companies: {info.source}</div>
            <div>Bio: {info.bios[0]}</div>
            <Link to="/vip">Back to list</Link>
            <br></br>
            { params < 10 &&
            <button class="btn btn-warning" onClick={()=>{
                nav(`/vip/${Number(params["rank"])+ 1}`)
            }}>Next</button>
            }
        </article>
    }
    </div>
  )
}
