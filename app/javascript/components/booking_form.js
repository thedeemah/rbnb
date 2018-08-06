import flatpickr from 'flatpickr';

let totalPrice = document.getElementById("total-price");
const pricePerHour = parseInt(document.getElementById("booking-price").innerHTML);

function timeDiffInHours(startTime, endTime) {
  return (endTime - startTime) / 3600000
};

function priceCalculator(timeDiff) {
  return (timeDiff * pricePerHour).toFixed(2);
};


const toggleDatepicker = function() {

  const startDateinput = document.getElementById('booking_start_time');
  const endDateinput = document.getElementById('booking_end_time');

  if (startDateinput && endDateinput) {
    flatpickr(startDateinput, {
    minDate: 'today',
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    onClose: function() {
          let startTime = startDateinput.value;
          let endTime = endDateinput.value;

          if (startTime !== "" && endTime !== "") {
            let result = timeDiffInHours(Date.parse(startTime), Date.parse(endTime));
            let price = priceCalculator(result);
            console.log(price);
            totalPrice.innerHTML = price;
          }
        }
  });

    const endDateCalendar =
      flatpickr(endDateinput, {
         enableTime: true,
        dateFormat: 'Y-m-d H:i',
         onClose: function() {
          let startTime = startDateinput.value;
          let endTime = endDateinput.value;

          if (startTime !== "" && endTime !== "") {
            let result = timeDiffInHours(Date.parse(startTime), Date.parse(endTime));
            let price = priceCalculator(result);
            console.log(price);
            totalPrice.innerHTML = price;
          }
        }
      });
  }
};

export { toggleDatepicker };
