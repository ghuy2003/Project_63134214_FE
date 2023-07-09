import React, { useEffect, useState } from 'react'
import useTranslate from '@lang'
import useListener from '@store/useListener'
import { Row, Col } from 'antd'
import { ComposedChart,Tooltip,Legend,Area,Bar, Line , CartesianGrid, XAxis,YAxis} from 'recharts'
import DataDevice from '@components/DataDevice/DataDeivce'
import DataFirm from '@components/DataFirm/DataFirm'
// import { Socket } from 'socket.io-client'

const Home = () => {
	const t = useTranslate()
	const { subscriber } = useListener()
	useEffect(() => {
		console.log(subscriber)
	}, [subscriber])

	// const socket = useSocket()
	// const [data,setData] = useState([])
	return ( 
		<>
			<Row gutter={[20,20]}>
				<DataDevice  />
			</Row>
			<Row gutter={[20,20]}>
				<DataFirm />
			</Row>
		</>
	)
}

export default Home