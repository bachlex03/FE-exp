import { atomWithStorage } from 'jotai/utils';

export const counterAtom = atomWithStorage('jotai-counter', 0);
