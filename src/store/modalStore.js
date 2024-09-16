import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const modalStore = create(immer((set) => ({
    isPayModal: false,
    setIsPayModal: (value) => set((state) => {
        state.isPayModal = value;
    })
})));

export default modalStore;
