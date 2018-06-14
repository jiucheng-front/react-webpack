import React from "react"


import CommentsList from "./CommentsList.jsx"
import CommentsForm from "./CommentsForm.jsx"

class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    anthor:"马云",
                    content:"阿里巴巴f(〃'▽'〃)大索道"
                },
                {
                    anthor:"马化腾",
                    content:"腾讯分开了圣诞节福利"
                }
            ]
        }
    }

    submitClick(event) {
    }
    render() {
        return (
            <div className="contents-box">
                <CommentsList data={ this.state.data } />
                <CommentsForm />
            </div>
        )
    }
}

module.exports = Comments