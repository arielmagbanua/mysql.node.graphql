module.exports = {
  hello() {
    return {
      text: 'Hello World',
      views: 900,
    };
  },
  products() {
    return [
      {
        sku: 'PROD-1',
        description: 'Kamote Hash Browns',
        title: 'Kamote Hash Browns',
        comment: 'This is the comment',
        price: 300.55,
        weight: 500,
      },
      {
        sku: 'PROD-2',
        description: 'Patatas Hash Browns',
        title: 'Patatas Hash Browns',
        comment: 'This is the comment',
        price: 30.55,
        weight: 50,
      },
    ];
  },
};
