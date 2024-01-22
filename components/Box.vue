<template>
	<div class="box-container">
		<div class="box" :style="box"></div>
	</div>
</template>

<script lang="ts" setup>
	let perspective = useData().transforms.value[0]
	let rotateX = useData().transforms.value[1]
	let rotateY = useData().transforms.value[2]
	let rotateZ = useData().transforms.value[3]

	const box = computed(() => {
		return {
			transform: `perspective(${perspective.value}px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)
							rotateZ(${rotateZ.value}deg)`,
		}
	})
</script>

<style>
	.box-container {
		padding: 50px;
		border: 1px solid #8d81f3;
	}
	.box {
		width: 150px;
		height: 150px;
		background: #8d81f3;
	}
</style>
