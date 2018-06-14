import React from "react"

class CommentsList extends React.Component {
    constructor(props) {
        super(props)
        console.log(props, "CommentsList")
    }

    render() {
        let list = (
            <ul>
                {this.props.data.map((item, index) =>
                    <li key={index}>
                        <span className="anthor-name">{item.anthor}:</span>
                        <span>{item.content}</span>
                    </li>
                )}
            </ul>
        )
        return (
            <div className="CommentsList-box">
                {list}
            </div>
        )
    }
}

module.exports = CommentsList