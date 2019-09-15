import React from 'react'

class Footer extends React.Component {
    render() {
        return <div className="footer">
            {copyright}
        </div>
    }
}

const copyright = '2019 © kiriloman should this also have the buttons?'

export default Footer
