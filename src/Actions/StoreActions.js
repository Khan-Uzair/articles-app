export const selected_article_store_dispatch = post => {
    return {
      type: "SELECTED_ARTICLE",
      data: post
    };
  };

export const selected_article = articleId => {
    return function(dispatch, getState) {
        dispatch(selected_article_store_dispatch(articleId));
    };
  }