import ms from 'ms'

const map = {
  d: 'days',
  m: 'minutes',
  h: 'hours',
  s: 'secons',
  ms: 'milisecons'
}

const timeAgo = (date) => {
  const timeDiff = new Date() - date;
  return ms(timeDiff, { long: true, ago: true });
}

export default timeAgo;