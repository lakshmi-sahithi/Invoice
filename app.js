const niceInvoice = require("nice-invoice");
const niceinvoice = require("nice-invoice");
const invoiceDetail = {
    shipping: {
        name: "Lakshmi Sahithi",
        address: "1234 Main Street",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        postal_code: 500070
    },
    items: [
        {
            item: "Violin",
            description: "Pure Wooden",
            quantity: 1,
            price: 3000.00,
            tax: "10%"
        },
        {
            item: "Watch",
            description: "Wall watch for office",
            quantity: 2,
            price: 50.00,
            tax: "10%"
        },
        {
            item: "Water Glass Set",
            description: "Water glass set for office",
            quantity: 1,
            price: 50.00,
            tax: "10%"
        },
        {
            item: "Chair",
            description: "Wooden chair",
            quantity: 1,
            price: 50.00,
            tax: "10%"
        }
    ],
    subtotal: 3465,
    total: 3465,
    order_number: 123456,
    header: {
        company_name: "Morfsys",
        company_logo: "logo.jpg",
        company_address: "705, Adriatica, C Wing, Casa Rio, Palava city, Dombivli East, Maharashtra 421204",
    },
    footer: {
        text: "Copyright2021 All Rights Reserved| Morfsys"
    },
    currency_symbol: "Rs.",
    date: {
        billing_date: "19 August 2021",
        due_date: "23 August 2021 ",
    }
};

niceInvoice(invoiceDetail, 'Invoice.pdf');