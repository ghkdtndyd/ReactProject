import React from "react";
import styled from "styled-components";
import Content from "./Content";

class App extends React.Component {
    state = {
        query: ""
    };
  render() {
    return( 
    <Container query={this.state.query}>
        <Input placeholder="테마를 입력하세요" onKeyPress={this.handleInputKeyPress}/>
        <Content />
    </Container>
    );   
  }
  
  handleInputKeyPress = event => {
    if (event.key === "Enter") {
      this.setState({
          query: event.target.value
      });
      event.target.value = "";
      }
   };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ), url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;
//작은 따옴표( ' )가 아니라 키보드상에서 숫자 1 왼쪽에 있는 ` 입니다.
//백틱 사이에 코드를 작성하는 문법을 ES6의 Template Literal이라고 합니다.



export default App;