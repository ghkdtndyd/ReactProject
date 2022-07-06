import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

class Todo extends React.Component {
  state = {
    todoList: []
  };
  render() {
    return (
      <Container>
        <Input placeholder="오늘 할 일" onKeyPress={this.handleInputKeyPress}></Input>
        <TodoList todoList={this.state.todoList} handleClickRemove={this.handleClickRemove}></TodoList>
      </Container>
    );
  }

  componentDidMount() {
    this.setState({
      todoList: JSON.parse(localStorage.getItem("todoList")) || []
    });
  }

  handleInputKeyPress = event => {
    const {
      target: { value }
    } = event;
    if (event.key === "Enter") {
      this.setState(state => ({ todoList: [...state.todoList, value] }),
      ()=> localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
      //localStorage에는 문자열만 저장할 수 있기 때문에 
      //데이터를 저장할 때에는 JSON.stringify(this.state.todoList)의 형식으로,
      //불러올 때에는  JSON.parse(this.state.todoList) 형식으로 사용
      ); 
      //... 구문은 spread operator
      //state.todoList의 모든 요소를 복제한 후 맨 뒤에 value 값을 추가한 배열을 반환
      //state값의 변경에 기존의 state값이 사용된다면 화살표함수로 코딩하는것이 안전
      event.target.value = "";
    }
  };
  
  handleClickRemove = index => {
    if (window.confirm("목록에서 지우시겠습니까?")) {
    this.setState(
      state => ({
        todoList: [
          ...state.todoList.slice(0, index),
          ...state.todoList.slice(index + 1)
        ]
      }),
      () =>
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
    );
  };
 };
};


const Container = styled.div`
  margin-top: 44px;
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  height: 33px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
`;

export default Todo;