 let bookings = [];
        const bookingForm = document.getElementById('booking-form');
        const movieSelect = document.getElementById('movie-select');
        const showtimeSelect = document.getElementById('showtime-select');
        const emailInput = document.getElementById('email-input');
        const quantityInput = document.getElementById('quantity-input');
        const liveTotalPrice = document.getElementById('live-total-price');
        const messageDisplay = document.getElementById('message-display');
        const resetBtn = document.getElementById('reset-btn');
        const bookingCountEl = document.getElementById('booking-count');
        const searchInput = document.getElementById('search-input');
        const bookingsList = document.getElementById('bookings-list');
        const noBookingsText = document.getElementById('no-bookings-text');
        [movieSelect, quantityInput].forEach(element => {
            element.addEventListener('input', calculateLivePrice);
        });
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            clearMessage();

            const selectedOption = movieSelect.options[movieSelect.selectedIndex];
            const movieName = movieSelect.value;
            const pricePerTicket = parseFloat(selectedOption.getAttribute('data-price')) || 0;
            const showtime = showtimeSelect.value;
            const email = emailInput.value.trim();
            const quantity = parseInt(quantityInput.value);
            if (!movieName || !showtime || !email || isNaN(quantity) || quantity <= 0) {
                showMessage("Please fill all details correctly.", "red");
                return;
            }

            const totalPrice = pricePerTicket * quantity;
            const bookingId = Date.now(); 
            const newBooking = {
                id: bookingId,
                movie: movieName,
                showtime: showtime,
                email: email,
                quantity: quantity,
                totalPrice: totalPrice
            };
            bookings.push(newBooking);
            renderBookings();
            const emailSubject = encodeURIComponent(`Booking Confirmation: ${movieName}`);
            const emailBody = encodeURIComponent(
                `Thank you for your booking!\n\n` +
                `Here are your details:\n` +
                `Movie: ${movieName}\n` +
                `Showtime: ${showtime}\n` +
                `Tickets: ${quantity}\n` +
                `Total Price: ₹${totalPrice}\n\n` +
                `Enjoy your show!`
            );
            window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
            bookingForm.reset();
            liveTotalPrice.textContent = "0";
            showMessage("Booking successful! System opening your email client to send confirmation...", "green");
        });
        resetBtn.addEventListener('click', function() {
            bookingForm.reset();
            liveTotalPrice.textContent = "0";
            clearMessage();
        });
        searchInput.addEventListener('input', function() {
            const filterText = searchInput.value.toLowerCase();
            renderBookings(filterText);
        });
        function calculateLivePrice() {
            const selectedOption = movieSelect.options[movieSelect.selectedIndex];
            const price = parseFloat(selectedOption.getAttribute('data-price')) || 0;
            const qty = parseInt(quantityInput.value) || 0;
            
            if(qty >= 0) {
                liveTotalPrice.textContent = price * qty;
            } else {
                liveTotalPrice.textContent = "0";
            }
        }
        function renderBookings(filter = "") {
            bookingsList.innerHTML = ""; 
                        const filteredBookings = bookings.filter(b => b.movie.toLowerCase().includes(filter));

            if (filteredBookings.length === 0) {
                noBookingsText.style.display = "block";
            } else {
                noBookingsText.style.display = "none";
            }
            filteredBookings.forEach(booking => {
                const li = document.createElement('li');
                li.style.marginBottom = "10px";
                li.innerHTML = `
                    <strong>${booking.movie}</strong> - ${booking.showtime}<br>
                    ${booking.quantity} Ticket(s) | Total: ₹${booking.totalPrice}<br>
                    <small>Sent to: ${booking.email}</small> <br>
                    <button onclick="cancelBooking(${booking.id})">Cancel Booking</button>
                `;
                bookingsList.appendChild(li);
            });
            bookingCountEl.textContent = bookings.length;
        }
        window.cancelBooking = function(id) {
            bookings = bookings.filter(booking => booking.id !== id);
            renderBookings(searchInput.value.toLowerCase());
            showMessage("Booking cancelled successfully.", "blue");
        };
        function showMessage(text, color) {
            messageDisplay.textContent = text;
            messageDisplay.style.color = color;
        }

        function clearMessage() {
            messageDisplay.textContent = "";
        }