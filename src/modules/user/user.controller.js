
// api logic for user management

// logic for getting user 

const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }

];

const getUser = (req, res) => {
    res.json(users);
};
const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
};

// export the getUser function so it can be used in the routes file
module.exports = { getUser, createUser };