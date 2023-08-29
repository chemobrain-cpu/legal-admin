import { LOG_ADMIN_IN, LOGIN_ADMIN, LOGOUT, GET_THEME, FETCH_CASE, UPDATE, updateCase, DELETE } from "../action/userAppStorage";


const initialState = {
    adminToken: "",
    //expiresIn: "",
    admin: null,
    color: {
        background: '',
        importantText: '',
        normalText: '',
        fadeColor: '',
        blue: '',
        fadeButtonColor: '',
    },
    casesList: []
}



export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_ADMIN_IN:
            return {
                ...state,
                admin: action.payload.admin,
                adminToken: action.payload.token
            }

        case LOGIN_ADMIN:
            return {
                ...state,
                admin: action.payload.admin,
                adminToken: action.payload.token
            }


        case FETCH_CASE:
            return {
                ...state,
                casesList: action.payload
            }

        case UPDATE:
            if (true) {
                let updatedCase = action.payload

                let newCaseList = []
                console.log(updatedCase)

                for (let data of state.casesList) {
                    if (data._id.toString() === updatedCase._id.toString()) {
                        newCaseList.push(updatedCase)
                    } else {
                        newCaseList.push(data)
                    }
                }

                return {
                    ...state,
                    casesList: newCaseList
                }



            }


        case DELETE:
            if (true) {
                let caseId = action.payload

                let newCases = state.casesList.filter(data=>data._id !== caseId)



                return {
                    ...state,
                    casesList: newCases
                }



            }





        default:
            return state
    }

}

