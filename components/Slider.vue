<template>
	<div class="settings-container">
		<label class="slide-label" :for="element.props.name"
			>{{ element.props.name }} {{ element.props.value
			}}{{ element.props.unit }}</label
		>
		<div class="slider">
			<input
				:id="element.props.name"
				type="range"
				v-model="element.props.value"
				:min="element.props.min"
				:max="element.props.max"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const element = defineProps(['props'])
</script>

<style>
	.settings-container {
		justify-content: center;
	}

	label {
		display: block;
		color: #fff;
		text-align: center;
	}

	.slide-box {
		width: 500px;
		height: 50px;
		text-align: center;
	}

	.slider {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.counter {
		padding-left: 10px;
	}
</style>
