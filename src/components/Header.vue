<template>
	<mt-header class="head" v-bind:title="title">
		<router-link to="/" slot="left">
			<mt-button icon="back"></mt-button>
		</router-link>
		<mt-button icon="more" slot="right"></mt-button>
	</mt-header>
</template>

<script>
	export default {
		data() {
			return {
				title: '首页'
			};
		},
		mounted() {
			this.$eventbus.$on('changeTitle', (str) => {
				this.title = str
			})
		}
	}
</script>

<style>
	.head {
		align-content: center;
		text-align: center;
	}
</style>
