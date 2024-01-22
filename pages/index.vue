<template>
	<div>
		<h2>CSS3 Perspective Playground</h2>
		<main>
			<section class="settings">
				<div v-for="element in transforms" :key="element.name">
					<Slider :props="element" />
				</div>
				<div class="buttons-group">
					<Buttons />
				</div>
			</section>
			<section class="output">
				<Box />
			</section>
		</main>
	</div>
</template>

<script lang="ts" setup>
	const transforms = useData().transforms
</script>

<style>
	h2 {
		color: #8d81f3;
		text-align: center;
		font-size: 40px;
		margin: 20px;
	}

	main {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 420px;
		max-width: 768px;
		margin: 0 auto;
		font-family: monospace, sans-serif;
		font-size: 22px;
	}

	.settings {
		width: 50%;
		z-index: 2;
	}

	.buttons-group {
		margin-top: 20px;
		display: flex;
		align-content: center;
		justify-content: center;
	}
</style>
