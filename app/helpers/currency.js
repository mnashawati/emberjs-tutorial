import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(params, hash = {}) {
    // {{currency 25}}
    const [number] = params;
    const { sign = '£' } = hash;
    const pounds = Math.floor(number);
    let pence = Math.floor(number * 100 % 100);

    if (pence.toString().length === 1) {
      pence = '0' + pence;
    }

    return `${sign}${pounds}.${pence}`;
  }
};
