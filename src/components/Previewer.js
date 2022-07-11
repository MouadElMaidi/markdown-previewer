import React from 'react'

export default function Previewer(props) {

    return(
        <div className="previewer">
            <h3 className="title">Previewer</h3>
            <div className="previewer--display" dangerouslySetInnerHTML={{__html: props.previewText}}>
            </div>
        </div>
    )
}

//dangerouslySetInnerHTML={{__html: props.previewText}