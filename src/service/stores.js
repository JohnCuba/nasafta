import { writable } from 'svelte/store';
import utils from './utils';
import SceneManadger from '../components/3d/Scene'

export const date = writable(utils.getDateString());

export const scene = writable(new SceneManadger())

export const objects = writable([]);

export const stage = writable(0);
