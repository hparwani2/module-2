document.getElementById("submit").onclick = (e) => {
  e.preventDefault();
  const target = document.getElementById("dateTime").value;
  let interval = setInterval(function () {
    let current = new Date();
    let diff = new Date(target).getTime() - current.getTime();

    document.getElementById("days").innerText = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );
    document.getElementById("hours").innerText = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    document.getElementById("minutes").innerText = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );
    document.getElementById("seconds").innerText = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

    if (diff < 0) {
      clearInterval(interval);
      document.getElementById("days").innerText = "N.A";
      document.getElementById("hours").innerText = "N.A";
      document.getElementById("minutes").innerText = "N.A";
      document.getElementById("seconds").innerText = "N.A";
    }
  }, 1000);
};
