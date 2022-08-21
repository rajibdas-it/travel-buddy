const busObject = {
  vehicle: "Bus",
  imageUrl:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  fairPerKilo: 2,
  capacity: 50,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam maxime necessitatibus dolore, voluptates consectetur rerum autem ex sint eveniet, voluptatem assumenda obcaecati laboriosam illum exercitationem unde! Possimus, iusto recusandae praesentium enim facere odit similique et odio facilis, commodi sed ipsam deleniti suscipit adipisci quos, animi ex sunt illo optio.",
};
const carObject = {
  vehicle: "Car",
  imageUrl:
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  fairPerKilo: 5,
  capacity: 5,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam maxime necessitatibus dolore, voluptates consectetur rerum autem ex sint eveniet, voluptatem assumenda obcaecati laboriosam illum exercitationem unde! Possimus, iusto recusandae praesentium enim facere odit similique et odio facilis, commodi sed ipsam deleniti suscipit adipisci quos, animi ex sunt illo optio.",
};
const bikeObject = {
  vehicle: "Bike",
  imageUrl:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  fairPerKilo: 4,
  capacity: 2,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam maxime necessitatibus dolore, voluptates consectetur rerum autem ex sint eveniet, voluptatem assumenda obcaecati laboriosam illum exercitationem unde! Possimus, iusto recusandae praesentium enim facere odit similique et odio facilis, commodi sed ipsam deleniti suscipit adipisci quos, animi ex sunt illo optio.",
};

function displayServices(service) {
  const mainSection = document.getElementById("main-section");
  const stringified = JSON.stringify(service);
  const div = document.createElement("div");
  div.innerHTML = `
<div class="card mb-5 mx-auto" style="max-width: 1200px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src=${service.imageUrl}
              class="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Transport Mode: ${service.vehicle}</h5>
              <p class="card-text">
               ${service.description}
              </p>
              <p class="card-text">
                <small class="text-muted">Fair Per KM $ ${service.fairPerKilo}</small> <small class="text-muted">Capacity ${service.capacity}</small>
              </p>
              <button onclick='handleBooking(${stringified})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Book Now
              </button>
            </div>
           
          </div>
          
        </div>
      </div>

`;
  mainSection.appendChild(div);
}

displayServices(busObject);
displayServices(carObject);
displayServices(bikeObject);

function handleBooking(obj) {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 18rem;">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Transport Mood: ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  
  
  
  `;
}
