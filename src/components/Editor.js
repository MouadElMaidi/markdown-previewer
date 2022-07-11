import React from 'react'

export default function Editor(props) {

    return (
        <div className="editor">
            <h3 className="title">Editor</h3>
            <textarea
                className="editor--input"
                rows={12}
                name="markdown"
                onChange={event => props.handleClick(event)}
                value={props.value}
            />
        </div>
    )
}