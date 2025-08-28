const cardsInfo = [
    {
      title: "National Emergency Number",
      description: "National Emergency",
      number: "999",
      category: "All",
      icon: "./assets/emergency.png",
      bgColor: "#FFE3E2",
    },
    {
      title: "Police Helpline Number",
      description: "Police",
      number: "999",
      category: "Police",
      icon: "./assets/police.png",
      bgColor: "#E2F0FF",
    },
    {
      title: "Fire Service Number",
      description: "Fire Service",
      number: "999",
      category: "Fire",
      icon: "./assets/fire.png",
      bgColor: "#FFE3E2",
    },
    {
      title: "Ambulance Service",
      description: "Ambulance",
      number: "1994-999999",
      category: "Health",
      icon: "./assets/ambulance.png",
      bgColor: "#FFE3E2",
    },
    {
      title: "Women & Child Helpline",
      description: "Women & Child Helpline",
      number: "109",
      category: "Help",
      icon: "./assets/emergency.png",
      bgColor: "#FFE3E2",
    },
    {
      title: "Anti-Corruption Helpline",
      description: "Anti-Corruption",
      number: "106",
      category: "Govt.",
      icon: "./assets/emergency.png",
      bgColor: "#FFE3E2",
    },
    {
      title: "Electricity Helpline",
      description: "Electricity Outage",
      number: "16216",
      category: "Electricity",
      icon: "./assets/emergency.png",
      bgColor: "#FFE3E2",
    },
    {
      title: "Brac Helpline",
      description: "Brac",
      number: "16445",
      category: "NGO",
      icon: "./assets/brac.png",
      bgColor: "#FFE3E2",
    },
    {
      title: "Bangladesh Railway Helpline",
      description: "Bangladesh Railway",
      number: "163",
      category: "Travel",
      icon: "./assets/railway.png",
      bgColor: "#FFE3E2",
    },
];
  
const cardsContainer = document.getElementById("cards-container");

for(const cardInfo of cardsInfo) {
    const card = `
        <div class="bg-white p-8 flex flex-col h-full shadow rounded-xl">
            <div class="row flex justify-between items-center">
                <div class="w-[60px] h-[60px] bg-[${cardInfo.bgColor}] items-center flex justify-center rounded-2xl"><img class="w-[32px] h-[32px]" src=${cardInfo.icon} alt="emergency icon"></div>
                <button class="cursor-pointer fav-btn"><i class="fa-regular fa-heart text-2xl"></i></button>
            </div>
            <div class="row my-3">
                <h3 class="card-title font-bold text-2xl ">${cardInfo.title}</h3>
                <p class=" text-xl">${cardInfo.description}</p>
            </div>
            <div class="row mt-auto">
              <div class="row">
                  <p class="phone-number text-2xl md:text-3xl font-bold">${cardInfo.number}</p>
                  <div class="badge bg-[#F2F2F2] rounded-3xl mt-2">${cardInfo.category}</div>
              </div>
              <div class="row flex justify-between gap-2 mt-4">
                  <button  class="copy-btn btn w-[50%] border-1 border-gray-300 rounded-xl bg-white text-gray-500"><i class="fa-regular fa-copy"></i> Copy</button>
                  <button id="" class="call-btn btn w-[50%] rounded-xl border-1 border-[#00A63E] bg-[#00A63E] text-white"><i class="fa-solid fa-phone"></i> Call</button>
              </div>
            </div>
        </div>
    `;
    const element = document.createElement('div');
    element.innerHTML = card;
    cardsContainer.appendChild(element);

    // favorite button functionality
    const favBtn = element.querySelector(".fav-btn");
    const favCount = document.getElementById("fav-count");
    favBtn.addEventListener("click", function() {
      const curCount = parseInt(favCount.innerText); 
      favCount.innerText = (curCount+1);
    });

    // copy functionality
    const copyBtn = element.querySelector(".copy-btn");
    copyBtn.addEventListener("click", () => {
      const number = element.querySelector(".phone-number").innerText.trim();
      navigator.clipboard.writeText(number)
        .then(() => {
          alert(`Copied: ${number}`);
        });
        const copyCount = document.getElementById("copy-count");
        const curCount = parseInt(copyCount.innerText);
        copyCount.innerText = (curCount+1);

    });

    // call button functionality
    const callBtn = element.querySelector(".call-btn");
    
    callBtn.addEventListener("click", function() {
      const creditCount = document.getElementById("credit-count");
      const curCredit = parseInt(creditCount.innerText); 
      if(curCredit >= 20) {
        creditCount.innerText = (curCredit-20);
        const number = element.querySelector(".phone-number").innerText.trim();
        const cardTitle = element.querySelector(".card-title").innerText.trim();
        alert(`Calling ${cardTitle} (${number})...`);
      } else {
        alert("Insufficient credit to make a call. Keep at least 20 credits.");
      }
      const cardTitle = element.querySelector(".card-title").innerText.trim();
      const phoneNumber = element.querySelector(".phone-number").innerText.trim();
      const time = new Date().toLocaleTimeString();
      const callLog = document.createElement('div');
      callLog.innerHTML = `
        <div>
            <p class=" font-semibold lg:text-xl">${cardTitle}</p>
            <p>${phoneNumber}</p>
        </div>
        <div>
            ${time}
        </div>
      `;
      callLog.classList.add("flex", "justify-between", "items-center","gap-5","bg-[#FAFAFA]","rounded-xl","p-4");
      const historyCalls = document.getElementById("history-calls");
      historyCalls.appendChild(callLog);
      console.log(callLog);
    });
}

