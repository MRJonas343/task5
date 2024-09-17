import { Data } from "@/interfaces"

export const formatters = {
	MX: {
		address: (data: Data, i: number) =>
			`${data.street[i]}, ${data.zipCode[i]} ${data.city[i]}, ${data.state[i]}`,
		name: (data: Data, i: number) =>
			`${data.names[i]} ${data.middleNames[i]} ${data.lastNames[i]}`,
	},
	PL: {
		address: (data: Data, i: number) =>
			`${data.buildingNumber[i]} ${data.street[i]}, ${data.zipCode[i]} ${data.city[i]}`,
		name: (data: Data, i: number) => `${data.lastNames[i]} ${data.names[i]}`,
	},
	USA: {
		address: (data: Data, i: number) =>
			`${data.buildingNumber[i]} ${data.street[i]}, ${data.city[i]}, ${data.state[i]}`,
		name: (data: Data, i: number) => `${data.names[i]} ${data.lastNames[i]}`,
	},
}
