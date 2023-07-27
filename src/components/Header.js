import React, { useState } from 'react';
import { Howl } from 'howler';
import music from '../assets/music.mp3';
import '../assets/styles/header.scss';

function Header({ isOpened, openMenu }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [audio, setAudio] = useState(null);
	const [audioPosition, setAudioPosition] = useState(0);

	function toggleMenu() {
		openMenu();
  };
	function playAudio() {
		setIsPlaying(true);
		const sound = new Howl({
			src: [music],
			onload: () => {
				sound.seek(audioPosition);
				sound.play();
			},
		});
		setAudio(sound);
  };
  function stopAudio() {
		setIsPlaying(false);
    if (audio) {
      setAudioPosition(audio.seek());
      audio.stop();
    }
  };
	window.onload = playAudio;

	return (
		<div className='header'>
			<div className='header-background'></div>
			{ isPlaying ?
				<div className='header-stop' onClick={ stopAudio }>
					<span className='header-stop__icon'></span>
				</div>
					:
				<div className='header-player' onClick={ playAudio }>
					<span className='header-player__icon'></span>
				</div>
			}
			<div className='header-menu' onClick={ toggleMenu }>
				<span className={ `header-menu__icon ${ isOpened ? 'active' : '' }` }></span>
			</div>
		</div>
	);
}

export default Header;
