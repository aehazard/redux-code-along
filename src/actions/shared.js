import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveDataAction (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  }
}

export function handleInitialDataFetch () {
  return (dispatch) => {
    Promise.all([
      API.fetchGoals(),
      API.fetchTodos()
    ]).then(([goals, todos]) => {
      dispatch(receiveDataAction(todos, goals))
    }).catch(()=>{
      alert('An error occured fetching data. Refresh to try again.')
    })
  }
}
