import React from 'react'

const Main = () => {
    return (
        <div className='main'>
            <div><input type='text' /></div>
            <div className='nums'>
                <div className='counts'>
                    <button className='digits'>AC</button>
                    <button className='digits'>+/-</button>
                    <button className='digits'>%</button>
                    <button className='digits orange'>/</button>
                </div>
                <div className='counts'>
                    <button className='digits'>7</button>
                    <button className='digits'>8</button>
                    <button className='digits'>9</button>
                    <button className='digits orange'>x</button>
                </div>
                <div className='counts'>
                    <button className='digits'>4</button>
                    <button className='digits'>5</button>
                    <button className='digits'>6</button>
                    <button className='digits orange'>-</button>
                </div>
                <div className='counts'>
                    <button className='digits'>1</button>
                    <button className='digits'>2</button>
                    <button className='digits'>3</button>
                    <button className='digits orange'>+</button>
                </div>

                <div className='counts'>
                    <button className='digits zero'>0</button>
                    <button className='digits'>.</button>
                    <button className='digits'>=</button>
                </div>
            </div>

        </div>
    )
}

export default Main
