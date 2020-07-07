/* eslint-disable no-eval */
import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import X from '../../components/X';
import O from '../../components/O';

import {
  Container,
  Area,
  Vertical,
  Horizontal,
  InfoArea,
  InfoTurn,
  InfoTurnText,
  InfoWinner,
  InfoWinnerText,
  ButtonReset,
  ButtonResetText,
} from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
      warning: '',
      turn: 'x',
      a1: '',
      a2: '',
      a3: '',
      b1: '',
      b2: '',
      b3: '',
      c1: '',
      c2: '',
      c3: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.verification = this.verification.bind(this);
  }

  handleClick(p) {
    let state = this.state;

    if (eval('state.' + p) == '' && state.status == 1) {
      eval('state.' + p + ' = state.turn');

      if (state.turn == 'x') {
        state.turn = 'o';
      } else {
        state.turn = 'x';
      }
    }

    this.setState(state);

    this.verification('x');
    this.verification('o');
  }

  verification(i) {
    let s = this.state;

    if (
      (s.a1 == i && s.b1 == i && s.c1 == i) ||
      (s.a2 == i && s.b2 == i && s.c2 == i) ||
      (s.a3 == i && s.b3 == i && s.c3 == i) ||
      (s.a1 == i && s.a2 == i && s.a3 == i) ||
      (s.b1 == i && s.b2 == i && s.b3 == i) ||
      (s.c1 == i && s.c2 == i && s.c3 == i) ||
      (s.a1 == i && s.b2 == i && s.c3 == i) ||
      (s.a3 == i && s.b2 == i && s.c1 == i)
    ) {
      s.warning = i + ' ganhou!';
      s.status = 0;
    }

    if (s.status == 1) {
      if (
        s.a1 != '' &&
        s.a2 != '' &&
        s.a3 != '' &&
        s.b1 != '' &&
        s.b2 != '' &&
        s.b3 != '' &&
        s.c1 != '' &&
        s.c2 != '' &&
        s.c3 != ''
      ) {
        s.warning = 'EMPATE!';
        s.status = 0;
      }
    }

    this.setState(s);
  }

  reset() {
    let state = this.state;

    state.status = 1;
    state.warning = '';
    state.turn = 'x';
    state.a1 = '';
    state.a2 = '';
    state.a3 = '';
    state.b1 = '';
    state.b2 = '';
    state.b3 = '';
    state.c1 = '';
    state.c2 = '';
    state.c3 = '';

    this.setState(state);
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#633ed5" />
        <Area>
          <Vertical style={{borderLeftWidth: 0}}>
            <Horizontal
              onPress={() => this.handleClick('a1')}
              underlayColor="transparent"
              style={{borderTopWidth: 0}}
              disabled={this.state.a1 === '' ? false : true}>
              <>
                {this.state.a1 === 'x' && <X />}
                {this.state.a1 === 'o' && <O />}
              </>
            </Horizontal>
            <Horizontal
              underlayColor="transparent"
              onPress={() => this.handleClick('a2')}
              disabled={this.state.a2 === '' ? false : true}>
              <>
                {this.state.a2 === 'x' && <X />}
                {this.state.a2 === 'o' && <O />}
              </>
            </Horizontal>
            <Horizontal
              underlayColor="transparent"
              onPress={() => this.handleClick('a3')}
              disabled={this.state.a3 === '' ? false : true}>
              <>
                {this.state.a3 === 'x' && <X />}
                {this.state.a3 === 'o' && <O />}
              </>
            </Horizontal>
          </Vertical>
          <Vertical>
            <Horizontal
              onPress={() => this.handleClick('b1')}
              underlayColor="transparent"
              style={{borderTopWidth: 0}}
              disabled={this.state.b1 === '' ? false : true}>
              <>
                {this.state.b1 === 'x' && <X />}
                {this.state.b1 === 'o' && <O />}
              </>
            </Horizontal>
            <Horizontal
              underlayColor="transparent"
              onPress={() => this.handleClick('b2')}
              disabled={this.state.b2 === '' ? false : true}>
              <>
                {this.state.b2 === 'x' && <X />}
                {this.state.b2 === 'o' && <O />}
              </>
            </Horizontal>
            <Horizontal
              underlayColor="transparent"
              onPress={() => this.handleClick('b3')}
              disabled={this.state.b3 === '' ? false : true}>
              <>
                {this.state.b3 === 'x' && <X />}
                {this.state.b3 === 'o' && <O />}
              </>
            </Horizontal>
          </Vertical>
          <Vertical>
            <Horizontal
              onPress={() => this.handleClick('c1')}
              underlayColor="transparent"
              style={{borderTopWidth: 0}}
              disabled={this.state.c1 === '' ? false : true}>
              <>
                {this.state.c1 === 'x' && <X />}
                {this.state.c1 === 'o' && <O />}
              </>
            </Horizontal>
            <Horizontal
              underlayColor="transparent"
              onPress={() => this.handleClick('c2')}
              disabled={this.state.c2 === '' ? false : true}>
              <>
                {this.state.c2 === 'x' && <X />}
                {this.state.c2 === 'o' && <O />}
              </>
            </Horizontal>
            <Horizontal
              underlayColor="transparent"
              onPress={() => this.handleClick('c3')}
              disabled={this.state.c3 === '' ? false : true}>
              <>
                {this.state.c3 === 'x' && <X />}
                {this.state.c3 === 'o' && <O />}
              </>
            </Horizontal>
          </Vertical>
        </Area>

        <InfoArea>
          <InfoTurn>
            <InfoTurnText>Vez de:</InfoTurnText>
            {this.state.turn === 'x' && <X />}
            {this.state.turn === 'o' && <O />}
          </InfoTurn>

          <InfoWinner>
            <InfoWinnerText>{this.state.warning}</InfoWinnerText>
          </InfoWinner>
        </InfoArea>

        <ButtonReset onPress={() => this.reset()} underlayColor="#c2a5f2">
          <ButtonResetText>Reiniciar</ButtonResetText>
        </ButtonReset>
      </Container>
    );
  }
}
