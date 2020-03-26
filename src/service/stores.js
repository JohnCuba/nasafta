import { writable } from 'svelte/store';
import utils from './utils';

export const date = writable(utils.getDateString());

export const objects = writable([]);

export const stage = writable(0);
