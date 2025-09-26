const users = [
    {username: 'user1', password: 'password1'}
    {username: 'user2', password: 'password2'}
    {username: 'user3', password: 'password3'}
]

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password);

    if (user) {
        alart('login successful! Redirecting to dashboard...');
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
    
});