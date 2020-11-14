const SET_AUTORS = "SET_AUTORS"
const SELECT_AUTOR = "SELECT_AUTOR"

const initialState = {
    autorsData: [], 
    activeAutor: 1
}

const autorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTORS:
            return {...state, autorsData: [...action.autors]}
        case SELECT_AUTOR:
            return {...state, activeAutor: action.id}
        default:
            return state
    }
}

export const setAutorsAC = (autors) => {
    return {
        type: SET_AUTORS,
        autors: autors
    }
}

export const selectAutorAC = (id) => {
  return {
      type: SELECT_AUTOR,
      id: id
  }
}

export default autorsReducer