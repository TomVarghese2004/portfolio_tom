var col= document.getElementById("column")
    var col1=document.getElementById("column1")
    function alertbox(){
        if(col1.style.display==='none'){
           col1.style.display='block';
        }
        else if (col1.style.display==='block') {
            col1.style.display='none';
        } else {
            col1.style.display='none';
        }
    }

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
  
    var x = setInterval(function() {
  
      seconds++;
  
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      var formattedTime = hours.toString().padStart(2, '0') + ":" +
                          minutes.toString().padStart(2, '0') + ":" +
                          seconds.toString().padStart(2, '0');
      document.getElementById("counter").innerHTML = formattedTime;
    }, 1000);

    let counter = 0;
    const slides = document.querySelector('.slider1');
    const slides1 = document.querySelector('.slider12');
    const slides2= document.querySelector('.slider13');
    const slides3 = document.querySelector('.slider14');
    const totalSlides = 4;

    function showSlide(index) {
        counter = index;
        slides.style.transform = `translateY(${-100 * counter}%)`;
        slides1.style.transform = `translateY(${-100 * counter}%)`;
        slides2.style.transform = `translateY(${-100 * counter}%)`;
        slides3.style.transform = `translateY(${-100 * counter}%)`;
    }

    function nextSlide() {
        counter = (counter + 1) % totalSlides;
        showSlide(counter);
    }
    setInterval(nextSlide, 3000);


    function send_mail(toEmail) {
      var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(toEmail);
      window.open(gmailUrl);
  }
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
      var names = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      var subject="contact form filled"
      var mailId="tomvarghese2004@gmail.com"
      var body = "Name:"+names +"\nEmail:"+email +"\nMessage:"+message 
    
      var gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(mailId) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.open(gmailUrl);
  });

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
