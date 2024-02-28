const loadPhone = async (searchValue = '13') => {
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
  //'Show all' button will be show when the number of phone is more than 12.
  const showAllContainer = document.getElementById('show-all');
  if (phones.length > 12) {
    showAllContainer.classList.remove('hidden');
  } else {
    showAllContainer.classList.add('hidden');
  }
  //display first 12 phones
  phones = phones.slice(0, 12);
  phones.forEach(phone => {
    // console.log(phone);
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
      <button onclick ="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
`
    //4. append Child
    phoneContainer.appendChild(phoneCard)
  });
  toggleLoadingSpinner(false);
}

// const handleSearch = () => {
//   const searchFiled = document.getElementById('search-field');
//   const searchText = searchFiled.value;
//   loadPhone(searchText);
// }
const handleSearch2 = () => {
  const searchFiled = document.getElementById('search-input');
  const searchText = searchFiled.value;
  loadPhone(searchText);
  toggleLoadingSpinner(true);
}
const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-container')
  if (isLoading) {
    loadingSpinner.classList.remove('hidden');
  } else {
    loadingSpinner.classList.add('hidden')
  }
}
const handleShowDetails = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phoneData = data.data;
  showDetails(phoneData)
}

const showDetails = (phone) =>{
  const phoneName = document.getElementById('show-details-phone-name');
  phoneName.innerText = phone.name;
  show_details_modal.showModal()
}

loadPhone();