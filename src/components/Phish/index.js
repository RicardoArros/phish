import React from 'react';
import PropTypes from 'prop-types';

import logo from './peixe-green-bg-2.svg';
import logo2 from './peixe-green-bg.svg';
import waveSvg from './wave.svg';

import styles from './index.module.scss';
import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Confetti from 'react-confetti';


const MAX_FISHES = 6;


const jump = keyframes`
  0%{
    transform: rotateZ(10deg);
  }
  15% {
    transform: rotateZ(45deg)
  }
  22% {
    transform: translate(-35vw, -37vh) rotateZ(15deg);
  }
  36% {
    transform: translate(-36vw, -40vh) rotateZ(360deg);
  }
  50% {
    transform: translate(-80vw, 15vh) rotateZ(240deg);
  }
  100% {
    transform: translate(-110vw, 20vh) rotateZ(120deg);
  }
`;

const wave = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`;

const swell = keyframes`
  0%, 100% {
    -webkit-transform: translate3d(0,-25px,0);
  }
  50% {
    -webkit-transform: translate3d(0,5px,0);
  }
`;

const bubbles = keyframes`
  0% {
    bottom: 0;
    margin-left: 90px;
    margin-right: 0;
  }

  20% {
    bottom: 20%;
    margin-left: 0;
    margin-right: 90px;
  }

  40% {
    bottom: 40%;
    margin-left: 90px;
    margin-right: 0;
  }

  60% {
    bottom: 60%;
    margin-left: 0px;
    margin-right: 90px;
  }

  80% {
    bottom: 80%;
    margin-left: 90px;
    margin-right: 0;
  }

  100% {
    bottom: 100%;
    margin-left: 0;
    margin-right: 90px;
  }
`;


const Fish = styled.div`
  position: fixed;
  bottom: -60px;
  right: 8%;
  width: 120px;
  padding: 30px;
  animation: ${jump} ${props => props.time}s cubic-bezier( 0.36, 0.45, 0.63, 0.53) ${props => props.iterationCount} ${props => props.runAnimation};
  animation-delay: ${props => props.delay}s;
  z-index: 1;
`;

const Ocean = styled.div`
  height: .1%;
  width: 100%;
  position: fixed;
  bottom: -20px;
  left: 0;
  background: #015871;
  z-index: 2;
`;

const Wave1 = styled.div`
  background: url(${waveSvg}) repeat-x;
  position: absolute;
  top: -156px;
  width: 6400px;
  height: 156px;

  -webkit-animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  -moz-animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  -o-animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;

  -webkit-animation-name: ${wave};
  -webkit-animation-duration: 7s;
  -webkit-animation-timing-function: cubic-bezier( 0.36, 0.45, 0.63, 0.53);
  -webkit-animation-iteration-count: infinite;

  -webkit-transform: translate3d(0, 0, 0);
`;

const Wave2 = styled.div`
  background: url(${waveSvg}) repeat-x;
  position: absolute;
  top: -134px;
  width: 6400px;
  height: 156px;

  -webkit-animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, ${swell} 7s ease -1.25s infinite;
  -moz-animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, ${swell} 7s ease -1.25s infinite;
  -o-animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, ${swell} 7s ease -1.25s infinite;
  animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, ${swell} 7s ease -1.25s infinite;

  -webkit-animation-name: ${wave};
  -webkit-animation-duration: 7s;
  -webkit-animation-timing-function: cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s;
  -webkit-animation-iteration-count: infinite; */

  -webkit-animation-name: ${swell};
  -webkit-animation-duration: 7s;
  -webkit-animation-timing-function: ease -1.25s;
  -webkit-animation-iteration-count: infinite;

  opacity: 1;
`;

const Bubbles = styled.div`
  span {
    position: fixed;
    bottom: -50px;
    height: 2.9em;
    width: 2.9em;
    background-color: #53a318;
    padding: 3px;

    color: #fff;
    font-size: .8em;
    border: 1px solid #fff;
    border-radius: 50%;

    display: grid;
    place-items: center;

    -webkit-animation: ${bubbles} 8s linear infinite;
    -moz-animation: ${bubbles} 8s linear infinite;
    -o-animation: ${bubbles} 8s linear infinite;
    animation: ${bubbles} 8s linear infinite;

    -webkit-animation-name: ${bubbles};
    -webkit-animation-duration: 8s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;

    &:nth-child(1) {
      right: 0;
      animation-delay: .6s;
    }

    &:nth-child(2) {
      right: 10%;
      animation-delay: 3s;
    }

    &:nth-child(3) {
      right: 20%;
      animation-delay: 2s;
    }

    &:nth-child(4) {
      right: 30%;
      animation-delay: 5s;
    }
  }

`;

const ModalFish = ({ catchFishCount, bodyMessages, btnMessages, onClose, onClickOkButton }) => (

  <div className={styles.modal}>

    <Confetti style={{ position: 'fixed' }} gravity={0.2} numberOfPieces={400} width={1376} />

    <div className={`${styles.modal__backdrop}`}>

      <div className={styles.modal__container}>

        <div className={styles.modal__header}>

          <div className={catchFishCount === MAX_FISHES ? styles.modal__titleWin : styles.modal__title}>
            {catchFishCount === MAX_FISHES ? '¡Ganaste!' : '¡Gana un 10% de descuento pescando en Peixe!'}
          </div>

          <div className={styles.closeModalFish}>
            <a onClick={onClose}><FontAwesomeIcon icon={faTimes} /></a>
          </div>
        </div>

        <div className={styles.modal__body}>

          <div className={styles.modal__messages}>{bodyMessages[catchFishCount]}</div>

          {catchFishCount === MAX_FISHES &&
            <div className={styles.modal__disclaimerParagraph}>
              Descuento por tiempo limitado, no demores en usarlo. Un uso por cliente.
          </div>
          }
        </div>

        <div className={styles.modal__footer}>
          <button className={styles.modal__footerBtn} onClick={onClickOkButton}>{btnMessages[catchFishCount]}</button>
        </div>

      </div>
    </div>
  </div>
)

class JumpingFish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFish: true,
      showModalFish: false,
      showConfetti: false,
      catchFishCount: 0,
      runAnimation: props.runAnimation,
      gameClosed: localStorage.getItem('__game_closed') === "true" || false,
    };
  }

  componentWillMount() {
    localStorage.getItem('catchFishCount') && this.setState({
      catchFishCount: parseInt(JSON.parse(localStorage.getItem('catchFishCount')), 10)
    })
  }

  componentWillUpdate() {
    const { catchFishCount } = this.state;
    localStorage.setItem('catchFishCount', catchFishCount);

    if (catchFishCount === MAX_FISHES) {
      localStorage.setItem('__sp_pc', 'LOCURAENPEIXE');
    }
  }

  handleClickFish = () => {
    this.setState((previousState) => {
      const catchedFishes = previousState.catchFishCount + 1
      this.props.onCatch && this.props.onCatch(catchedFishes);
      if (catchedFishes === MAX_FISHES) {
        this.props.onComplete && this.props.onComplete(previousState.catchFishCount + 1);
      }

      return {
        showConfetti: true,
        showModalFish: true,
        showFish: false,
        catchFishCount: catchedFishes
      }
    });
  }

  closeModalFish = () => {
    this.setState({
      showModalFish: false,
      showFish: true,
      showConfetti: false
    });
    this.props.onClose()
  }

  closeGame = () => {
    this.setState({ gameClosed: true });
    localStorage.setItem('__game_closed', 'true');
  }

  render() {

    const {
      onClose,
      time,
      delay
    } = this.props;

    const isShowFish = this.state.catchFishCount <= 5 && this.state.runAnimation === 'running';

    const bodyMessages = {
      6: 'Ahora elige lo que quieras, el descuento lo aplicaremos al finalizar tu compra.',
      5: '"Cybermonday de locura en _____". Sólo te falta 1 pez.',
      4: '"Cybermonday de locura __ _____". Te faltan 2 peces.',
      3: '"Cybermonday de ______ __ _____". Te faltan 3 peces.',
      2: '"Cybermonday __ ______ __ _____". Te faltan 4 peces.',
      1: 'Para ganar, solo tienes que hacer clic cada vez que aparezca el pez de Peixe. ¿Quieres jugar?',
    }

    const btnMessages = {
      6: '¡Estoy listo para comprar!',
      5: '¡Vamos! Sólo te falta 1 pez.',
      4: '¡Vamos! Te faltan 2 peces.',
      3: '¡Vamos! Te faltan 3 peces.',
      2: '¡Vamos! Te faltan 4 peces.',
      1: '!Sí, quiero participar!',
    }
    const showBubbles = this.state.catchFishCount === 0;

    return (
      <React.Fragment>
        {!this.state.gameClosed &&
          <React.Fragment>
            {
              this.state.catchFishCount > 0 && this.state.catchFishCount < 6 &&
              <div className={styles.fishCount}>
                <img className={this.state.catchFishCount > 1 ? styles.fish__img : styles.fish__img2} src={logo2} alt="" />
                <img className={this.state.catchFishCount > 2 ? styles.fish__img : styles.fish__img2} src={logo2} alt="" />
                <img className={this.state.catchFishCount > 3 ? styles.fish__img : styles.fish__img2} src={logo2} alt="" />
                <img className={this.state.catchFishCount > 4 ? styles.fish__img : styles.fish__img2} src={logo2} alt="" />
                <img className={this.state.catchFishCount > 5 ? styles.fish__img : styles.fish__img2} src={logo2} alt="" />
              </div>
            }
            {isShowFish &&
              <div className={styles.oceanCtn}>
                <Ocean>
                  <Wave1 />
                  <Wave2 />
                </Ocean>
              </div>
            }

            {showBubbles &&
              <Bubbles>
                <span>haz</span>
                <span>en el</span>
                <span>click</span>
                <span>pez</span>
              </Bubbles>
            }

            <div className={styles.jumpingFishCtn}>
              {isShowFish && this.state.showFish &&
                <Fish
                  onClick={this.handleClickFish}
                  iterationCount={this.props.iterationCount}
                  runAnimation='running'
                  time={this.props.time}
                  delay={(this.state.catchFishCount === 0 ? 4 : this.props.delay)}
                >
                  <img className={styles.fish__img} src={logo} alt="" />
                </Fish>
              }

              {this.state.showModalFish &&
                <ModalFish
                  catchFishCount={this.state.catchFishCount}
                  onClose={this.closeGame}
                  onClickOkButton={this.closeModalFish}
                  bodyMessages={bodyMessages}
                  btnMessages={btnMessages}
                />
              }
            </div>
          </ React.Fragment>
        }
      </React.Fragment>
    )
  }
}

JumpingFish.defaultProps = {
  iterationCount: 12,
  runAnimation: 'running',
  onClose: () => { },
  onCatch: () => { },
  onComplete: () => { },
  time: 21,
  delay: 13
};

JumpingFish.propTypes = {
  iterationCount: PropTypes.number,
  runAnimation: PropTypes.string,
  cancelButtonText: PropTypes.string,
  time: PropTypes.number,
  onCatch: PropTypes.func,
  onComplete: PropTypes.func,
  delay: PropTypes.number,
};

export default JumpingFish;