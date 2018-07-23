import React from "react"

class Clock extends React.Component {
    constructor(props) {
        super(props)
        console.log(props, "Clock")
        // 使用this之前必须先：super()
        this.state = { date: new Date() }
    }
    // 1、将要挂在到DOM
    componentWillMount() {
        // Ajax 
        console.log("componentWillMount")
    }
    // 2 渲染到DOM之后执行（挂载DOM之后）
    componentDidMount() {
        this.Timer = setInterval(
            () => this.autoChange(),
            1000
        )
    }
    // 3、组件将要更新
    componentWillUpdate() {
        // console.log("componentWillUpdate")
    }
    // 4、组件更新完毕
    componentDidUpdate() {
        // console.log("componentDidUpdate")
    }
    // 5、props将要更新
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps")
    }
    // 6、卸载
    componentWillUnmount() {
        if (this.Timer) clearInterval(this.Timer)
    }
    // 7、使用setState 周期性性的更新组件本地状态
    autoChange() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div className="clock-wrap">
                <p>Time is:</p>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

module.exports = Clock