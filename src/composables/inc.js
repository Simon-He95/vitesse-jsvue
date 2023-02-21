import { ref } from 'vue'

export const useInc = (n = ref(0)) => {
  const inc = (v = 1) => (n.value += v)
  return [n, inc]
}
