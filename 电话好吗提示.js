// 标题：输入电话号码时自动推荐出下一位合法的数字集
// 描述信息
// 公司有10万名员工，每名员工都有一个座机号码。现在要在网页上实现一个“自动补位推荐” 的功能，问如何实现？

// 解释：

// “自动补位推荐” 功能：有一个输入框，用户每输入一个数字，立马推荐出下一位合法的数字集合。
// 比如只有 5789234、5623786、5633678三个电话号码，当第一位输入5时，立马推荐下一位有效数字集合[ 7, 6 ]，
// 如果第二位输入6时，下一位有效数字集合为[2，3]....

function dictTree (node, val) {
  let next = node.children.filter(f => f.val === val[0])[0]
  if (next) {
    dictTree(next, val.slice(0))
  } else {
    next = { val: val[0], children: [] }
    dictTree(next, val.slice(0))
    node.children.push(next)
  }
}


function vimtexCompletion (tree) {
  let _tree = tree
  return function (v) {
    let nodes = _tree.children
    for (let node of nodes) {
      if (node.val === v) {
        _tree = node
        return node.children.map(n => n.val);
      }
    }
    _tree = {}
    return []
  }
}


vimtexCompletion(5, [5789234、5623786、5633678])
