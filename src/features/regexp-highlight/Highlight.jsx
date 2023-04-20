const Highlight = ({ starter, starters, context }) => {
  const types = {
    hashtag: '(#[a-zçşıəğİÜ-]+)',
    mentioning: '(@[a-zçşıəğİ]-+)',
  };

  console.log(types[starter]);
  let regularExpressions = new RegExp(types[starter] || `(${starter}+)`, 'gi');

  console.log(starters?.map(starter => types[starter]));
  let regularExpressions2 = new RegExp(
    starters?.map(starter => types[starter]).join('|') || `(${starters[0]}+)`,
    'gi'
  );

  let splittedParts = context
    ?.split(regularExpressions)
    .filter(chart => chart && chart.trim() !== '');

  console.log(splittedParts);

  const text = splittedParts.map(part =>
    regularExpressions.test(part) ? (
      <>
        <span className="greeny">{part.replace('@', '')}</span>
        <br />
      </>
    ) : (
      part
    )
  );

  return <>{text}</>;
};

export default Highlight;
