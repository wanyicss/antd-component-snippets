const vscode = require('vscode');
const antdSnippets = require('./snippets/antd.js');

// 使用示例
// 如果要获取 Button 组件的代码片段：
// console.log(antdSnippets.Button);


// 激活函数会在你的扩展被激活时执行
function activate(context) {
  // 注册命令，当用户执行该命令时将调用此回调函数
  let disposable = vscode.commands.registerCommand('extension.antdComponentSnippets', function () {
    // 获取当前打开的编辑器
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('没有打开的编辑器');
      return; // 早期退出，如果没有打开的编辑器则无需执行后续逻辑
    }
    const selection = editor.selection;
  
    // 弹出快速选择菜单供用户选择组件
    vscode.window.showQuickPick(Object.keys(antdSnippets), {
      placeHolder: '请选择一个组件'
    }).then(selected => {
      // 用户在快速选择菜单中选择了组件后的回调函数
      if (selected) {
        const snippet = antdSnippets[selected];
        editor.insertSnippet(new vscode.SnippetString(snippet), selection.active);
      }
    });
  });

  context.subscriptions.push(disposable);
}

// 此方法会在插件被停用时调用
function deactivate() {}

module.exports = {
  activate,
  deactivate
};
