import React, { useEffect, useState } from 'react'
import useTranslate from '@lang'
import useListener from '@store/useListener'
import { Row, Col } from 'antd'
import { ComposedChart,Tooltip,Legend,Area,Bar, Line , CartesianGrid, XAxis,YAxis} from 'recharts'
import DataDevice from '@components/DataDevice/DataDeivce'
import DataFirm from '@components/DataFirm/DataFirm'
import Navbar from './components/Navbar/Navbar'
// import { Socket } from 'socket.io-client'

const Home = () => {
	const t = useTranslate()
	const { subscriber } = useListener()
	useEffect(() => {
		console.log(subscriber)
	}, [subscriber])
	return ( 
		<>
			<Navbar  />
		</>
	)
}

export default Home