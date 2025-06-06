window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const container = document.getElementById('confirmation-details');
  
    const fields = ["fname", "lname", "email", "phone", "organization", "timestamp"];
  
    fields.forEach(field => {
      const value = params.get(field);
      if (value) {
        const p = document.createElement('p');
        p.textContent = `${field.replace(/^(.)/, c => c.toUpperCase())}: ${value}`;
        container.appendChild(p);
      }
    });
  });
  