(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Mail to javascript code

document.getElementById('sendEmailLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent link navigation

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:evanschaun@gmail.com.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom:%0D%0A${encodeURIComponent(name)}%0D%0A${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;

    // Optionally, you can reset the form after submission
    document.getElementById('contactForm').reset();
  });


//   Resume
 
function viewFile(fileUrl) {
    const fileViewer = document.getElementById('fileViewer');
    fileViewer.innerHTML = '';

    const extension = fileUrl.split('.').pop().toLowerCase();

    if (extension === 'pdf') {
      const embed = document.createElement('embed');
      embed.src = fileUrl;
      embed.type = 'application/pdf';
      embed.style.width = '100%';
      embed.style.height = '600px';
      embed.setAttribute('readonly', true);
      fileViewer.appendChild(embed);
    } else if (extension === 'doc' || extension === 'docx' || extension === 'xls' || extension === 'xlsx' || extension === 'ppt' || extension === 'pptx') {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(fileUrl);
      iframe.style.width = '100%';
      iframe.style.height = '600px';
      iframe.setAttribute('readonly', true);
      fileViewer.appendChild(iframe);
    } else {
      const unsupportedMessage = document.createElement('p');
      unsupportedMessage.textContent = 'Unsupported file format. Cannot display the file.';
      fileViewer.appendChild(unsupportedMessage);
    }
   
  }