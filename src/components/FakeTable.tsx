"use client"

import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
	Spinner,
} from "@nextui-org/react"
import { generateRandomSeed, resetRegisters, generateFakeData } from "@/utils"
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll"
import { columns, adapterValue } from "@/constants"
import { useState, useEffect, useRef } from "react"
import { Regions, Register } from "@/interfaces"
import { Toolbar } from "."

const FakeTable = () => {
	const [numberOferrors, setNumberOfErrors] = useState(0)
	const [registers, setRegisters] = useState<Register[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [seed, setSeed] = useState("")
	const [hasMore] = useState(true)

	const currentSeed = useRef(0)
	const countryRef = useRef<Regions>("USA")
	const numberOfErrorsRef = useRef(0)

	const handleErrorsChange = (value: number) => {
		numberOfErrorsRef.current = value
		setNumberOfErrors(value)

		const newRegisters = resetRegisters(
			Number(seed),
			countryRef.current,
			numberOfErrorsRef.current,
		)

		setRegisters(newRegisters)
	}

	const handleCountryChange = (value: string) => {
		const region = adapterValue.find((item) => item.key === value)?.value
		countryRef.current = region as Regions
		currentSeed.current = Number(seed) + 1

		const newRegisters = resetRegisters(
			Number(seed),
			countryRef.current,
			numberOfErrorsRef.current,
		)

		setRegisters(newRegisters)
	}

	const handleSeedChange = (value: string) => {
		currentSeed.current = Number(value) + 1
		setSeed(value)
		if (value.length === 0) return

		const newRegisters = resetRegisters(
			Number(value),
			countryRef.current,
			numberOfErrorsRef.current,
		)

		setRegisters(newRegisters)
	}

	const handleGenerateRandomSeed = () => {
		const newSeed = generateRandomSeed().toString()
		currentSeed.current = Number(newSeed) + 1

		const newRegisters = resetRegisters(
			Number(newSeed),
			countryRef.current,
			numberOfErrorsRef.current,
		)

		setSeed(newSeed)
		setRegisters(newRegisters)
	}

	const createMoreRegisters = () => {
		currentSeed.current = currentSeed.current + 1

		const newData = generateFakeData(
			currentSeed.current,
			countryRef.current,
			numberOfErrorsRef.current,
		)
		const newRegisters = newData.map((register, index) => ({
			...register,
			index: registers.length + index + 1,
		}))

		setRegisters((prev) => {
			const updatedRegisters = [...prev, ...newRegisters]
			return updatedRegisters
		})
	}

	useEffect(() => {
		const seed1 = generateRandomSeed()
		const seed2 = seed1 + 1
		currentSeed.current = seed2
		const data1 = generateFakeData(seed1, "USA", 0)
		const data2 = generateFakeData(seed2, "USA", 0)
		const registers = [...data1, ...data2].map((register, index) => ({
			...register,
			index: index + 1,
		}))
		setSeed(seed1.toString())
		setRegisters(registers)
		setIsLoading(false)
	}, [])

	const [loaderRef, scrollerRef] = useInfiniteScroll({
		hasMore,
		onLoadMore: createMoreRegisters,
	})

	return (
		<>
			<div className="flex justify-center mt-6">
				<Toolbar
					data={registers}
					seed={seed}
					numberOferrors={numberOferrors}
					onSeedChange={handleSeedChange}
					onCountryChange={handleCountryChange}
					onGenerateRandomSeed={handleGenerateRandomSeed}
					onErrorsChange={handleErrorsChange}
				/>
			</div>
			<div className="flex mt-6 justify-center w-screen">
				<Table
					className="max-w-[1070px]"
					classNames={{
						base: "max-h-[550px] overflow-scroll",
						table: "min-h-[400px]",
					}}
					aria-label="Fake Data Generator"
					isStriped
					radius="sm"
					color="default"
					baseRef={scrollerRef}
					bottomContent={
						hasMore && (
							<div className="flex w-full justify-center">
								{/* // @ts-ignore */}
								<div ref={loaderRef}>
									<Spinner color="default" />
								</div>
							</div>
						)
					}
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key}>{column.label}</TableColumn>
						)}
					</TableHeader>
					<TableBody
						isLoading={isLoading}
						items={registers}
						emptyContent={"No rows to display."}
					>
						{(register) => (
							<TableRow key={register.id}>
								{(columnKey) => (
									<TableCell>{getKeyValue(register, columnKey)}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</>
	)
}

export default FakeTable
