<style>
.foo{background:#f4f4f4;}
</style>
<template>
	<div class="foo">
		{{name}}<br/>
		<a v-link="{ path: '/foo/hello' }">Go to hello</a>		
		<router-view></router-view>
	</div>
</template>

<script>
module.exports={
	data:function(){
		return {name:'foo'}
	},methods:{
		getname:function(){
			alert(this.name)
		}
	}
}
</script>