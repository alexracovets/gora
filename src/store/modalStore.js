import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const modalStore = create(immer((set) => ({
    isPayModal: false,
    isModalProgress: false,
    setIsPayModal: (value) => set((state) => {
        state.isPayModal = value;
    }),
    setIsModalProgress: (value) => set((state) => {
        state.isModalProgress = value;
    })
})));

export default modalStore;
