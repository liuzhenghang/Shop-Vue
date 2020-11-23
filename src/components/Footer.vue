<template>
	<footer class="foot">
		<li>
			<router-link to="/"><span class="fa fa-home"></span>首页</router-link>
<!--      使用router-link，该标签指向路由对应的url，实现不刷新页面跳转url-->
<!--      该标签被渲染后会变成a标签，所以在css样式中，应该指定a标签的属性-->
		</li>
		<li>
			<router-link to="/goods"><span class="fa fa-gift"></span>商品</router-link>
		</li>
		<li>
			<router-link to="/cart"><span class="fa fa-shopping-cart"></span>购物车</router-link>
		</li>
		<li>
			<router-link to="/mine"><span class="fa fa-user"></span>我的</router-link>
		</li>
	</footer>
</template>

<script>
</script>

<style>
	/*中间*/
	.foot {
		height: 0.45rem;
		background: #6495ed;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.foot li {
		text-align: center;
	}

	.foot li a {
		color: #fff;
	}

	.foot li a span {
		display: block;
	}

	.foot li a:hover {
		color: orange;
	}
</style>
