import { LOG_ADMIN_IN, LOGIN_ADMIN, FETCH_CASE, UPDATE, DELETE, FETCH_ATTORNEY, DELETE_ATTORNEY, UPDATE_ATTORNEY, CREATE_ATTORNEY, FETCH_BLOGS, DELETE_BLOG, CREATE_BLOG, UPDATE_BLOG } from "../action/userAppStorage";




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
    blog: [],
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

                if (!duplicate) {
                    return {
                        ...state,
                        attorney: [...state.attorney, createdAttorney]
                    }
                }

                return {
                    ...state
                }
            }

        //blogs reducers
        case FETCH_BLOGS:
            return {
                ...state,
                blog: action.payload
            }

        case DELETE_BLOG:
            if (true) {
                let blogId = action.payload
                let newBlog = state.blog.filter(data => data._id !== blogId)

                return {
                    ...state,
                    blog: newBlog
                }
            }

        case CREATE_BLOG:
            if (true) {
                let createdBlog = action.payload
                let duplicate

                for (let data of state.blog) {
                    if (data._id.toString() === createdBlog._id.toString()) {
                        duplicate = true
                    } else {
                        duplicate = false
                    }
                }

                if (!duplicate) {
                    return {
                        ...state,
                        blog: [...state.blog, createdBlog]
                    }
                }

                return {
                    ...state
                }
            }

        case UPDATE_BLOG:
            if (true) {
                let updatedBlog = action.payload

                let newBlogList = []


                for (let data of state.blog) {
                    if (data._id.toString() === updatedBlog._id.toString()) {
                        newBlogList.push(updatedBlog)
                    } else {
                        newBlogList.push(data)
                    }
                }

                return {
                    ...state,
                    blog: newBlogList
                }



            }

        default:
            return state
    }

}





