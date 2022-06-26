import React from 'react'

export default function Buttons(){
    return(
        <div className='buttons'>
                <div className='buttonz'>
                <a className='button1 button-wrap' href="#" >
                    <img src='../images/email.png' width='15px'></img>
                    <span>Email</span>
                </a>
                </div>
                
                <div className='buttonz2'>
                <a className='button2 button-wrap' href="www.linkedin.com/in/arathbun1" target="_blank">
                    <img src='../images/linkedin.png' width='15px'></img>
                    <span>LinkedIn</span>
                </a>
                </div>
        </div>
    )
}