import React, { useEffect, useState } from 'react';
import { ref, set, onValue, remove } from 'firebase/database';
import { database } from './firebase';

function Registration() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ name: '', password: '' });
    const [feedback, setFeedback] = useState('');
    const [editingUser, setEditingUser] = useState(null);

    const validateForm = () => {
        let hasError = false;
        const newError = { name: '', password: '' };

        if (name.trim() === '') {
            newError.name = 'User name is required';
            hasError = true;
        }

        if (password.trim() === '') {
            newError.password = 'Password is required';
            hasError = true;
        }

        setError(newError);
        return hasError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            const newUserRef = ref(database, `users/${name}`);
            set(newUserRef, { name, password })
                .then(() => {
                    setName('');
                    setPassword('');
                    setFeedback('User added successfully');
                    setEditingUser(null);
                })
                .catch(error => {
                    console.error('Error adding user: ', error);
                    setFeedback('Error adding user');
                });
        }
    };

    const handleDelete = (userName) => {
        const userRef = ref(database, `users/${userName}`);
        remove(userRef)
            .then(() => {
                setFeedback('User deleted successfully');
            })
            .catch(err => {
                console.error('Error deleting user: ', err);
                setFeedback('Error deleting user');
            });
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setName(user.name);
        setPassword(user.password);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            const userRef = ref(database, `users/${editingUser.name}`);
            set(userRef, { name, password })
                .then(() => {
                    setName('');
                    setPassword('');
                    setFeedback('User updated successfully');
                    setEditingUser(null);
                })
                .catch(error => {
                    console.error('Error updating user: ', error);
                    setFeedback('Error updating user');
                });
        }
    };

    useEffect(() => {
        const userRef = ref(database, 'users');
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const userList = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setUsers(userList);
            } else {
                setUsers([]);
            }
        });
    }, []);

    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={editingUser ? handleUpdate : handleSubmit}>
                <label htmlFor="name">User Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your user name"
                />
                {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                <button type="submit">{editingUser ? 'Update' : 'Submit'}</button>
            </form>
            {feedback && <p>{feedback}</p>}
            <h2>Registered Users</h2>
            <ul>
                {users.length > 0 ? (
                    users.map((el) => (
                        <li key={el.id}>
                            <span>{el.name}</span>
                            <button onClick={() => handleEdit(el)}>Edit</button>
                            <button onClick={() => handleDelete(el.name)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No users registered yet.</p>
                )}
            </ul>
        </div>
    );
}

export default Registration;

