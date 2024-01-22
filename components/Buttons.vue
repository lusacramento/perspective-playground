<template>
	<div class="buttons">
		<button type="button" @click.prevent="reset">Reset</button>
		<button type="button" @click.prevent="copyToClipboard">Copy</button>
	</div>
</template>

<script lang="ts" setup>
	const reset = () => useData().resetAll()

	const copyToClipboard = async () => {
		const text = useData().getAlltoString()
		await navigator.clipboard.writeText(text)

		alert('CSS copied to Clipboard!')
	}
</script>

<style>
	button {
		background-color: #8d81f3;
		color: #fff;
		display: inline-block;
		font-size: 20px;
		padding: 10px;
		outline: none;
		border: none;
		margin-right: 10px;
	}
</style>
