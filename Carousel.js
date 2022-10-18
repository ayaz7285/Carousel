import React,{useEffect, useState} from 'react';
function Carousel({children,delay})
{
    const [idx,setIdx] = useState(0);
    var len = children.length;
    let interval

    useEffect(()=>{
        interval = setInterval(()=>{
            moveNext();
        },delay)
        return ()=>{
            restartTimer();
        }
    })
    
    function restartTimer(){
        clearInterval(interval);
    }
    
    const movePrev=()=>{
        idx===0?setIdx(len-1):setIdx(idx-1)
        restartTimer();
    }


    const moveNext=()=>{
        idx===len-1?setIdx(0):setIdx(idx+1)
        restartTimer();
    }

    return (
        <div>
            <img src={children[idx]} height="500px" width="500px"/>
            <div>
                {/* <button onClick={()=>idx===0?setIdx(len-1):setIdx(idx-1)}>Prev</button>
                <button onClick={()=>idx===len-1?setIdx(0):setIdx(idx+1)}>Next</button> */}
                <button onClick={movePrev}>Prev</button>
                <button onClick={moveNext}>Next</button>
            </div>
        </div>
    )
}
export default Carousel;