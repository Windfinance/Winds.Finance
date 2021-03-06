import styles from './GetInTouch.module.scss';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';

function GetInTouch() {
	const router = useRouter();

	const onSubmit = values => {
		console.log(values);
	};

	return (
		<div id='Contact' className={styles.main}>
			<div className={styles.container}>
				<Fade left>
					<div className={styles['container__box-left']}>
						<h2>
							Get in Touch <span>!</span>
						</h2>

						<div>
							<span>
								<img src={require('assets/images/email.svg')} alt='email' />
							</span>
							<p>contact@winds.finance</p>
						</div>

						<div
							onClick={() =>
								router.push(
									'https://windfinancetoken.medium.com/winds-finance-the-new-era-of-decentralized-applications-has-begun-3a83cee9d329'
								)
							}
						>
							<span>
								<img src={require('assets/images/medium.svg')} alt='medium' />
							</span>{' '}
							<p>Medium</p>
						</div>

						<div onClick={() => router.push('https://twitter.com/WindsFinance')}>
							<span>
								{' '}
								<img src={require('assets/images/twitter.svg')} alt='twitter' />
							</span>{' '}
							<p>Twitter</p>
						</div>

						<div onClick={() => router.push('https://t.me/WindsFinance')}>
							<span>
								<img src={require('assets/images/telegram.svg')} alt='telegram' />
							</span>{' '}
							<p>Newsletter</p>
						</div>
					</div>
				</Fade>
				<Fade right>
					<div className={styles['container__box-right']}>
						<Form requiredMark={false} layout='vertical' onFinish={onSubmit} className={styles['container__box-right--form']}>
							<Form.Item name={'name'} label={'Full Name'} className={styles['container__box-right--input']}>
								<Input placeholder={'Enter your Name'} />
							</Form.Item>

							<Form.Item
								name={'email'}
								label={'Email'}
								className={styles['container__box-right--input']}
								rules={[
									{
										type: 'email',
										message: 'Email is not valid'
									},
									{
										required: true,
										message: 'Email is required'
									}
								]}
							>
								<Input placeholder={'Enter your Email Address '} />
							</Form.Item>
							<Form.Item
								name='description'
								label={'Description'}
								className={styles['form-item']}
								rules={[{ required: true, message: 'This field is required' }]}
							>
								<TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
							</Form.Item>

							<Form.Item className={styles['container__box-right--button']}>
								<Button type='primary' htmlType='submit'>
									Send
								</Button>
							</Form.Item>
						</Form>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default GetInTouch;
