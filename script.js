document.getElementById("showDialogButton").addEventListener("click", function() {
    alert("Peringkat ke-3 dalam kelas dan Juara 4 tournament badminthon");
  });
  
  document.getElementById("m").addEventListener("click", function() {
    alert("Peringkat ke-17 dalam kelas dan Juara 3 tournament Futsal O2SN");
  });

  document.getElementById("h").addEventListener("click", function() {
    alert("Peringkat ke-1 dalam kelas dan Champhions dalam olahraga bidang Futsal");
  });

  document.getElementById("l").addEventListener("click", function() {
    alert("Membuat Project Website");
  });

  document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');

    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
  
      if (scrollPosition > windowHeight * 0.7) {
        animatedText.classList.add('show');
      } else {
        animatedText.classList.remove('show');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });




