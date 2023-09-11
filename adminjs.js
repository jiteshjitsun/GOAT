// Sample data for rooms and users
let rooms = [
    {
        id: 1,
        name: "Room A",
        seatingCapacity: 10,
        totalMeetings: 20,
        ratings: 4.5,
      },
      {
        id: 2,
        name: "Room B",
        seatingCapacity: 8,
        totalMeetings: 15,
        ratings: 4.0,
      },
      {
        id: 3,
        name: "Room C",
        seatingCapacity: 8,
        totalMeetings: 15,
        ratings: 4.0,
      },
      {
        id: 4,
        name: "Room D",
        seatingCapacity: 8,
        totalMeetings: 15,
        ratings: 4.0,
      },
      {
        id: 5,
        name: "Room E",
        seatingCapacity: 8,
        totalMeetings: 15,
        ratings: 4.0,
      },
      {
        id: 5,
        name: "Room E",
        seatingCapacity: 8,
        totalMeetings: 15,
        ratings: 4.0,
      },
      {
        id: 5,
        name: "Room E",
        seatingCapacity: 8,
        totalMeetings: 15,
        ratings: 4.0,
      },
      {
        id: 5,
        name: "Room E",
        seatingCapacity: 8,
        totalMeetings: 15,
        ratings: 4.0,
      },
      {
        id: 5,
        name: "Room E",
        seatingCapacity: 8,
        totalMeetings: 15,
        ratings: 4.0,
      },
];
let users = [];

// Function to add a room
function addRoom() {
    const name = document.getElementById('roomName').value;
    if (name) {
        rooms.every((room) => {
            room.id = room.id + 1;
            room.name = name;
        });
        displayRooms();
        document.getElementById('roomName').value = '';
    }
}

// Function to remove a room
function removeRoom(roomName) {
    rooms = rooms.filter((room) => room !== roomName);
    displayRooms();
}

// Function to display rooms
function displayRooms() {
    const roomList = document.getElementById('roomList');
    roomList.innerHTML = '';
    rooms.forEach((room) => {
        const li = document.createElement('p');
        li.textContent = room.id + " " + room.name + " ";
        const removeButton = document.createElement('button');
        removeButton.classList.add('btn');
        removeButton.style.backgroundColor = "red";
        removeButton.style.color = "#fff";
        li.style.marginRight = '100px';
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeRoom(room);
        li.appendChild(removeButton);
        roomList.appendChild(li);
    });
}

// Function to add a user
function addUser() {
    const userName = document.getElementById('userName').value;
    if (userName) {
        users.push(userName);
        displayUsers();
        document.getElementById('userName').value = '';
    }
}

// Function to remove a user
function removeUser(userName) {
    users = users.filter((user) => user !== userName);
    displayUsers();
}

// Function to display users
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach((user) => {
        const li = document.createElement('li');
        li.textContent = user;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeUser(user);
        li.appendChild(removeButton);
        userList.appendChild(li);
    });
}

// Function to display users
function displayManagers() {
    const managerList = document.getElementById('managerList');
    managerList.innerHTML = '';
    managers.forEach((manager) => {
        const li = document.createElement('li');
        li.textContent = manager;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeManager(manager);
        li.appendChild(removeButton);
        managerList.appendChild(li);
    });
}

// Function to add a manger
function addManager() {
    const managerName = document.getElementById('managerName').value;
    if (managerName) {
        users.push(managerName);
        displayManagers();
        document.getElementById('managerName').value = '';
    }
}

// Function to remove a manger
function removeManager(managerName) {
    manager = manager.filter((manager) => manager !== managerName);
    displayManagers();
}

// Initial display
displayRooms();
displayUsers();
displayManagers();
