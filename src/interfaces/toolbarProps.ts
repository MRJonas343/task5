import { Register } from "./fakeRegistered"
import { Regions } from "./regions"

export interface ToolbarProps {
	data: Register[]
	seed: string
	numberOferrors: number
	onCountryChange: (country: Regions) => void
	onErrorsChange: (numberOfErrors: number) => void
	onSeedChange: (seed: string) => void
	onGenerateRandomSeed: () => void
}
