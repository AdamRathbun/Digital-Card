import React from 'react'
import ReactDOM from 'react-dom'

import Photo from './components/photo.js'
import Name from './components/name.js'
import Buttons from './components/buttons.js'
import About from './components/about.js'
import Interests from './components/interests.js'
import Footer from './components/footer.js'

function App(){
    return(
        <div className='frame'>
            <Photo />
            <Name />
            <div className='main-content'>
                <Buttons />
                <About />
                <Interests />
            </div>
                <Footer />
        </div>
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)