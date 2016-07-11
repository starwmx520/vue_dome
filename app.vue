<template>
<div>
	<h1>{{title}}</h1>
	<p>
		<!-- 使用指令 v-link 进行导航。 -->
		<a v-link="{ path: '/foo' }">Go to Foo</a>
		<a v-link="{ path: '/bar' }">Go to Bar</a>
		
	</p>
	<router-view keep-alive></router-view>
</div>


</template>

<script>
module.exports={
	data:function(){
		return {
			title:'vue app'
		}
	}
}
</script>
