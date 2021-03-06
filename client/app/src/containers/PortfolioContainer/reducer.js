import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  projects: [],
  currentPage: 1,
  perPage: 9,
  searchTerm: null,
  tags: [],
  isFiltering: false,
  modal: {
    isShowing: false,
  },
  filter: {
    categories: {
      selected: [],
    },
  },
};

const portfolioReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.PORTFOLIO_CLEAR_SEARCH_TERM:
        return {
          ...state,
          isFiltering: false,
          searchTerm: null,
        };
      case types.PORTFOLIO_SET_SELECTED_CATEGORIES:
        return {
          ...state,
          filter: {
            ...state.filter,
            categories: {
              selected: action.categories,
            },
          },
        };
      case types.PORTFOLIO_CLEAR_FILTERS:
        return {
          ...state,
          searchTerm: null,
          isFiltering: false,
          tags: [],
          modal: {
            isShowing: false,
          },
          filter: initialState.filter,
        };
      case types.PORTFOLIO_TOGGLE_MODAL:
        return {
          ...state,
          modal: {
            isShowing: !state.modal.isShowing,
          },
        };
      case types.PORTFOLIO_APPLY_FILTERS:
        return {
          ...state,
          isFiltering: true,
          modal: {
            isShowing: false,
          },
        };
      case types.PORTFOLIO_SET_TAGS:
        return update(state, {
          tags: {
            $set: action.tags,
          },
        });
      case types.PORTFOLIO_SET_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: action.term,
          },
          isFiltering: {
            $set: true,
          },
        });
      case types.PORTFOLIO_SET_CURRENT_PAGE:
        return update(state, {
          currentPage: {
            $set: action.page,
          },
        });
      case types.PORTFOLIO_SET_PROJECTS:
        return update(state, {
          projects: {
            $set: action.projects,
          },
        });
      default:
        return state;
    }
  };

export default portfolioReducer;
