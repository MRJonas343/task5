import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import { selectOptions } from "@/constants/selectOptions"
import { Regions, ToolbarProps } from "@/interfaces"
import { exportToCSV } from "@/utils"
import { FaRandom, FaDownload } from "react-icons/fa"
import { FC, useState } from "react"

export const Toolbar: FC<ToolbarProps> = ({
	seed,
	numberOferrors,
	onCountryChange,
	onErrorsChange,
	onSeedChange,
	onGenerateRandomSeed,
	data,
}) => {
	const [isSeedInvalid, setIsSeedInvalid] = useState(false)
	const [isErrorsInvalid, setIsErrorsInvalid] = useState(false)

	const changeSelect = (value: Regions) => {
		if (!value) return
		onCountryChange(value)
	}

	const handleErrorsChange = (value: string) => {
		if (value === "" || value.endsWith(".")) {
			// biome-ignore lint/suspicious/noExplicitAny: <Flexibility need>
			onErrorsChange(value as any)
			setIsErrorsInvalid(false)
			return
		}

		const parsedValue = Number.parseFloat(value)

		if (Number.isNaN(parsedValue) || parsedValue < 0 || parsedValue > 1000) {
			setIsErrorsInvalid(true)
			return
		}

		setIsErrorsInvalid(false)
		onErrorsChange(parsedValue)
	}

	const handleSeedChange = (value: string) => {
		if (Number.isNaN(Number(value))) return

		if (Number(value) < 0 || Number(value) > 1000000) {
			setIsSeedInvalid(true)
			return
		}

		setIsSeedInvalid(false)
		onSeedChange(value)
	}

	return (
		<header className="flex w-[90%] max-w-[1100px]">
			<div className="w-1/4 flex justify-center items-start">
				<Select
					radius="sm"
					className="flex items-center w-40"
					onChange={(e) => changeSelect(e.target.value as Regions)}
					label="Region"
					labelPlacement="outside-left"
					defaultSelectedKeys={["USA"]}
				>
					{selectOptions.map((option) => (
						<SelectItem key={option} value={option}>
							{option}
						</SelectItem>
					))}
				</Select>
			</div>

			<div className="flex flex-row w-1/4 gap-3">
				<Input
					radius="sm"
					label="Errors"
					className="w-52 h-10"
					labelPlacement="outside-left"
					value={String(numberOferrors)}
					onChange={(e) => handleErrorsChange(e.target.value)}
					type="range"
					min="0"
					max="10"
				/>
				<Input
					value={String(numberOferrors)}
					onChange={(e) => handleErrorsChange(e.target.value)}
					isInvalid={isErrorsInvalid}
					errorMessage={
						isErrorsInvalid && "Must be a number between 0 and 1000"
					}
					radius="sm"
					className="w-20"
				/>
			</div>

			<div className="flex flex-row w-1/4 justify-center gap-3">
				<Input
					value={seed}
					errorMessage={
						isSeedInvalid && "Must be a number between 0 and 1,000,000"
					}
					labelPlacement="outside-left"
					isInvalid={isSeedInvalid}
					onChange={(e) => handleSeedChange(e.target.value)}
					className="w-36 h-10"
					label="Seed"
					radius="sm"
				/>
				<Button
					onClick={onGenerateRandomSeed}
					className=""
					isIconOnly
					radius="sm"
				>
					<FaRandom size={20} />
				</Button>
			</div>

			<div className="w-1/4 flex justify-start">
				<Button
					color="primary"
					radius="sm"
					className=""
					startContent={<FaDownload size={15} />}
					onClick={() => exportToCSV(data)}
				>
					Export to CSV
				</Button>
			</div>
		</header>
	)
}
