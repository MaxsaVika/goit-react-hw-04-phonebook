export const theme = Object.freeze({
  colors: {
    darkText: '#212121',
    lightText: '#6e6e6e',
    whiteText: '#fff',

    darkBG: '#ddd',
    lightBG: '#eee',
    whiteBG: '#fff',

    good: '#f7b04f',
    neutral: '#60784c',
    bad: '#7d3057',
  },
  space: [0, '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  sizes: {
    feedbackItem: '100px',
    feedbackBtnW: '90px',
    feedbackBtnH: '25px',
    statList: '250px',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '22px',
    xl: '26px',
    xxl: '32px',
  },
  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  borders: {
    cardInner: '1px solid #ccc',
  },
  radii: {
    none: '0',
    card: '3px',
    round: '50%',
  },
  shadows: {
    generic:
      '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
    text: '1px 1px 2px grey',
    btnText: '1px 1px 2px white',
  },
});
