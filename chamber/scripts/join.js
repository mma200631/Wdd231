document.addEventListener('DOMContentLoaded', () =>{
    const timestanpField= document.getElementById('timestamp');
    timesstampField.value= new Date().toISOString();

    const modalTriggers = document.querySelectorAll('.modal-triggers');
    const modals = document.querySelectorAll('dailog');

    modalTriggers.forEach(triggers => {
        triggers.addEventListener('click', (e)=>{
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal')
            document.getElementById('modalId').showModal();
        })
    })

    modals.forEach(modal=>{
        modal.addEventListener('click', (e)=>{
            if(e.target===modal){
                modal.close();
            }
        })
    })

})