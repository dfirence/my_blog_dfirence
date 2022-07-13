const getMaResource = (resouce) => {
    fetch('https://raw.githubusercontent.com/dfirence/mitre-assistant/master/datasamples/adversaries/v8/overview/apt-c-36.json')
      .then(response => response.json())
      .then(data => console.log(data));
};

export default getMaResource;