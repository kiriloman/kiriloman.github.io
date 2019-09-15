import React from 'react'
import linkedin from './linkedin.png'
import github from './github.png'

class MediaLinks extends React.Component {
    render() {
        return <div className='media'>
            {mediaLinks()}
        </div>
    }
}

const mediaLinks = () => {
    return <div>
        <a id='linkedin' href='https://www.linkedin.com/in/kyryloyefimenko' className='button'>
            <img src={linkedin} className='media_link'></img>
        </a>
        <a id='github' href='https://www.github.com/kiriloman' className='button'>
            <img src={github} className='media_link'></img>
        </a>
    </div>
}

export default MediaLinks
