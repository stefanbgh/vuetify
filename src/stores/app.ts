import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const useAppStore = defineStore('app', () => {
    // ex
    const app = ref<number>(0) as Readonly<Ref<number>>;

    return { app }
});