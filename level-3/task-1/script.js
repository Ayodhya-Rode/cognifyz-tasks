fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const userList = document.getElementById('user-list');

    data.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user-card';
      userDiv.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;
      userList.appendChild(userDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
