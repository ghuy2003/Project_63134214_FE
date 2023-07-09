import {ComposedChart,Area,Bar, LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line } from 'recharts'
import React, { useEffect, useState } from 'react'
import useSocket from '@socket'
import useDevices from '@api/useDevices'
const DataDevice = () => {
	const socket = useSocket()
	const [data,setData] = useState([])
	useEffect(() => {
		socket.on('get_device', (dataDevice) => {
			console.log(dataDevice)
			setData(dataDevice)
		})
	}, [])

	console.log(data)
	return (
		<>
			<ComposedChart width={730} height={250} data={data}>
				<XAxis dataKey='ID' />
				<YAxis />
				<Tooltip />
				<Legend />
				<CartesianGrid stroke='#f5f5f5' />
				<Area type='monotone' dataKey='AppID' fill='#8884d8' stroke='#8884d8' />
				<Bar dataKey='pv' barSize={20} fill='#413ea0' />
				<Line type='monotone' dataKey='StatusID' stroke='#ff7300' />
			</ComposedChart>
		</>
	)
}

export default DataDevice
                              