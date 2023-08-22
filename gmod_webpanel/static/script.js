const commandData = { command: "print('received from web')" }
const killPlayer = { command: "player.GetAll()[1]:Kill()"}

function hello() {
    fetch('/submit_command', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commandData)
    })
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.error('An error occured : ', error));
}

function killThePlayer() {
    fetch('/submit_command', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(killPlayer)
    })
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.error('An error occured : ', error));
}

function test() {
    fetch('/get_command')
        .then(response => response.json())
        .then(data => console.log(data))
}
