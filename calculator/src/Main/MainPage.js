import React, {useState} from 'react'
import './main.css'
const MainPage = () => {
    const [value, setValue] = useState("");
    const handleClick= (e) => {
        setValue(value.concat(e.target.name))
    }
    const clear = () =>{
     setValue("")
    }
    const backSpace = () =>{
        setValue(value.slice(0,-1)); //to remove the last number added
    }
    const equals =()=>{
        try{
            setValue(eval(value).toString())
        }catch(err){
            setValue("Error")
        }
        
    }
    return (
        <div className='main'>
        <div className="space"></div>
            <input type='text'value={value} />
            <div className='nums'>
                <div className='counts'>
                    <button  className='digits row' onClick={clear}>AC</button>
                    <button className='digits row' onClick={backSpace}>C</button>
                    <button name='%' className='digits row' onClick={handleClick}>%</button>
                    <button name='/' className='digits orange' onClick={handleClick}>/</button>
                </div>
                <div className='counts'>
                    <button name='7' className='digits' onClick={handleClick}>7</button>
                    <button name='8' className='digits' onClick={handleClick}>8</button>
                    <button name='9' className='digits' onClick={handleClick}>9</button>
                    <button name='*' className='digits orange' onClick={handleClick}>x</button>
                </div>
                <div className='counts'>
                    <button name='4' className='digits' onClick={handleClick}>4</button>
                    <button name='5' className='digits' onClick={handleClick}>5</button>
                    <button name='6' className='digits' onClick={handleClick}>6</button>
                    <button name='-' className='digits orange' onClick={handleClick}>-</button>
                </div>
                <div className='counts'>
                    <button name='1' className='digits' onClick={handleClick}>1</button>
                    <button name='2' className='digits' onClick={handleClick}>2</button>
                    <button name='3' className='digits' onClick={handleClick}>3</button>
                    <button name='+' className='digits orange' onClick={handleClick}>+</button>
                </div>

                <div className='counts'>
                    <button name='0' className='digits zero' onClick={handleClick}>0</button>
                    <button name='.' className='digits' onClick={handleClick}>.</button>
                    <button  className='digits orange' onClick={equals}>=</button>
                </div>
            </div>

        </div>
    )
}

export default MainPage
