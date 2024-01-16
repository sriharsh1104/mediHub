import { combineReducers } from 'redux';
// import { UserSlice } from '../Slices/user.slice'
import { LoaderSlice } from '../Slices/loader.slice'
import { IcoSlice } from '../Slices/ico.slice';
import { ThemeSlice } from '../Slices/theme.slice';
import { userDataSlice } from '../Slices/user.slice';

/**COMBINE ALL REDUCERS */
export const reducers = combineReducers({
    user: userDataSlice.reducer,
    loader: LoaderSlice.reducer,
    ico: IcoSlice.reducer,
    theme: ThemeSlice.reducer,
});