import React from "react"

class CommentsForm extends React.Component {
    constructor(props) {
        super(props)
        this.submitClick = this.submitClick.bind(this)//<a onClick={this.submitClick.bind(this)} href="javascript:;">评论</a>
    }

    submitClick(event) {
        // 通过：refs 集合获取指定的值
        let anthor = this.refs.anthor.value.trim()
        let content = this.refs.content.value.trim()
        // 1、调用父组件的回调函数，传递参数.es6结构赋值
        if (!anthor) {
            alert("用户名不能为空")
            return
        } else if (!content) {
            alert("评论不能为空")
            return
        } else {
            this.props.onCommentsSubmit({ anthor, content })
            // 置空
            this.refs.anthor.value = ""
            this.refs.content.value = ""
        }
    }
    render() {
        return (
            <div className="comments-wrap">
                <div className="user-name comments-item">
                    <label>用户名：</label>
                    {/* 通过ref 传值 */}
                    <input type="text" ref="anthor" maxLength="15" placeholder="输入用户名" />
                </div>
                <div className="user-content comments-item">
                    <label>内容：</label>
                    <textarea maxLength="200" ref="content" placeholder="输入评论内容" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="user-submit comments-item">
                    <a onClick={this.submitClick} href="javascript:;">评论</a>
                </div>
            </div>
        )
    }
}

module.exports = CommentsForm