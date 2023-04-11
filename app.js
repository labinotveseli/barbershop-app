const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const date = form.date.value;
  const time = form.time.value;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;

  // Creating an appointment object
  const appointment = {
    date,
    time,
    name,
    email,
    phone
  };

  // Appointments from localStorage or create an empty array
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

  appointments.push(appointment);

  // Save the updated appointments array to localStorage
  localStorage.setItem('appointments', JSON.stringify(appointments));

  form.reset();
  
  alert('Yaay. Appointment booked successfully!');
});

// Getting the appointments from localStorage and display them on the page
const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
const appointmentsList = document.querySelector('#appointments-list');
appointments.forEach((appointment) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>Date:</strong> ${appointment.date}<br>
    <strong>Time:</strong> ${appointment.time}<br>
    <strong>Name:</strong> ${appointment.name}<br>
    <strong>Email:</strong> ${appointment.email}<br>
    <strong>Phone:</strong> ${appointment.phone}
  `;
  appointmentsList.appendChild(li);
});
