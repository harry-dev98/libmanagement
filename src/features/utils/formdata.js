const loginform = [
    {
        label: 'Username', 
        name: 'username', 
        type: 'text', 
        title: 'Type your username', 
        required: true, 
    },
    {
        label: 'Password', 
        name: 'password', 
        type: 'password', 
        title: 'Type your password', 
        required: true, 
    },
    {
        label: 'Admin/Staff', 
        name: 'role', 
        type: 'checkbox', 
        title: 'Check if loging in as admin/staff', 
        required: true, 
    },
];
const registrationform = [
    {
        label: 'Username', 
        name: 'username', 
        type: 'text', 
        title: 'Type your username', 
        required: true, 
    },
    {
        label: 'Password', 
        name: 'password', 
        type: 'password', 
        title: 'Type your password', 
        required: true, 
    },
    {
        label: 'Confirm Password', 
        name: 'confirm password', 
        type: 'password', 
        title: 'Re-Type your password', 
        required: true, 
    },
    {
        label: 'Email', 
        name: 'email', 
        type: 'email', 
        title: 'Type your email id', 
        required: true, 
    },
    {
        label: 'Mob. Number', 
        name: 'mobile', 
        type: 'number', 
        title: 'Type your email id', 
        required: true, 
    },
];

const searchBook = [
    {
        label: 'Search', 
        name: 'search', 
        type: 'text', 
        title: 'Type your query', 
        required: false, 
    },
    {
        label: 'Available', 
        name: 'available', 
        type: 'checkbox', 
        title: 'Tick to search only available books', 
        required: false, 
    }
];

const returnBook = [
    {
        label: 'Book Id', 
        name: 'bookid', 
        type: 'text', 
        title: 'Type book id here', 
        required: false, 
    },
    {
        label: 'Username', 
        name: 'username', 
        type: 'text', 
        title: 'Type username', 
        required: false, 
    },
    
];


export {
    loginform, 
    registrationform,
    searchBook,
    returnBook,
}