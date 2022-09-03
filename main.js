const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const funFactbtn = document.getElementById("funFactbtn")
const suprisebtn = document.getElementById("suprisebtn")
const doNotPressbtn = document.getElementById("doNotPress")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFact = () => {
    axios.get("http://localhost:4000/api/fact/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getSuprise = () => {
    axios.get("http://localhost:4000/api/suprise/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getDont = () => {
    axios.get("http://localhost:4000/api/dont/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
funFactbtn.addEventListener('click', getFact)
suprisebtn.addEventListener('click', getSuprise)
doNotPressbtn.addEventListener('click', getDont)