import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Modal from '../components/Modal';

function Form() {
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [visit, setVisit] = useState(null);
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [modal, setModal] = useState('');

	function submit() {
		if (firstName === '' || secondName === '' || !visit) {
			setError('Барлығын дұрыстап толтырыңыз');
			setModal(true);
		} else {
			setError('');
			setMessage('Форма сәтті жіберілді!');
			setModal(true);
			var params = { first_name: firstName, second_name: secondName, visit: visit.text }
			emailjs.send('service_ellnze8', 'template_vg9f4xb', params, 'yVKttaYJiGixIKUis')
			.then(function(res) {
				console.log('success', res.status);
			})
		}
	}

	function close() {
		setModal(false);
		setError('');
		setMessage('');
		setFirstName('');
		setSecondName('');
		setVisit(null);
	}

	return (
		<div className='home-content form'>
			<h2 className='home-content__title'>Анкета</h2>
			<div className='form-body'>
				<div className='form-body__background'></div>
				<p className='form-body__text'>Тіркелуші қонақтың жасы 16-дан жоғары болуы тиіс</p>
				<div className='form-body__input'>
					<p className='form-body__input-label'>Аты-жөніңіз</p>
					<Input name={ 'first_fullname' } value={ firstName } action={ (e) => setFirstName(e.target.value) } error={ error } />
				</div>
				<div className='form-body__input'>
					<p className='form-body__input-label'>Жұбайыңыздың аты-жөні (егер болса)</p>
					<Input name={ 'second_fullname' } value={ secondName } action={ (e) => setSecondName(e.target.value) } error={ error } />
				</div>
				<div className='form-body__input'>
					<p className='form-body__input-label'>Тойға келесіз бе?</p>
					<Select error={ error} options={ [{ id: 'yes', text: 'Иә, әрине' }, { id: 'no', text: 'Өкінішке орай келе алмаймын' }] } value={ visit } action={ setVisit } />
				</div>
				<Button text={ 'Жіберу' } action={ () => submit() } />
				<p className='form-body__text'>Қонақ санын нақты есептей алуымыз үшін анкетаны бір-ақ рет толтырыңызды сұраймыз</p>
			</div>
			{ modal ? <Modal text={ message } error_text={ error } closeModal={ () => close() } /> : null }
		</div>
	);
}

export default Form;
