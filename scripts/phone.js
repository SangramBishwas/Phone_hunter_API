const loadPhone = async (searchValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = phones => {
    //1. access the phone container
    const phoneContainer = document.getElementById('phone-container')
    //clear phone container before adding card
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone);
        //2. creat a division to show this data of phone
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-black-100 shadow-xl`;
        //3. Set innerHTML
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
    <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
`
        //4. append Child
        phoneContainer.appendChild(phoneCard)
    });
}

const handleSearch = () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    loadPhone(searchText);
}
// loadPhone();