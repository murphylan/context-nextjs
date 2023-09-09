'use client';
import React, { Dispatch, createContext, useCallback, useMemo, useReducer } from 'react';

type User = {
  name?: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
};

type AuthAction = {
  type: 'LOGIN' | 'LOGOUT' | 'UPDATE';
  payload: User | null;
};

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

const authReducer = (state: AuthState, action: AuthAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN' || 'UPDATE': {
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    }
    case 'LOGOUT': {
      return {
        user: null,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, internalDispatch] = useReducer(authReducer, initialState);

  // 使用 useCallback 封装 internalDispatch，创建一个包装函数，接受一个 action 对象并调用内部的 dispatch
  const dispatch = useCallback(
    (action: AuthAction) => {
      internalDispatch(action);
    },
    [internalDispatch]
  );

  // 使用 useMemo 封装上下文对象
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
