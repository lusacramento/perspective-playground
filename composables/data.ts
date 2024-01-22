const transforms = ref([
	{
		name: 'perspective',
		value: 100,
		defaultValue: 100,
		min: 0,
		max: 999,
		unit: 'px',
	},

	{
		name: 'rotateX',
		value: 0,
		defaultValue: 0,
		min: -180,
		max: 180,
		unit: 'deg',
	},

	{
		name: 'rotateY',
		value: 0,
		defaultValue: 0,
		min: -180,
		max: 180,
		unit: 'deg',
	},

	{
		name: 'rotateZ',
		value: 0,
		defaultValue: 0,
		min: -180,
		max: 180,
		unit: 'deg',
	},
])

function resetAll() {
	transforms.value.forEach((element) => (element.value = element.defaultValue))
}

function getAlltoString() {
	let str = 'transform:'
	transforms.value.forEach((element) => {
		str = `${str} ${element.name}(${element.value}${element.unit})`
	})
	return str
}

export const useData = () => {
	return {
		transforms,
		resetAll,
		getAlltoString,
	}
}
