import React from 'react';
import photo from './photo.png'

class Body extends React.Component {
    render() { 
        return <div className='body'>
            <div className='body-img'>
                <img src={photo} id='photo'></img>
            </div>
            <div className='body-text'>
                {content}
            </div>
        </div>
    }
}

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non consectetur a erat nam at. Dolor morbi non arcu risus. At volutpat diam ut venenatis. Ornare massa eget egestas purus viverra accumsan in. Vitae nunc sed velit dignissim sodales ut eu sem. Semper feugiat nibh sed pulvinar proin. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Adipiscing vitae proin sagittis nisl. Elementum nibh tellus molestie nunc non blandit massa enim nec. Magna etiam tempor orci eu lobortis elementum. Orci porta non pulvinar neque laoreet. Blandit turpis cursus in hac habitasse. Ultrices vitae auctor eu augue ut lectus arcu. Et ultrices neque ornare aenean euismod elementum nisi quis. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget."

export default Body
