import koffi from 'koffi';

const test = koffi.types;

export const noop = () => {
    console.log({test});
};