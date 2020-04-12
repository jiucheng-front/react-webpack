import React from "react";

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "CommentsList");
  }

  // 1、将要挂在到DOM
  componentWillMount() {
    // Ajax
    console.log("componentWillMount", "CommentsList");
  }
  // 2 渲染到DOM之后执行（挂载DOM之后）
  componentDidMount() {
    console.log("componentDidMount", "CommentsList");
  }
  // 3、组件将要更新
  componentWillUpdate() {
    console.log("componentWillUpdate", "CommentsList");
  }
  // 4、组件更新完毕
  componentDidUpdate() {
    console.log("componentDidUpdate", "CommentsList");
  }
  // 5、props将要更新
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "componentWillReceiveProps");
  }
  // 6、卸载
  componentWillUnmount() {
    console.log("componentWillUnmount", "CommentsList");
  }

  render() {
    let list = (
      <ul>
        {this.props.data.map((item, index) => (
          <li key={index}>
            <span className="anthor-name">{item.anthor}:</span>
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    );
    return <div className="CommentsList-box">{list}</div>;
  }
}

module.exports = CommentsList;
