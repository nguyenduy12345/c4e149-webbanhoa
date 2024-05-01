
const arrSP = [
  {
    hinhAnh: "baby_flowers_ocs.jpg",
    ten: "NEW BABY FLOWERS",
    moTa: "New bundle of joy? Send love to their doorstep with flowers to welcome their latest addition.",
  },

  {
    hinhAnh: "birthday_flowers_ocs.jpg",
    ten: "BIRTHDAY FLOWERS",
    moTa: "Whether it's a milestone celebration or you want to boost a loved one's special day, these are the flowers to send.",
  },

  {
    hinhAnh: "thanks_flowers_ocs.jpg",
    ten: "THANK YOU FLOWERS",
    moTa: "Nothing says thank you like a FLOWERBX delivery. Show your appreciation with flowers full of gratitude.",
  },

  {
    hinhAnh: "anniversary_flowers_ocs.jpg",
    ten: "ANNIVERSARY FLOWERS",
    moTa: "From a year to a decade, mark each anniversary with a bouquet from us, always as timeless as your love.",
  },

  {
    hinhAnh:"engagement_flowers_ocs.jpg",
    ten: "ENGAGEMENT FLOWERS",
    moTa: "They said yes! Share in their big moment by sending a bunch that celebrates their love.",
  },

  {
    hinhAnh: "congrats_flowers_ocs.jpg",
    ten: "CONGRATULATIONS FLOWERS",
    moTa: "Send a heartfelt well done with a bunch of our seasonal best, with varieties that show you share their happiness.",
  },

  {
    hinhAnh: "apology_flowers_ocs.jpg",
    ten: "APOLOGY FLOWERS",
    moTa: "When you can't find the words, say sorry in floral with our edit of flowers fit for those more sensitive occasions.",
  },

  {
    hinhAnh: "get_well_soon_flowers_ocs.jpg",
    ten: "GET WELL SOON FLOWERS",
    moTa: "Friend that's feeling under the weather? Brighten their days with these mood-boosting bunches.",
  },

  {
    hinhAnh: "sympathy_flowers_ocs.jpg",
    ten: "SYMPATHY FLOWERS",
    moTa: "Send condolences or let them know you're thinking of them by choosing varieties with sentiment from our sympathy collection.",
  },
]

var str = "";

for (let i = 0; i < arrSP.length; i++) {
    str += `<div class="items">
        <img src="img/occasions/${arrSP[i].hinhAnh}" alt="">
        <h4 class="ten-san-pham">${arrSP[i].ten}</h4>
        <p class="mo-ta">${arrSP[i].moTa}</p>
        <button class="btn">SHOP NOW</button>
    </div>`
}

document.querySelector("#danh-sach-san-pham").innerHTML = str



