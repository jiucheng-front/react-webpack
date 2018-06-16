import React from "react"

class Clock extends React.Component {
    // 1
    constructor(props) {
        super(props)
        console.log(props, "Clock")
        // 使用this之前必须先：super()
        this.state = { date: new Date() }
    }
    // 2 渲染到DOM之后执行（挂载）
    componentDidMount() {
        this.Timer = setInterval(
            () => this.autoChange(),
            1000
        )
    }
    // 3、使用setState 周期性性的更新组件本地状态
    autoChange() {
        this.setState({
            date: new Date()
        })
    }
    // 4、卸载
    componentWillUnmount() {
        clearInterval(this.Timer)
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