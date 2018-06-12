const Ajax = (method, url, data) => {
    let xhrRequest = null
    if (window.XMLHttpRequest) {
        xhrRequest = new XMLHttpRequest()
    } else {
        xhrRequest = new ActiveXObject('Microsoft.XMLHTTP')
    }

    return new Promise((resolve, reject) => {
        let str = null
        xhrRequest.open(method, url, true)

        if (method === "POST" && data != null) {
            xhrRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8")
            for (var key in data) {
                str += '&' + key + '=' + data[key]
                str = str.slice(1)
            }
        }

        xhrRequest.onreadystatechange = function () {
            if (xhrRequest.readyState == 4) {
                if (xhrRequest.status == 200) {
                    resolve(xhrRequest.responseText)
                } else {
                    reject(xhrRequest.status)
                }
            }
        }

        xhrRequest.send(str)
    })
}

module.exports = Ajax