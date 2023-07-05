import React, { useState } from 'react'
import useTranslate from '@lang'
import useAuth from '@api/useAuth'
import { useNavigate } from 'react-router-dom'
import useUser from '@store/useUser'
import { Row, Col, Input, Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import '@styles/scss/custom-input.scss'

const Login = () => {
	const t = useTranslate()
	const { changeData } = useUser()
	const { login } = useAuth()
	const navigate = useNavigate()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleChangeUsername = e => setUsername(e.target.value)

	const handleChangePassword = e => setPassword(e.target.value)

	const handleLogin = async () => {
		const { success, data } = await login({ username, password })
		if(success) {
			const { token, username } = data
			changeData({ token, username })
			navigate('/')
		}
	}

	return (
		<div
			style={{
				maxHeight: '100vh',
				minHeight: '100vh',
				backgroundColor: '#323437',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<div
				style={{
					padding: 10,
					maxWidth: 300
				}}
			>
				<Row gutter={[10, 20]}>
					<Col span={24}>
						<h2
							style={{
								color: '#d1d0c5',	
								textAlign: 'center',
								fontSize: 30,
							}}
						>
							Dashboard
						</h2>
					</Col>
					<Col span={24}>
						<Input
							className='antd-custom-input'
							size='large'
							prefix={<FontAwesomeIcon icon={faUser} color='#d1d0c5' />}
							placeholder={t('username').toUpperFirst()}
							value={username}
							onChange={handleChangeUsername}
							required
						/>
					</Col>
					<Col span={24}>
						<Input.Password
							className='antd-custom-input'
							size='large'
							prefix={<FontAwesomeIcon icon={faLock} color='#d1d0c5' />}
							placeholder={t('password').toUpperFirst()}
							value={password}
							onChange={handleChangePassword}
							required
						/>
					</Col>
					<Col span={24}>
						<Button
							style={{
								color: '#d1d0c5',
								fontWeight: 500,
								backgroundColor: '#646669',
								border: 'none'
							}}
							block
							size='large'
							onClick={handleLogin}
						>
							{t('login').toCapitalize()}
						</Button>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Login