import React, { useEffect } from 'react'
import useTranslate from '@lang'
import useListener from '@store/useListener'
import { Row, Col } from 'antd'

const Home = () => {
	const t = useTranslate()
	const { subscriber } = useListener()

	useEffect(() => {
		console.log(subscriber)
	}, [subscriber])

	return (
		<>
		
			<Row gutter={[10, 10]}>
				<Col span={24}>
				
				</Col>
			</Row>
		</>
	)
}

export default Home