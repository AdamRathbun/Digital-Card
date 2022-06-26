import React from 'react'

export default function Photo(){
    return(
        <div className='footer' id='footer'>
                <div className='f-box'>
                <a className='button3' href='https://github.com/AdamRathbun' target="_blank">
                    <img className='f-but' src='../images/github.png' width='30px'></img>
                </a>
                </div>
                <div className='f-box'>
                <a className='button3' href='https://angel.co/u/adam-rathbun' target="_blank">
                    <img src='../images/angellist.png' width='30px'></img>
                </a>
                </div>
                <div className='f-box'>
                <a className='button3' href='https://twitter.com/adam_r_coder' target="_blank">
                    <img src='../images/twitter.png' width='30px'></img>
                </a>
                </div>
        </div>
    )
}