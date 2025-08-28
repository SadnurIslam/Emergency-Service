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
                <div><i class="fa-regular fa-heart text-2xl"></i></div>
            </div>
            <div class="row my-3">
                <h3 class="font-bold text-2xl ">${cardInfo.title}</h3>
                <p class=" text-xl">${cardInfo.description}</p>
            </div>
            <div class="row mt-auto">
              <div class="row">
                  <p class="text-2xl md:text-3xl font-bold">${cardInfo.number}</p>
                  <div class="badge bg-[#F2F2F2] rounded-3xl">${cardInfo.category}</div>
              </div>
              <div class="row flex justify-between gap-2 mt-4">
                  <button class="btn w-[50%] border-1 border-gray-300 rounded-xl bg-white text-gray-500"><i class="fa-regular fa-copy"></i> Copy</button>
                  <button class="btn w-[50%] rounded-xl border-1 border-[#00A63E] bg-[#00A63E] text-white"><i class="fa-solid fa-phone"></i> Call</button>
              </div>
            </div>
        </div>
    `;
    const element = document.createElement('div');
    element.innerHTML = card;
    cardsContainer.appendChild(element);
}

