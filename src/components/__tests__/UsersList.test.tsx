import React from 'react';
import {combineReducers, createStore} from "redux";
import usersReducer from "../../state/ducks/users/reducers";
import {Provider} from "react-redux";
import UsersList from "../UsersList";
import {requestUsers} from "../../state/ducks/users/actions";
import { mount } from "enzyme";

describe('<UsersList /> unit test', () => {
    const initialState = {users: {data: [], loading: false}};
    const reducers = combineReducers({users: usersReducer});
    const getWrapper = ((mockStore = createStore(reducers, initialState)) => mount(
        <Provider store={mockStore}>
            <UsersList />
        </Provider>
    ));

    it('should dispatch user request', () => {
        const mockStore = createStore(reducers, initialState);
        mockStore.dispatch = jest.fn();
        const wrapper = getWrapper(mockStore);
        expect(wrapper.find("#details")).toEqual({});
        wrapper.find('button').simulate('click');
        expect(mockStore.dispatch).toHaveBeenCalledWith(requestUsers());
    });

    it('should render user list items', () => {
        const mockStore = createStore(reducers, {
            ...initialState,
            users: {
                ...initialState.users,
                data: [{firstname: "David", lastname: "robson", email: "david@davidrobson.co.uk"}]
            }
        });
        mockStore.dispatch = jest.fn();
        const wrapper = getWrapper(mockStore);

        expect(wrapper.find(UsersList)).toMatchSnapshot();

    });
});