const PriceRange = [
  {
    value: 1,
    description: "$0.00 - $50.00",
    upper: 50,
    lower: 0
  },
  {
    value: 2,
    description: "$50.00 - $100.00",
    upper: 100,
    lower: 50
  },
  {
    value: 4,
    description: "$100.00 - $150.00",
    upper: 150,
    lower: 100
  },
  {
    value: 5,
    description: "$150.00 - $200.00",
    upper: 200,
    lower: 150
  },
  {
    value: 6,
    description: "$200.00+ ",
    upper: Infinity,
    lower: 200
  }
];

export default PriceRange;
