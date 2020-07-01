const names = ['h1d', 'h2d', 'h3d', 'h4d'];
const shortNames = names.filter(name => {
    //console.log(name.length);
});

const geocode = (port, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data);
    }, 2000);
}

geocode('gl01', (data) => {
    data.latitude = 1062.4590;
    data.longitude = 2047.1941;

    console.log(data);
});