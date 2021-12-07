var Bluetooth = require('./bluetooth/bluetooth');
var GrainfatherCommands = require('./bluetooth/grainfather-commands');

const bluetooth = new Bluetooth();
const grainfatherCommands = new GrainfatherCommands();

bluetooth.once('ready', async () => {
    let commands = grainfatherCommands.getTogglePump();

    // Send the commands one by one
    for(const command of commands) {
        await bluetooth.send(command).catch(console.log);
    }

    console.log("Pump toggled :)");
});


// Example for receiving data from the grainfather
/*
    bluetooth.on('data', (data) => {
        const notification = grainfatherCommands.parseNotification(data.toString());
        console.log(notification);
    });
*/