
    function getFormvalue(event) {
      
      event.preventDefault();

      
      const firstName = document.forms["nameForm"]["fname"].value.trim();
      const lastName = document.forms["nameForm"]["lname"].value.trim();

    
      alert(`${firstName} ${lastName}`);
    }

    document.getElementById("nameForm").addEventListener("submit", getFormvalue);
