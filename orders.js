const orders =
[
    {
        userId : 1,
        orders : 17
    },
    {
        
        userId : 2,
        orders : 12
    },
    {
        
        userId : 1,
        orders : 23
    },
    {
        
        userId : 2,
        orders : 10
    },
    {
        
        userId : 1,
        orders : 60
    }
]

// calculate total amount of orders placed by user 1

const result = orders.filter(o => o.userId === 1).map(o => o.orders).reduce((a, b) => a + b);

console.log(result);