import { useContext } from 'react';
import { AppContextState } from '../wrappers/Context';

export default function useStateContext() {
    return useContext(AppContextState);
}