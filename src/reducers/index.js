const initialState = {
    articlesArr: [],
    selectedArticleId: null,
    isLoading: false,
    isError: false,
    formHeaders: ["Title","Description","Author"]
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOADING_STATE":
        return Object.assign({}, state, {
          isLoading: true,
          isError: false
        });
      case "STOP_LOADING_STATE":
        return Object.assign({}, state, {
          isLoading: false,
          isError: false
        });
      case "FETCHED_ARTICLES":
        return Object.assign({}, state, {
          articlesArr: action.data,
          selectedArticleId: null,
          isLoading: false,
          isError: false
        });
      case "RECEIVE_ERROR":
        return Object.assign({}, state, {
          isError: true,
          isLoading: false
        });
      
      case "SELECTED_ARTICLE":
          return Object.assign({}, state, {
            isError: false,
            isLoading: false,
            selectedArticle: action.data
          });
      default:
        return state;
    }
  };
  
  export default asyncReducer;