import { watch } from "vue";

export function useWatchCharacters<T extends { length: number, [x: string]: any }>(valueToWatch: T, maxChars: number = 100) {
    watch(valueToWatch, (newVal, oldVal) => {
        if (newVal.length === maxChars) {
            alert(`Only ${maxChars} characters allowed`);
        }
    });
}