let User = function(firstName, lastName, id){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.isOnline = false;
    this.refresh = function(isOnline){
        if(this.isOnline===isOnline){
            return;
        }

        let statusElements = document.querySelectorAll(".onlineChecker .status");
        let i = users.findIndex(elem => elem.id===this.id);
        let statusElem = statusElements[i];



        if(isOnline){
            statusElem.innerHTML = "Online";
            statusElem.classList.add("online");
            statusElem.classList.remove("offline");

            audioPlayer.play();
            console.log("played");



        }
        else {
            statusElem.innerHTML = "Offline";
            statusElem.classList.add("offline");
            statusElem.classList.remove("online");
        }
        this.isOnline = isOnline
    }
};

let audioPlayer;

let users = [];
Array.prototype.generateHTML = function(){
    let wrapper = document.createElement("div");
    wrapper.classList.add("onlineChecker");

    users.forEach(elem => {
        let fullElem = document.createElement("div");
        fullElem.classList.add("wrapper");
        let nameElem = document.createElement("span");
        nameElem.classList.add("name");
        nameElem.innerHTML = elem.firstName + " " + elem.lastName;
        fullElem.appendChild(nameElem);
        let statusElem = document.createElement("span");
        statusElem.classList.add("status");
        statusElem.classList.add("offline");
        statusElem.innerHTML = "Offline";
        fullElem.appendChild(statusElem);
        wrapper.appendChild(fullElem);
    });
    return wrapper;
};




window.onload = function(){

    VK.init({
        apiId: 6803777
    });


    VK.Auth.login();



    users.push(new User("Настя", "Каргина", 71951741));
    users.push(new User("Артем", "Маркин", 80714496));

    document.body.appendChild(users.generateHTML());

    audioPlayer = document.getElementById("player");

/*

    setTimeout(function(){
        users[0].refresh(true);

    },5000)
*/


    a();
};


let nextFunc = a;
function a(){

    for(let i=0; i<users.length; i++){
        VK.Api.call('users.get', {user_ids: users[i].id, fields: "online", v: "5.73"}, function (r) {
            if (r.response) {
                console.log(r.response[0]);
                users[i].refresh(r.response[0].online);
            }
        });
    }


    setTimeout(function(){
        nextFunc();
    }, 5000);
}


