console.log('entry配置入口文件');

window.onload = function () {

	var addnode = document.getElementById('addnode');

	addnode.onclick = function () {

		var h1 = document.createElement('h1');

		h1.textContent = '创建h1节点';

		document.getElementById('box').appendChild(h1);

	}

}