import React from 'react';

class Header extends React.Component{
    render() {
        return <div className='header'>
            <a href='whoami'>
                <button >whoami</button>
            </a>
            <a href='projects'>
                <button >projects</button>
            </a>
            <a href='studyhub'>
                <button >studyhub</button>
            </a>
            <a href='articles'>
                <button >articles</button>
            </a>
        </div>
    }
}

export default Header
