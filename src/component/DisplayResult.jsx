const DisplayResult = ({data}) => {
  let parsedData = JSON.parse(data)
  //console.log(JSON.parse(currentResult));
  const associationRules = parsedData.association_rules;
  const frequent_patterns = parsedData.frequent_patterns;
  // console.log(associationRules);
  //console.log(frequent_patterns)

  // for(const [key,value] of Object.entries(frequent_patterns)){
  //   console.log(`Key : ${key} and value : ${value}`)
  // }

  const itemsAndCounts = {};

  for (const key in frequent_patterns) {
    const items = key
      .replace(/\(|\)|'/g, "") // Remove parentheses and single quotes
      .split(",") // Split by ', ' to get individual items
      .map((item) => item.trim()); // Trim any leading/trailing spaces
    //console.log(items)
    const count = frequent_patterns[key];
    itemsAndCounts[items.join(", ")] = count;
  }

  const rules = [];

  for (const key in associationRules) {
    const antecedent = key
      .replace(/\(|\)|'/g, "")
      .split(", ")
      .map((item) => item.trim());
    //  console.log(antecedent)

    const [consequentItems, confidence] = associationRules[key];
    const rule = {
      antecedent: antecedent.join(", "),
      consequent: consequentItems.join(", "),
      confidence,
    };
    rules.push(rule);
  }

  //console.log(rules);

  return (
    <>
      <h4>Frequent Itemsets</h4>
      <p>
        These are the items frequently bought from you.Support count specifies
        how many times the itemsets where bought comared to total transactions
      </p>
      <div>
        {Object.keys(itemsAndCounts).map((key) => (
          <div key={key}>
            <p>Items: {key}</p>
            <p>Count: {itemsAndCounts[key]}</p>
            <br />
          </div>
        ))}
      </div>
      <br />
      <h4>Strong Rules</h4>
      <div>
        {rules.map((rule, index) => (
          <div key={index}>
            <p>
              {rule.antecedent} =&gt; {rule.consequent}
            </p>
            <p>Confidence: {rule.confidence * 100} %</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};
export default DisplayResult;
