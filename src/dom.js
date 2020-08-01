window.dom = {
    /*读写style的属性 */
    style(node, name, value) {
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] = value//参数为3，表示是设置style的值
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {//判断name是不是字符串，是的话就是读取style的属性
                // dom.style(div, 'color')
                return node.style[name]
            } else if (name instanceof Object) {//判断name是不是对象
                // dom.style(div, {color: 'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]//遍历对象，以对象的形式设置style
                }
            }
        }
    },
    /*获取标签或者很多标签 */
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)//scope里没有，再去document里找
    },
    /*遍历所有节点 */
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
};