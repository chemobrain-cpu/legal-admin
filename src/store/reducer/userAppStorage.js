import { LOG_ADMIN_IN, LOGIN_ADMIN, FETCH_CASE, UPDATE, DELETE, FETCH_ATTORNEY, DELETE_ATTORNEY, UPDATE_ATTORNEY, CREATE_ATTORNEY } from "../action/userAppStorage";




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
    casesList: [],
    attorney: [],
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

                let newCases = state.casesList.filter(data => data._id !== caseId)



                return {
                    ...state,
                    casesList: newCases
                }



            }

        case FETCH_ATTORNEY:
            return {
                ...state,
                attorney: action.payload
            }

        case DELETE_ATTORNEY:
            if (true) {

                let attorneyId = action.payload
                let newAttorney = state.attorney.filter(data => data._id !== attorneyId)



                return {
                    ...state,
                    attorney: newAttorney
                }



            }

        case UPDATE_ATTORNEY:
            if (true) {
                let updatedAttorney = action.payload
                let newAttorneyList = []


                for (let data of state.attorney) {
                    if (data._id.toString() === updatedAttorney._id.toString()) {
                        newAttorneyList.push(updatedAttorney)
                    } else {
                        newAttorneyList.push(data)
                    }
                }

                return {
                    ...state,
                    attorney: newAttorneyList
                }



            }

        case CREATE_ATTORNEY:
            if (true) {
                let createdAttorney = action.payload
                let duplicate
               
                for (let data of state.attorney) {
                    if (data._id.toString() === createdAttorney._id.toString()) {
                        duplicate = true
                    } else {
                        duplicate = false
                    }
                }

                if(!duplicate){
                    return {
                        ...state,
                        attorney: [...state.attorney,createdAttorney]
                    }
                }

                return {
                    ...state
                }
            }



        default:
            return state
    }

}

