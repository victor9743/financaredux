import { configureStore } from '@reduxjs/toolkit';
import produtosSlice from './slices/produtosSlice';

export default configureStore({
  reducer: {
    produto: produtosSlice
  },
})