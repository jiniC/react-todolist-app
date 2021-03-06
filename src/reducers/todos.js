import { FETCH_TODO, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todos';

/*
 리듀서
 = 변화를 일으키는 함수
 = 현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환

 function reducer(state, action) {
 // 상태 업데이트 로직
 return alteredState;
 }
 */

const todos = (state=[], action) => {
    switch (action.type) {
		case FETCH_TODO:
			return action.data; // -> component로 넘어감 (가장 겉에 있는 TodoList 컴포넌트로)
		case CREATE_TODO:
			return state.concat({ ...action.data });
		case UPDATE_TODO:
			return state.map(todo => todo._id === action.data._id ? {...action.data} : todo);
		case DELETE_TODO:
			return state.filter(todo => todo._id !== action.data._id); // action.data: 서버까지 갔다온 항목
		default:
			return state;
	}
};

export default todos