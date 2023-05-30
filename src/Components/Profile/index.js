import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  RulesImg,
  Popping,
  BgContainer,
  Header,
  HeaderContent,
  ScoreCard,
  ImgContainer,
  TextContainer,
  OpponentContainer,
  CustomerContainer,
  ButtonsContainer,
  NormalButton,
  CustomButton1,
  RulesContainer,
  CloseButton,
  Img,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Profile extends Component {
  state = {condition: true, yourUrl: '', opponentUrl: '', score: 0, text: ''}

  change2 = () => {
    this.setState({yourUrl: '', opponentUrl: '', text: ''})
    this.setState(prevState => ({condition: !prevState.condition}))
  }

  changeUrl = event => {
    const userId = event.target.src
    const userObject = choicesList.find(each => {
      if (each.imageUrl === userId) {
        return true
      }
      return false
    })
    const number = Math.floor(Math.random() * choicesList.length)
    console.log(number)
    const opponentUrl = choicesList[number].imageUrl

    if (userObject.imageUrl === opponentUrl) {
      this.setState(prevState => ({
        score: prevState.score,
        condition: !prevState.condition,
      }))
      this.setState({
        yourUrl: userObject.imageUrl,
        text: 'IT IS DRAW',
        opponentUrl: choicesList[number].imageUrl,
      })
    } else if (userObject.id === 'ROCK') {
      if (choicesList[number].id === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          condition: !prevState.condition,
        }))
        this.setState({
          yourUrl: userObject.imageUrl,
          text: 'SUCCESS',
          opponentUrl: choicesList[number].imageUrl,
        })
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          condition: !prevState.condition,
        }))
        this.setState({
          yourUrl: userObject.imageUrl,
          opponentUrl: choicesList[number].imageUrl,
        })
      }
    } else if (userObject.id === 'PAPER') {
      if (choicesList[number].id === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          condition: !prevState.condition,
        }))
        this.setState({
          yourUrl: userObject.imageUrl,
          text: 'SUCCESS',
          opponentUrl: choicesList[number].imageUrl,
        })
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          condition: !prevState.condition,
        }))
        this.setState({
          yourUrl: userObject.imageUrl,
          opponentUrl: choicesList[number].imageUrl,
        })
      }
    } else if (userObject.id === 'SCISSORS') {
      if (choicesList[number].id === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          condition: !prevState.condition,
        }))
        this.setState({
          yourUrl: userObject.imageUrl,
          text: 'SUCCESS',
          opponentUrl: choicesList[number].imageUrl,
        })
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          condition: !prevState.condition,
        }))
        this.setState({
          yourUrl: userObject.imageUrl,
          opponentUrl: choicesList[number].imageUrl,
        })
      }
    }
  }

  getResult = () => {
    const {text} = this.state

    if (text === 'IT IS DRAW') {
      return (
        <TextContainer>
          <p>{text}</p>
          <NormalButton onClick={this.change2}>PLAY AGAIN</NormalButton>
        </TextContainer>
      )
    }
    if (text === 'SUCCESS') {
      return (
        <TextContainer>
          <p>YOU WON</p>
          <NormalButton onClick={this.change2}>PLAY AGAIN</NormalButton>
        </TextContainer>
      )
    }
    return (
      <TextContainer>
        <p>YOU LOOSE</p>
        <NormalButton onClick={this.change2}>PLAY AGAIN</NormalButton>
      </TextContainer>
    )
  }

  render() {
    const {condition, opponentUrl, yourUrl, score} = this.state

    return (
      <BgContainer>
        <Header>
          <HeaderContent>
            <li>ROCK</li>
            <li>PAPER</li>
            <li>SCISSORS</li>
          </HeaderContent>
          <ScoreCard>
            <h1>score</h1>
            <h1>{score}</h1>
          </ScoreCard>
        </Header>
        {condition ? (
          <ImgContainer>
            <CustomButton1
              onClick={this.changeUrl}
              data-testid="rockButton"
              value={choicesList[0].id}
            >
              <Img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png" />
            </CustomButton1>

            <CustomButton1
              onClick={this.changeUrl}
              data-testid="scissorsButton"
              value={choicesList[1].id}
            >
              <Img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png" />
            </CustomButton1>

            <CustomButton1
              onClick={this.changeUrl}
              data-testid="paperButton"
              value={choicesList[2].id}
            >
              <Img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png" />
            </CustomButton1>
          </ImgContainer>
        ) : (
          <>
            <ImgContainer>
              <CustomerContainer>
                <h1>YOU</h1>
                <CustomButton1>
                  <Img src={yourUrl} alt="your choice" />
                </CustomButton1>
              </CustomerContainer>
              <OpponentContainer>
                <h1>OPPONENT</h1>
                <CustomButton1>
                  <Img src={opponentUrl} alt="opponent choice" />
                </CustomButton1>
              </OpponentContainer>
            </ImgContainer>
            <ButtonsContainer>{this.getResult()}</ButtonsContainer>
          </>
        )}
        <Popping>
          <Popup
            modal
            trigger={
              <NormalButton type="button" className="trigger-button">
                Trigger
              </NormalButton>
            }
          >
            {close => (
              <>
                <RulesContainer>
                  <CloseButton
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine size="30" />
                  </CloseButton>
                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesContainer>
              </>
            )}
          </Popup>
        </Popping>
      </BgContainer>
    )
  }
}

export default Profile
