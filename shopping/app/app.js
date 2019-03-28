require('../css/index.less');
require('../css/index2.css');
var $=require('jquery');

let data = [{
				tradeName: 'oppor17',
				cost: 3699,
				count: 1,
				a: 3699,
				img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3165931989,3191818348&fm=26&gp=0.jpg'
			},
			{
				tradeName: 'iPhone8',
				cost: 7999,
				count: 1,
				a: 7999,
				img: 'https://f12.baidu.com/it/u=1433455667,2251589692&fm=72'
			},
			{
				tradeName: 'iiPad',
				cost: 4999,
				count: 1,
				a: 4999,
				img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1007262202,3047694878&fm=200&gp=0.jpg'
			},
			{
				tradeName: 'vivo',
				cost: 2999,
				count: 1,
				a: 2999,
				img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1100570668,3186961140&fm=26&gp=0.jpg'
			}
		]

		let money = 0
		let a = 0
		window.onload = function() {
			lode()
			//		全选
			$('li>div [type=checkbox]').click(function() {
				//				console.log(this.checked)
				if(this.checked == true) {
					money = 0
					$('li>[type=checkbox]').each(function(index) {
						this.checked = true
						money += data[index].a
						$('.right span').html(money)
					})
				} else {
					$('li>[type=checkbox]').each(function(index) {
						this.checked = false
						money = 0
						$('.right span').html(money)
					})
				}

			})
			money = 0
			$('.minus').each(function(index) {
				$(this).click(function() {

					if(data[index].count > 1) {
						data[index].count--
							if(($(this).parent().parent().children('input').prop('checked')) == true) {
								money -= data[index].cost
								//								console.log(money)
								$('.right span').html(money)
							}
					}

					calculate(index)

				})

			})
			$('.add').each(function(index) {

				$(this).click(function() {

					data[index].count++
						calculate(index)
					console.log($(this).parent().parent().children('input').prop('checked'))
					if(($(this).parent().parent().children('input').prop('checked')) == true) {
						//						keyboard()
						money += data[index].cost
						console.log(money)
						$('.right span').html(money)
					}
				})

			})

			$('li>[type=checkbox]').each(function(index) {

				if(this.checked == false) {

					$(this).click(function() {
						if(this.checked == true) {
							a++
							money += data[index].count * data[index].cost
							$('.right span').html(money)
						} else {
							a--
							money -= data[index].count * data[index].cost
							$('.right span').html(money)
						}
						if(a == 4) {
							$('li>div [type=checkbox]').each(function() {
								this.checked = true
							})
						}
						if(a == 0) {
							$('li>div [type=checkbox]').each(function() {
								this.checked = false
							})
						}
					})
				}

			})
			keyboard()

		}

		function lode() {
			let ul = document.createElement('ul')
			let li = ``
			for(k in data) {
				//			console.log(data[key])
				li += `<li>
				<input type="checkbox" value="" class="case" />
				<div class='img'><img src="${data[k].img}"></div>
				<div class=" commodity">
					<span>${data[k].tradeName}</span>
					<span>${data[k].cost}元</span>
				</div>
					<div class=" quantity">
						<button class='minus'>-</button>
						<p><input type="text" name="" id="" value="${data[k].count}" />件</p>
						<button class='add'>+</button>
						
					</div>
					<div class="total">
						<span>${data[k].a}</span>元
					</div>
			</li>`

			}
			li += `<li class="totalPrices">
				<div class="lefts">
				<span>全选</span>
				<input type="checkbox" value="" class="case" />
				</div>
				<div class="right">
					总价<span>${money}</span>元
				</div>
			</li>`
			ul.innerHTML = li
			$('#box').html(ul)

		}

		//		单个商品总价
		function calculate(b) {
			$('input[type=text]').each(function(a) {
				if(b == a) {
					data[a].a = data[a].count * data[a].cost
					$(this).val(data[a].count).
					parent().parent().next('div').children().html(data[a].a);
				}
			})
			//						
		}

		let mm = 0

		function keyboard() {
			$('input[type=text]').each(function(index) {

				$(this).keydown(function(e) {

					let ke = e.keyCode
					if(ke == 13) {
						//						console.log(/\d/g.test($(this).val()))
						//必须为 >= 1 的数字
						if($(this).val() == '' || !/\d/g.test($(this).val())) {
							$(this).val(1)
						}
						//						console.log($(this).val())
						let lastval = data[index].count
						data[index].count = $(this).val()
						calculate(index)
						if(($(this).parent().parent().parent().children('input').prop('checked')) == true) {
							money += (data[index].count - lastval) * data[index].cost
							$('.right span').html(money)
						}
					}
				})
			})
		}